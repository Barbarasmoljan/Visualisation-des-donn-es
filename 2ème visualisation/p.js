//Perhaps ajuster la vitesse encore
const svg = d3.select("#partition")
  .attr("width", 1200)
  .attr("height", 1000);

const width = 1200;
const height = 1400;

const nbPortees = 12;
const nbLignes = 5;
const espaceLigne = 8;
const espacePortee = 100;
const x1 = 50;
const x2 = 1150;
const yStart = 40;

let data = [];
let bubbles = [];

const colors = d3.schemeCategory10;

function createStaffLines() {
  for (let i = 0; i < nbPortees; i++) {
    let yBase = yStart + i * espacePortee;


//Le titre de la "partition": Visualisation
    svg.append("text")
        .text("La Ballade des Âges") //C'est censé être un jeu de mots vu que les notes bougent.^^'
        .attr("x", 500)
        .attr("y", 20)
        .attr("font-size", 24)
        .attr("font-family", "serif")
        .attr("dominant-baseline", "middle");
//Légende : dans le HTML!

    // Ajouter les 5 lignes de la portée
    for (let j = 0; j < nbLignes; j++) {
      let y = yBase + j * espaceLigne;
      svg.append("line")
        .attr("x1", x1)
        .attr("x2", x2)
        .attr("y1", y)
        .attr("y2", y)
        .attr("stroke", "black")
        .attr("stroke-width", 1);
    }

    // Barre verticale au début de la portée
    svg.append("line")
      .attr("x1", x1)
      .attr("x2", x1)
      .attr("y1", yBase)
      .attr("y2", yBase + (nbLignes - 1) * espaceLigne)
      .attr("stroke", "black")
      .attr("stroke-width", 2);
    // Alternance clé de sol et clé de fa
    const isCleSol = i % 2 === 0;
    const imageSrc = isCleSol ? "clesol.png" : "clefa.png";
    const imageHeight = isCleSol ? 75 : 30;
    const imageWidth = isCleSol ? 40 : 30;
    const yOffset = isCleSol ? 25 : 15;

    // Placeholder : soit clé de sol, soit clé de fa
    svg.append("image")
      .attr("href", imageSrc)
      .attr("x", x1 - 0)
      .attr("y", yBase + (espaceLigne * (nbLignes - 1)) / 2 - yOffset)
      .attr("width", imageWidth)
      .attr("height", imageHeight);

    // Placeholder 1 : clé de sol
    //svg.append("image")
      //.attr("href", "clesol.png") // remplace par ton image
      //.attr("x", x1 - 0)
      //.attr("y", yBase + (espaceLigne * (nbLignes - 1)) / 2 - 25)//25
      //.attr("width", 40)
      //.attr("height", 50);

    // Placeholder 2 : clé de fa
    //svg.append("image")
      //.attr("href", "clefa.png")
      //.attr("x", x1 - 0)
      //.attr("y", yBase + (espaceLigne * (nbLignes - 1)) / 2 - 15)
      //.attr("width", 30)
      //.attr("height", 30);

    // Ajouter accolade & barre de liaison toutes les deux portées
    if (i % 2 === 0 && i + 1 < nbPortees) {
      const yTop = yBase;
      const yBottom = yStart + (i +1) * espacePortee + (nbLignes - 1) * espaceLigne-10;
      const centerY = (yTop + yBottom) / 2;

      // Accolade en texte
      svg.append("text")
        .text("{")
        .attr("x", x1 - 60)
        .attr("y", centerY + 10)
        .attr("font-size", yBottom - yTop + 20)
        .attr("font-family", "serif")
        .attr("dominant-baseline", "middle");

      // Ligne verticale de liaison entre les deux portées
      svg.append("line")
        .attr("x1", x1)
        .attr("x2", x1)
        .attr("y1", yTop)
        .attr("y2", yBottom)
        .attr("stroke", "black")
        .attr("stroke-width", 2);
    }
  }
}





function loadData() {
  d3.csv("SondageBarbara.csv").then(rawData => {
    data = rawData.map(d => ({
      id: d.Id,
      age: +d.Age,
      instruments: d.Instrument ? d.Instrument.split(",").length : 0,
      style: d.StyleMusic.trim().toLowerCase(),
      projet: d.Projet
    }));

    bubbles = data.map(d => {
      let ligne = Math.floor(Math.random() * nbPortees);
      let yBase = yStart + ligne * espacePortee;
      let r = d.instruments * 10 + 12;//Radius pour la taille des notes --> plus il y a d'instruments, plus il est grand

      return {
        data: d,
        r: r,
        x: Math.random() * (x2 - x1 - 2*r) + x1 + r,
        y: yBase + espaceLigne * 2,
        ligne: ligne,
        vx: (Math.random() < 0.5 ? -1 : 1) * (Math.random() * 0.5 + 0.1),//C'est ici pour ajuster la vitesse des notes!
        vy: 0,
        selected: false,
        color: colors[Math.floor(Math.random() * colors.length)]
      };
    });

    drawBubbles();
    startSimulation();
  });
}

