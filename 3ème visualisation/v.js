//Code qui a inspiré: https://sciutoalex.github.io/p5-D3-cookbook/recipes-beginner/voronoi/

let dataPoints = [];
let voronoi;
let width = 1200, height = 800; //1200 sur 800 //windowWidth, windowHeight
let colorScale;
let hoveredIndex = -1;

function preload() {
  d3.csv("data.csv").then(data => {
    dataPoints = data.map(d => ({
      x: +d.Age,
      y: +d.TypeInstrument,
      category: d.Id, //|| "Inconnu",
      original: d
    })).filter(d => !isNaN(d.x) && !isNaN(d.y));

    const categories = Array.from(new Set(dataPoints.map(d => d.category)));
    colorScale = d3.scaleOrdinal()
      .domain(categories)
      .range(d3.schemeSet3);

    normalizeData();
    computeVoronoi();
    redraw();
  });
}

function setup() {
  createCanvas(1200, 800);
}

function draw() {
  background(255);

  if (voronoi) {
    noStroke();
    for (let i = 0; i < dataPoints.length; i++) {
      const cell = voronoi.cellPolygon(i);
      if (!cell) continue;

      fill(colorScale(dataPoints[i].category));
      if (i === hoveredIndex) {
        stroke(0);
        strokeWeight(6);
      } else {
        noStroke();
      }

      beginShape();
      for (let [x, y] of cell) {
        vertex(x, y);
      }
      endShape(CLOSE);
    }

    // points
    fill(0);
    noStroke();
    for (let pt of dataPoints) {
      ellipse(pt.x, pt.y, 5, 5);
    }

    // Affichage des infos si une cellule est survolée
    if (hoveredIndex !== -1) {
      let d = dataPoints[hoveredIndex].original;
      fill(255);
      stroke(0);
      strokeWeight(1);
      rect(mouseX + 10, mouseY + 10, 700, 200);//taille rectangle

      fill(0);
      noStroke();
      textSize(12);
      text(`ID: ${d.Id}`, mouseX + 15, mouseY + 30);
      text(`Âge: ${d.Age}`, mouseX + 15, mouseY + 45);
      text(`Instrument: ${d.TypeInstrument}`, mouseX + 15, mouseY + 60);
      text(`Aide: ${d.Aide}`, mouseX + 15, mouseY + 75);
      text(`Pratique: ${d.Practice}`, mouseX + 15, mouseY + 90);
    }
  }
}


function mouseMoved() {
  if (!voronoi) return;
  
  const delaunay = d3.Delaunay.from(dataPoints, d => d.x, d => d.y);
  const i = delaunay.find(mouseX, mouseY);
  if (i !== hoveredIndex) {
    hoveredIndex = i;
    redraw();
  }
}

function normalizeData() {
  const xExtent = d3.extent(dataPoints, d => d.x);
  const yExtent = d3.extent(dataPoints, d => d.y);

  dataPoints.forEach(d => {
    d.x = d3.scaleLinear().domain(xExtent).range([50, width - 50])(d.x);
    d.y = d3.scaleLinear().domain(yExtent).range([50, height - 50])(d.y);
  });
}

function computeVoronoi() {
  const delaunay = d3.Delaunay.from(dataPoints, d => d.x, d => d.y);
  voronoi = delaunay.voronoi([0, 0, width, height]);
}
