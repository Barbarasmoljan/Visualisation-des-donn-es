const width = 500;
const height = 500;
const radius = Math.min(width, height) / 2 - 30;

const svg = d3.select('#chart').append('svg')
  .attr('width', width)
  .attr('height', height);

// Ajout grammophone image pour que ce soit au centre
svg.append('image')
  .attr('href', 'close-up-de-la-belle-gramophone.png') // chemin relatif correct
  .attr('width', radius * 2)
  .attr('height', radius * 2)
  .attr('x', width / 1.975 - radius)
  .attr('y', height / 1.55 - radius)
  .attr('preserveAspectRatio', 'xMidYMid meet')
  .style('pointer-events', 'none')
  .style('opacity', '0.7'); // Moins visible, en fond // testé opacité en arrière fond du vynil manuellemment

const g = svg.append('g')
  .attr('transform', `translate(${width / 2},${height / 2})`);

let rotating = false;
let angle = 0;
let currentAudio = null;

const vinylGroup = g.append('g').attr('class', 'vinyl-group');

const gradients = [
  ['#fddbb0', '#8B5E3C'],
  ['#f5c28a', '#A97142'],
  ['#f2b05e', '#CBA135'],
  ['#e7a04f', '#705438'],
  ['#cc8f56', '#3F2A14']
];

const defs = svg.append('defs');
gradients.forEach(([light, dark], i) => {
  const grad = defs.append('linearGradient')
    .attr('id', `grad-${i}`)
    .attr('x1', '0%').attr('x2', '100%')
    .attr('y1', '0%').attr('y2', '100%');
  grad.append('stop').attr('offset', '0%').attr('stop-color', light);
  grad.append('stop').attr('offset', '100%').attr('stop-color', dark);
});

const pie = d3.pie().sort(null).value(d => d.count);
const arc = d3.arc().innerRadius(radius * 0.6).outerRadius(radius);

//vinylGroup.append('circle')
//  .attr('class', 'center-circle')
//  .attr('r', radius * 0.4)
//  .attr('fill', '#222');

const centerText = vinylGroup.append('text')
  .text("Mon Vinyle") // ajout du titre qui figure au centre du "donut"
  .attr('text-anchor', 'middle')
  .attr('y', -radius * 0.15)
  .attr('fill', '#eee')
  .style('font-size', `${radius * 0.12}px`)
  .style('pointer-events', 'none');

const centerImage = vinylGroup.append('image')
  .attr('width', radius * 0.5)
  .attr('height', radius * 0.5)
  .attr('x', -radius * 0.25)
  .attr('y', radius * 0.05)
  .attr('preserveAspectRatio', 'xMidYMid meet')
  .style('pointer-events', 'none');

// vérification avec Point rouge  pour tester centre vinyle
//vinylGroup.append('circle')
//  .attr('r', 3)
//  .attr('fill', 'red');

// Image du chien : par-dessus le grammophone, tourne avec le vinyle
vinylGroup.append('image')
  .attr('href', 'chien.png')
  .attr('width', radius * 0.5)
  .attr('height', radius * 0.5)
  .attr('x', -radius * 0.25)
  .attr('y', radius * 0.05)
  .attr('preserveAspectRatio', 'xMidYMid meet')
  .style('pointer-events', 'none')
  .style('opacity', '0.9'); // Plus visible

const ageRanges = [
  { label: '–18 ans', min: 0, max: 17, audio: 'music/curieux-18.mp3' },
  { label: '18–29 ans', min: 18, max: 29, audio: 'music/daisuke-teiko18-29.mp3' },
  { label: '30–44 ans', min: 30, max: 44, audio: 'music/chillsynthwave30-44.mp3' },
  { label: '45–59 ans', min: 45, max: 59, audio: 'music/snatch45-59.mp3' },
  { label: '60+ ans', min: 60, max: 120, audio: 'music/redbone.mp3' }
];

function groupAges(data) {
  return ageRanges.map((range, i) => ({
    label: range.label,
    count: data.filter(d => d.Age >= range.min && d.Age <= range.max).length,
    gradient: `url(#grad-${i})`,
    audio: range.audio
  }));
}

const infoBox = d3.select('#info-box');
infoBox.text('');

d3.csv('data.csv', d3.autoType).then(data => {
  const groupedData = groupAges(data);
  const total = d3.sum(groupedData, d => d.count);

  const arcs = vinylGroup.selectAll('.arc')
    .data(pie(groupedData))
    .enter()
    .append('g')
    .attr('class', 'arc');

  arcs.append('path')
    .attr('d', arc)
    .attr('fill', d => d.data.gradient)
    .style('cursor', 'pointer')
    .on('click', (event, d) => {
      const tranche = d.data;
      const pct = total ? ((tranche.count / total) * 100).toFixed(1) : 0;
      const texte = `${tranche.label} : ${tranche.count} personne${tranche.count > 1 ? 's' : ''} (${pct}%)`;
      infoBox.text(texte);

      if (currentAudio) {
        currentAudio.pause();
        currentAudio.currentTime = 0;
        currentAudio = null;
      }

      rotating = !rotating;
      moveNeedle(rotating);

      if (rotating && tranche.audio) {
        currentAudio = new Audio(tranche.audio);
        currentAudio.loop = true;
        currentAudio.play();
      }
    });
});

d3.timer(() => {
  if (rotating) {
    angle += 0.5;
    vinylGroup.attr('transform', `rotate(${angle})`);
  }
});

const needle = svg.append('g')
  .attr('class', 'needle-group')
  .attr('transform', `translate(${width / 2 - 120}, ${height / 2 - 180}) rotate(0)`);

needle.append('rect')
  .attr('x', 0)
  .attr('y', 0)
  .attr('width', 10)
  .attr('height', 160)
  .attr('fill', '#444')
  .attr('rx', 4);

needle.append('circle')
  .attr('cx', 5)
  .attr('cy', 160)
  .attr('r', 6)
  .attr('fill', '#d0c4af')
  .attr('stroke', '#000')
  .attr('stroke-width', 1.5);

svg.append('circle')
  .attr('cx', width / 2 - 120)
  .attr('cy', height / 2 - 180)
  .attr('r', 8)
  .attr('fill', '#333')
  .attr('stroke', '#aaa')
  .attr('stroke-width', 2);

function moveNeedle(active) {
  needle.transition()
    .duration(700)
    .attr('transform', `translate(${width / 2 - 120}, ${height / 2 - 180}) rotate(${active ? 22 : 0})`);
}

document.getElementById('centerTextInput').addEventListener('input', e => {
  centerText.text(e.target.value);
});

document.getElementById('imageUpload').addEventListener('change', function () {
  const file = this.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = function (e) {
    centerImage.attr('href', e.target.result);
  };
  reader.readAsDataURL(file);
});

const musicNotes = ["\u266A", "\u2669", "\u266B", "\u266C"];

const bgGroup = svg.insert('g', ':first-child')
  .attr('class', 'music-notes');

function createNote() {
  const x = Math.random() * width;
  const y = height + 20;
  const note = musicNotes[Math.floor(Math.random() * musicNotes.length)];
  const duration = 4000 + Math.random() * 3000;
  const size = 14 + Math.random() * 12;

  const text = bgGroup.append('text')
    .text(note)
    .attr('x', x)
    .attr('y', y)
    .attr('fill', '#ccc')
    .attr('font-size', size)
    .attr('opacity', 0.8);

  text.transition()
    .duration(duration)
    .ease(d3.easeLinear)
    .attr('y', -20)
    .attr('opacity', 0)
    .on('end', () => text.remove());
}

setInterval(createNote, 300);