function drawBubbles() {
const notes = svg.selectAll("text.note").data(bubbles, d => d.data.id);
//Notes
notes.enter()
  .append("text")
  .attr("class", "note")
  .text(d => {
  const age = d.data.age;
  if (age < 18) return "♬";//18
  if (age < 30) return "♩";//30
  if (age < 45) return "♪";//45
  if (age < 60) return "♫";//60
  return "♬";//0
})
  .attr("x", d => d.x)
  .attr("y", d => d.y)
  .attr("text-anchor", "middle")
  .attr("alignment-baseline", "middle")
  .style("font-size", d => `${d.r * 1.6}px`)
  .style("fill", d => d.color)
  .style("cursor", "pointer")
  .style("font-family", "serif")
  .on("click", onBubbleClick)
  .merge(notes)
  .attr("x", d => d.x)
  .attr("y", d => d.y)
  .text(d => {
  const age = d.data.age;//Tranches d'âges
  if (age < 18) return "♬";//18
  if (age < 30) return "♩";//30
  if (age < 45) return "♪";//45
  if (age < 60) return "♫";//60
  return "♬";//0
})

notes.exit().remove();

  //const circles = svg.selectAll("circle").data(bubbles, d => d.data.id);

  //circles.enter()
    //.append("circle")
    //.attr("cx", d => d.x)
    //.attr("cy", d => d.y)
    //.attr("r", d => d.r)
    //.attr("fill", d => d.color)
    //.attr("fill-opacity", 0.6)
    //.attr("stroke", d => d.selected ? "yellow" : "black")
    //.attr("stroke-width", d => d.selected ? 3 : 1)
    //.on("click", onBubbleClick)
    //.merge(circles)
    //.attr("cx", d => d.x)
    //.attr("cy", d => d.y)
    //.attr("r", d => d.r)
    //.attr("fill", d => d.color)
    //.attr("stroke", d => d.selected ? "yellow" : "black")
    //.attr("stroke-width", d => d.selected ? 3 : 1);

  //circles.exit().remove();

  const texts = svg.selectAll("text.age-label").data(bubbles, d => d.data.id);

  texts.enter()
    .append("text")
    .attr("class", "age-label")
    .attr("text-anchor", "middle")
    .attr("alignment-baseline", "middle")
    .attr("pointer-events", "none")
    .style("user-select", "none")
    .style("font-family", "Times New Roman, serif")
    .style("fill", "black")
    .style("font-size", "12px")
    .text(d => d.data.age)
    .merge(texts)
    .attr("x", d => d.x)
    .attr("y", d => d.y)
    .style("font-size", d => d.selected ? "16px" : "12px")
    .style("fill", d => d.selected ? "red" : "black");

  texts.exit().remove();
}

function onBubbleClick(event, d) {
  bubbles.forEach(b => b.selected = false);
  d.selected = true;

  drawBubbles();

  const info = `
    <strong>ID :</strong> ${d.data.id}<br>
    <strong>Âge :</strong> ${d.data.age}<br>
    <strong>Nombre d'instruments :</strong> ${d.data.instruments}<br>
    <strong>Style :</strong> ${d.data.style}<br>
    <strong>Projet :</strong> ${d.data.projet}
  `;
  d3.select("#info").html(info);
}

function startSimulation() {
  d3.timer(() => {
    for (let b of bubbles) {
      b.x += b.vx;

      if (b.x - b.r < x1) {
        b.x = x1 + b.r;
        b.vx *= -1;
      }
      if (b.x + b.r > x2) {
        b.x = x2 - b.r;
        b.vx *= -1;
      }
    }

    for (let i = 0; i < bubbles.length; i++) {
      for (let j = i + 1; j < bubbles.length; j++) {
        const b1 = bubbles[i];
        const b2 = bubbles[j];

        if (b1.ligne === b2.ligne) {
          const dx = b2.x - b1.x;
          const dy = b2.y - b1.y;
          const dist = Math.sqrt(dx*dx + dy*dy);
          const minDist = b1.r + b2.r;
          if (dist < minDist) {
            const overlap = minDist - dist;
            const offsetX = (dx / dist) * (overlap / 2);
            b1.x -= offsetX;
            b2.x += offsetX;
            b1.vx *= -1;
            b2.vx *= -1;
          }
        }
      }
    }

    drawBubbles();
  });
}

// Lancement
createStaffLines();
loadData();
