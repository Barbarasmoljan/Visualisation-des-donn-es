// Charger données  CSV  pour les traiter
d3.csv("data.csv").then(data => {
  const filtered = data.filter(d => d.Apprentissage === "Oui" || d.Apprentissage === "Non");
  // Procédure de filtrage des réponses oui et non de la section Apprentissage se trouvant dans le CSV 
  // But: garder que les réponse oui et non

  // Pour compter les "oui" et les "Non"
  const counts = d3.rollup(
    filtered,
    v => v.length,
    d => d.Apprentissage
  );

  const total = d3.sum(Array.from(counts.values())); // Calculer le total des réponses oui et  non
  
  // Tableau de réponses valides et pour avoir nombre et pourcentage
  const dataProcessed = Array.from(counts, ([reponse, count]) => ({
    reponse,
    count,
    percent: +(count / total * 100).toFixed(1)
  }));

  const svg = d3.select("svg");
  const width = +svg.attr("width1^");
  const height = +svg.attr("height");

  // Pour effectuer des marges + zone de dessin
  const margin = { top: 20, right: 30, bottom: 20, left: 30 };
  const chartWidth = width - margin.left - margin.right;
  const chartHeight = height - margin.top - margin.bottom;

  const chart = svg.append("g")
    .attr("transform", `translate(${margin.left},${margin.top})`);
  
  
// Définition de la taille des touchhes Blanches et Noires et combien de touches on souhaite
  const toucheBlancheWidth = 60;
  const toucheBlancheHeight = 160;
  const toucheNoireWidth = 40;
  const toucheNoireHeight = 100;
  const nbBlanches = 9;
  //Position Y : pour ajuster les touches
  const blancheY = chartHeight - toucheBlancheHeight;
  const noireY = chartHeight - toucheBlancheHeight;

  // Définition des positions des touches blanches et après lesquelles une touche noire ne doit pas être dessinée
  // Entre certaines touches blanches il n'y a pas de touches noires et entre d'autre touches blanches il y a des touches noires
  // Par Exemple: il n'y a pas de touches noires entre les notes MI et et FA sur un piano
  const blackKeyOffsets = [0, 1, 3, 4, 5, 7];  
  // Indiquer qu'il y a touches noires après 0,1,3,4,5,7
  // pour ensuite pouvoir positionner correctement les touches noires par rapport aux blanches

  // Générer touches blanches pour créer et positionner les touches blanches
  // Pour dessiner les touches blanches et les aligner côte à côte
  for (let i = 0; i < nbBlanches; i++) {
    const x = i * toucheBlancheWidth;
    chart.append("rect") // On crée un rectangle SVG qui représente une touche blanche
    
    // Ensuite il faut définir, position, taille, couleur de fond blanc et contour noir des touches
      .attr("x", x)
      .attr("y", blancheY)
      .attr("width", toucheBlancheWidth)
      .attr("height", toucheBlancheHeight)
      .attr("fill", "white")
      .attr("stroke", "black");
  }

  // Générer touches noires pour créer et positionner les touches noires
  // Pour parcourir chaque index i du tabbleau qui représenteles touches blanches du clavier et avant lesquelles une touches noire doit être placée
  blackKeyOffsets.forEach(i => {
    const x = (i + 1) * toucheBlancheWidth - toucheNoireWidth / 2;
    chart.append("rect") // On crée un rectangle pour les touches noires
      .attr("x", x) // Définition, positionnement et taille des touches noires 
      .attr("y", noireY)
      .attr("width", toucheNoireWidth)
      .attr("height", toucheNoireHeight)
      .attr("fill", "black");
  });

  // Touche "Oui" –4e touche blanche (V)
  //Créer la touche spécialequi représente Oui pour que quand on clique dessus 
  // le son est joué et la touche s'anime et fait apparaître les réponses correspondant au "Oui"
  const toucheOuiIndex = 3;
  const toucheOuiX = toucheOuiIndex * toucheBlancheWidth;
  chart.append("rect")
    .attr("id", "toucheOui")
    .attr("x", toucheOuiX)
    .attr("y", blancheY)
    .attr("width", toucheBlancheWidth)
    .attr("height", toucheBlancheHeight)
    .attr("fill", "white")
    .attr("stroke", "black")
    .on("click", () => playTouche("Oui", blancheY)); // Permet que quand on clique sur la bonne note, le son et joué et correspond au sol et cela affiche la réponse Oui et données qui y sont associées.

  // Touche "Non" noire entre 4e et 5e blanche (G)
  // Pour avoir la note cliquable noire soit entre la 4e et 5e blanche (lettre G du clavier d'ordinateur)
  // Cela correspond à la réponse " Non de la question"
  const toucheNonOffset = 3;
  const toucheNonX = (toucheNonOffset + 1) * toucheBlancheWidth - toucheNoireWidth / 2;
  chart.append("rect")
    .attr("id", "toucheNon")
    .attr("x", toucheNonX)
    .attr("y", noireY)
    .attr("width", toucheNoireWidth)
    .attr("height", toucheNoireHeight)
    .attr("fill", "black")
    .on("click", () => playTouche("Non", noireY)); // De nouveau PlayTouche permet que quand on clique: le son est joué et affiches données associées à la réponse non.

    // Sélectionner touche cliquée la blanche ou la noire en fonction de la réponse 
    //Ensuite animer visuellement la touchec cliquée pour l'abaisser un petit peu (de 8px) pui la faire remonter
function playTouche(reponse, baseY) {
  const rect = d3.select(`#touche${reponse}`);
  rect.transition() 
    .duration(100)
    .attr("y", baseY + 8)
    .transition()
    .duration(150)
    .attr("y", baseY);

  // Son note Fa 
 // Ajout d'un auidiofile pour faire le son correspondant au Fa Majeur
  let audioFile = "";
  if (reponse === "Oui") {
    audioFile = "pianoMajor.mp3";
  } else if (reponse === "Non") {
    audioFile = "piano.mp3";
  }

  if (audioFile) {
    const audio = new Audio(audioFile);
    audio.onerror = () => console.error("Erreur de lecture :", audioFile);
    audio.play();
  }

  // Pour mettre à jour le texte uniquement pour la réponse jouée
  // et pour permettre d'afficher pourcentage, nombre correspondant à la réponse "oui" ou "non" après avoir joué la touche
  // Permet à un.e utilisateur.ice d'obtenir l'information lié aux réponses oui et non
  const currentData = dataProcessed.find(d => d.reponse === reponse) || { count: 0, percent: 0 };
  const toucheLabel = reponse === "Oui" ? "V" : "G";

  const texte = `Réponse ${reponse} (${toucheLabel}) jouée\n\n` +
    `${reponse} : ${currentData.percent}% (${currentData.count} Personnes rencontrent des difficultés d'apprentissage de la musique)`;

  d3.select("#feedback").text(texte);
}


  // Contrôle clavier
  // Pour contrôlerles sons avec les touches du clavier d'ordinateur "V" et "G"
  // Où V = "oui" et G = "non"
  // En faisant V / G on a la mêm animation qui si on essaie de tucher sur les touches cu clavier visuellement
  document.addEventListener("keydown", e => {  
    if (e.key.toLowerCase() === "v") playTouche("Oui", blancheY);
    if (e.key.toLowerCase() === "g") playTouche("Non", noireY);
  });
});
