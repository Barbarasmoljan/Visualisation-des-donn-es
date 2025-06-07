#Visualisation de données

L’objectif de ce travail de visualisations est d’illustrer tout en informant les données récoltées durant le questionnaire. Le questionnaire en lui-même porte sur les pratiques musicales des répondants et d’autres questions connexes comme les difficultés d’apprentissage et s’ils seraient prêt à apprendre à jouer/chanter via des cours en ligne.

Nos données comportent des éléments de réponses majoritairement catégorielles. Certaines réponses étaient à choix, mais d’autres, les répondants pouvaient faire une réponse écrite. Pour ce rendu, nous vous proposons six visualisations se reposant pleinement sur ces données. Toutes comportent une certaine forme d’interaction que nous expliciterons pour chacun d’entre eux. Quant à la qualité des données, mise à part quelques corrections qui a dû être fait sur le fichier .csv, on peut dire que l’échantillonnage est plutôt large pour un questionnaire à petite échelle. Nous avons pu avoir 111 (Vérif) réponses. Bien que sur l’ensemble des réponses, certaines des réponses ont été interrompues en cours de route, cela reste des informations précieuses. Bien sûr, il peut y avoir des biais dans les réponses puisque les données concernent l’être humain.


#Sur la DATA, en détail
Dans le fichier .csv, on retrouve l’ensemble des données des réponses des 111 (vérif) répondants. Un nettoyage a dû être fait après le transfert depuis le questionnaire en format .csv. De plus, des catégories supplémentaires a dû être ajoutée afin de simplifier certaines informations textuelles. C’est le cas par exemple des « TypeInstrument », qui est une variable créée expressément afin de récupérer les informations comme qui jouent des instruments à vent ou à cordes. Ils ont été codés par des chiffres, mais ils font références à des réponses catégorielles.
(RELIRE)
-Lister chaques variables ici et les définir :
-Âge : L’âge des répondants. (En tranche d’âge.)
-Practice : Quel est la pratique musicale des répondants.
-Instrument : Quels types d’instruments jouent-ils.
-Apprentissage : De quelle manière les répondants ont appris à jouer de la musique/le chant.
-Difficultés : À quel point il a été difficiles pour les répondants d’apprendre à jouer//chanter.
-Aide : 
-StyleMusic : Quel style de musique apprécient ?jouent ? les répondants.
-Intérêts : 
-Projet : Est-ce que les répondants souhaiteraient produire des projets avec les connaissances apprises.
-Accompagnement :
-CoursEnLigne : 
-Avantages :
-DifficultésLearn : Quels ont été les difficultés d’apprentissage pour les répondants.
-IntérêtFormationEnLigne : Est-ce que les répondants ont un intérêts à suivre des cours en ligne.
-Remarque Supplémentaire :
-TypeInstrument : Code numérique pour la variable Instrument. Chaque numéro correspond à un type d’instrument (par ex. instruments à cordes.)
"Age","Practice","Instrument","Apprentissage","Difficultés","Aide","StyleMusic","Intérêts","Projet","Accompagnement","CoursEnLigne","Avantages","DifficultésLearn","IntérêtFormationEnLigne","RemarqueSupplémentaire","TypeInstrument"

Pour ce qui est des visualisations choisis, elles ont toutes soit un attrait artistique ou en lien avec la thématique du questionnaire : la musique. Cela passe par la forme autant que par le son. La plupart des visualisations s’inspirent d’objets réels (piano, partition, gramophone avec un vinyl) et d’autres comportent des formes plus propres aux visualisations entre-guillemets, plus classiques. C’est le cas par exemple du voronoï qui use également de P5 et du camembert. Chacun a ses avantages et inconvénients, mais ils permettent dans tous les cas de visualiser nos données. Quant à ce qu’on voit ou ne voit pas dans ces visualisations, nous les détaillerons plus en détail en présentant ceux-ci. 

