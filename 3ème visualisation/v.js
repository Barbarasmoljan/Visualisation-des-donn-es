//Code qui s'est inspiré de : https://sciutoalex.github.io/p5-D3-cookbook/recipes-beginner/voronoi/
let dataPoints = [];
let voronoi;
let width = 1200, height = 800; //1200 sur 800 //windowWidth, windowHeight
let xScaleColor, yScaleColor;//let colorScale;
let hoveredIndex = -1;

//Nos données csv
function preload() {
  d3.csv("data.csv").then(data => {
    dataPoints = data.map(d => ({
      x: +d.Age,
      y: +d.TypeInstrument,
      original: d
    })).filter(d => !isNaN(d.x) && !isNaN(d.y));

    normalizeData();
    setupColorScales();
    computeVoronoi();
    redraw();
  });
}

function setup() {
  createCanvas(width, height);
  noLoop();
}

function draw() {
  background(0);

  if (!voronoi) return;

  noStroke();
  for (let i = 0; i < dataPoints.length; i++) {
    const cell = voronoi.cellPolygon(i);
    if (!cell) continue;

    const x = dataPoints[i].x;
    const y = dataPoints[i].y;
    const tX = xScaleColor(x);
    const tY = yScaleColor(y);
    const interpolatedColor = d3.interpolateCool((tX + tY) / 2);
    const col = color(d3.color(interpolatedColor).r, d3.color(interpolatedColor).g, d3.color(interpolatedColor).b);

    fill(col);

    if (i === hoveredIndex) {
      stroke(255);
      strokeWeight(3);
    } else {
      noStroke();
    }

    beginShape();
    for (let [vx, vy] of cell) {
      vertex(vx, vy);
    }
    endShape(CLOSE);
  }

  fill(0);
  noStroke();
  for (let pt of dataPoints) {
    ellipse(pt.x, pt.y, 5, 5);
  }

  if (hoveredIndex !== -1) {
  let d = dataPoints[hoveredIndex].original;

  //texte info
  textSize(14);
  textAlign(LEFT, TOP);
  let lines = [
    `ID: ${d.Id}`,
    `Âge: ${d.Age}`,
    `Instrument: ${d.TypeInstrument}`,
    `Aide: ${d.Aide}`,
    `Pratique: ${d.Practice}`
  ];

  //texte
  let padding = 12;
  let lineHeight = textAscent() + textDescent() + 4;
  let textWidths = lines.map(txt => textWidth(txt));
  let tooltipWidth = Math.max(...textWidths) + padding * 2;
  let tooltipHeight = lineHeight * lines.length + padding * 2;

  // position souris
  let tx = mouseX - tooltipWidth / 2;
  let ty = mouseY - tooltipHeight / 2;

  // pour éviter dépassement du canevas
  if (tx < 10) tx = 10;
  if (ty < 10) ty = 10;
  if (tx + tooltipWidth > width - 10) tx = width - tooltipWidth - 10;
  if (ty + tooltipHeight > height - 10) ty = height - tooltipHeight - 10;

  //  rectangle
  fill(255);
  stroke(0);
  rect(tx, ty, tooltipWidth, tooltipHeight, 8);

  // texte
  fill(0);
  noStroke();
  for (let i = 0; i < lines.length; i++) {
    text(lines[i], tx + padding, ty + padding + i * lineHeight);
  }
}}

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

function setupColorScales() {
  const xExtent = d3.extent(dataPoints, d => d.x);
  const yExtent = d3.extent(dataPoints, d => d.y);

  xScaleColor = d3.scaleLinear().domain(xExtent).range([0, 1]);
  yScaleColor = d3.scaleLinear().domain(yExtent).range([0, 1]);
}

function computeVoronoi() {
  const delaunay = d3.Delaunay.from(dataPoints, d => d.x, d => d.y);
  voronoi = delaunay.voronoi([0, 0, width, height]);
}
