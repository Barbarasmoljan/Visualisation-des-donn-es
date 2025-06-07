
// Dimensions
const width = 1500;
const height = 600;//à caliber avec le camembert
const radius = 250;

// Création du SVG
const svg = d3.select("body").append("svg")
  .attr("width", width)
  .attr("height", height);

const group = svg.append("g")
  .attr("transform", "translate(1060,300)")//`translate(${width / 1}, ${height / 1})`);//Pour déplacer le camembert

// nos données instruments
const infoInstrument = {//ATTENTION LES NUMéROS ATTRIBUéS NE DOIVENT PAS BOUGER
  1: { name: "Corde", sound: "1.mp3" },
  2: { name: "Vent", sound: "2.mp3" },
  3: { name: "Percussions", sound: "3.mp3" },
  4: { name: "Chant", sound: "4.mp3" },
  5: { name: "Autre", sound: "5.mp3" },
};

// les sons à charger
const sounds = {};
for (const [key, meta] of Object.entries(infoInstrument)) {
  sounds[+key] = new Audio(meta.sound);
}
//Nos données csv
d3.csv("data.csv").then(function(data) {
  const counts = new Map();
  const instrumentsByType = {};

  // Compter chaque instrument individuellement et stocker instruments
  data.forEach((d) => {
    const raw = d.TypeInstrument;
    const instrumentName = d.Instrument;

    const items = raw
      .split(/[;,]/)
      .map(v => +v.trim())
      .filter(v => Number.isInteger(v) && v >= 1 && v <= 5);

    items.forEach(val => {
      counts.set(val, (counts.get(val) || 0) + 1);

      // Stockage des instruments par type
      if (!instrumentsByType[val]) instrumentsByType[val] = new Set();
      instrumentsByType[val].add(instrumentName);
    });
  });

  // tableau
  for (const key in instrumentsByType) {
    instrumentsByType[key] = Array.from(instrumentsByType[key]);
  }

  const pieData = Array.from(counts, ([type, count]) => ({ type, count }));
  const total = d3.sum(pieData, d => d.count);

  const pie = d3.pie().value(d => d.count);
  const arc = d3.arc().innerRadius(80).outerRadius(radius);
  const color = d3.scaleOrdinal(d3.schemeSet2);

  //Dessiner le camembert
  group.selectAll("path")
    .data(pie(pieData))
    .enter()
    .append("path")
    .attr("d", arc)
    .attr("fill", d => color(d.data.type))
    .attr("stroke", "#fff")
    .attr("stroke-width", 2)
    .on("mouseover", function(event, d) {
      d3.select(this).transition().duration(200).attr("transform", "scale(1.05)");

      const type = d.data.type;
      const meta = infoInstrument[type];

      if (meta && sounds[type]) {
        sounds[type].currentTime = 0;
        sounds[type].play();
      }

      // Texte centre
      group.selectAll(".label").remove();
      group.append("text")
        .attr("class", "label")
        .attr("text-anchor", "middle")
        .attr("dy", ".35em")
        .style("font-size", "18px")
        .style("fill", "white")
        .text(`${meta?.name} (${((d.data.count / total) * 100).toFixed(1)}%)`);

// Rectangle en haut, à gauche
      d3.select("#info-rect").remove();  // supprime le précédent rectanlge
      d3.select("#info-text").remove(); //et l'info

      const infoGroup = svg.append("g").attr("id", "info-group");

      infoGroup.append("rect")
        .attr("id", "info-rect")
        .attr("x", 20)
        .attr("y", 20)
        .attr("width", 300)
        .attr("height", 20)
        .attr("fill", color(type))
        .attr("stroke", "black")
        .attr("stroke-width", 2)
        .attr("rx", 10)
        .attr("ry", 10)
        .style("opacity", 0.8);

// Liste instruments
      const instruments = instrumentsByType[type] || ["Aucun instrument listé"];

      infoGroup.append("text")
        .attr("id", "info-text")
        .attr("x", 30)
        .attr("y", 50)
        .style("fill", "white")
        .style("font-size", "14px")
        .selectAll("tspan")
        .data([
          `Instruments (${instruments.length}):`,
          ...instruments
        ])
        .join("tspan")
        .attr("x", 30)
        .attr("dy", (d, i) => i === 0 ? 0 : "1.3em")
        .text(d => d);

    })
//Le son s'arrête que si on le met en pause en enlevant la souris.
    .on("mouseout", function(event, d) {
      d3.select(this).transition().duration(200).attr("transform", "scale(1)");

      const type = d.data.type;
      if (sounds[type]) {
        sounds[type].pause();
        sounds[type].currentTime = 0;
      }

      group.selectAll(".label").remove();
      d3.select("#info-rect").remove();
      d3.select("#info-text").remove();
      d3.select("#info-group").remove();
    });

}).catch(error => {
  console.error("Erreur CSV :", error);
});