#Raison de ces visualisations + Pourquoi ceux-ci.(voir quelle partie on garde)
Dans le cadre du champs disciplinaire ISH et d’un ancien champ d’études en Musicologie, les données créées à la suite d’un questionnaire allie ces deux champs d’études. Comme dit précédemment, l’optique de la création de ces visualisations est d’ordre à la fois artistique et utile. Ils partagent tous une thématique commune en lien avec la musique. Cela se retranscrit, entre autres, par des visualisations en forme de vinyl, de partition et de piano. D’autres, cependant, font plus montre d’une apparence somme toute plus classique : camembert et voronoï. Tous ont le point commun, cependant, d’être des visualisations interactives ou cliquer ou aller au-dessus (hover) déclenche un événement.
La raison pour laquelle nous avons choisi celles-ci est à la fois pour des raisons expérimentales : nous découvrons plus concrètement l’usage de D3.js avec ces rendus, mais aussi afin de montrer nos résultats. De plus, il est plus intéressant de s’essayer à des rendus visuels qui sortent de l’ordinaire. C’est également le but de Dear Data, faire en sorte que les données soient visuellement cohérentes et informe également sur la nature des données. Bien sûr, dans chaque cas de visualisation, il sera fait mention des données invisibles ou qu’on ne peut appréhender à première vue. Bien que certaines idées aient dû être abandonnées, nous avons, dans les grandes lignes, put atteindre ce que l’on souhaitait afficher avec ces visualisations. 

1) Camembert
Celui-ci est beaucoup moins poussé que les autres visualisations. Tout d’abord, on remarquera qu’en passant la souris sur un bout de camembert (en hoover), le son démarre. (Il ne faut pas hésiter à cliquer sur la page pour que le son se débloque.) Il affiche les pourcentages de types d’instruments joués. (cordes, vents, percussions, chants, autre). Ils ont été codés avec des valeurs numériques de sorte qu’ils soient plus aisés de récupérer ces informations. Par ex. 1 = instrument à Corde. Non seulement du son sort des arcs respectifs du camembert, mais elle affiche également la liste des instruments joués. Chaque ligne correspond à un répondant. 
On ne voit pas, cependant, dans cette visualisation le fait que certains jouent plus que d’une sorte d’instrument. Tout comme les autres informations du fichier csv ne s’affichent point du tout.
Quant au pourquoi de ce choix de visualisations, il s’explique de par le fait que c’était l’une des premières visualisations créées, et, bien qu’ils soient moins poussés. Il permet tout de même de faire sortir des informations sur le TypeInstrument.

2) PARTITION : (fichier p.html et p.js)
Cette visualisation met en scène des notes, en fichiers png, qui se déplacent sur des portées créées en svg. L’accolade est également ajoutée en svg. L’animation en soi n’apporte pas nécessairement d’éléments informatifs pour le rendu, mais cela rend la chose moins statique. De plus, les couleurs attribuées aux notes n’apportent pas non plus d’informations supplémentaires et sont uniquement décoratifs. Pour ce qui est des éléments apportant des informations sur nos données, il y a tout d’abord la tranche d’âge qui est indiqué par le texte qui les accompagne. Quant à la forme des notes, elle dépend également de l’âge du répondant et distinguent donc chaque individu par ce premier axe. Le second axe, les « instruments » est associé à la taille des individus. Plus elle est petite, moins la personne joue d’instruments et inversement. Une brève légende accompagne la partition tout en bas de la page à titre de rappel. Qui plus est, si on clique sur une note, il est possible d’afficher d’autres informations connexes qui ne sont pas visibles dans notre visualisation.
Nonobstant, le reste des informations n’est pas affichée dans cette visualisation, et on remarque vite que ce n’est qu’une sélection parmi pléthore d’informations que nous aurions pu sélectionner. Mais, puisque le fichier csv est plutôt long, il serait indigeste de tout afficher d’un coup.

3) Voronoï
Cette visualisation combine à la fois D3 et P5 et est basé sur le code mis en lien en tout début du code (fichier v.js). En allant avec la souris (hoover) sur les formes géométriques, on peut afficher les informations de chaque individu. Chaque partie géométrique est un répondant trié par leur ID et par le fait qu’ils soient plus ou moins proches de leurs voisins le plus direct. On peut remarquer en cliquant sur les opposés en diagonales que les informations sont totalement opposées. Qui plus est, contrairement à la visualisation de partition, ce voronoï, est cantonné plus strictement à son canevas, dû au fait qu’il faille à la fois rendre cohérent le code pour P5 et D3 qui sont parfois contradictoire entre eux. C’était le cas par exemple du camembert où l’usage de P5 pour visualiser le son a été abandonné, car l’un fonctionnait, et le second non.
Quant aux données non visibles, puis

Crédits







Crédits
Codes commentaires/clean (dossier aussi) + add légende pour le camembert
Index pour faire lien avec tous les codes.
Font	

