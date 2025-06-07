## Visualisation de données

L’objectif de ce travail de visualisations est d’illustrer les données récoltées durant le questionnaire tout en les mettant en perspective. Le questionnaire porte en lui-même sur les pratiques musicales des répondants ainsi que sur d’autres questions connexes telles que les difficultés d’apprentissage et leur éventuelle volonté d'apprendre à jouer/chanter via des cours en ligne.

Nos données comportent majoritairement des éléments de réponses catégorielles. Certaines réponses étaient à choix, mais d’autres permettait au répondant d'ajouter une réponse écrite. Pour ce rendu, nous vous proposons six visualisations qui s'appuient pleinement sur ces données. Toutes comportent une certaine forme d’interaction que nous expliciterons pour chacune d’entre elles. Concernant la qualité des données, mise à part quelques corrections qui ont dû être apportée au fichier .csv, on peut dire que l’échantillonnage est plutôt large pour un questionnaire à petite échelle. Nous avons pu obtenir 111 réponses. Même si certaines des réponses ont été interrompues en cours de route, ces dernières restent précieuses. Il peut bien sûr y avoir des biais dans les réponses, car les données concernent l’être humain et ses habitudes et usages musicaux.


## Sur la DATA, en détail
Dans le fichier .csv, on retrouve l’ensemble des données des réponses des 111 (vérif) répondants. Un nettoyage a dû être effectué après le transfert depuis le questionnaire au format .csv. De plus, des catégories supplémentaires ont dû être ajoutées afin de simplifier certaines informations textuelles. C’est le cas par exemple de la variable « TypeInstrument », créée expressément pour récupérer des informations telles que le type d'instrument ils jouent (à corde, à vent, etc.). Ils ont été codés par des chiffres, mais ils renvoient à des réponses catégorielles.

# (RELIRE)
Liste de chaque variable et leur définition:

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

## Totalité des variables des données du fichier CSV
"Age","Practice","Instrument","Apprentissage","Difficultés","Aide","StyleMusic","Intérêts","Projet","Accompagnement","CoursEnLigne","Avantages","DifficultésLearn","IntérêtFormationEnLigne","RemarqueSupplémentaire","TypeInstrument"

# Visualisation: avant-propos
Concernant les visualisations choisies, elles ont toutes soit un attrait artistique, soit un lien avec la thématique du questionnaire : la musique. Cela passe autant par la forme autant que par le son. La plupart des visualisations s’inspirent d’objets réels (piano, partition, gramophone avec un vinyle) et d’autres comportent des formes plus classiques, entre guillemets, plus propre aux visualisations. C’est le cas, par exemple, du Voronoï qui utilise également les P5 et les camemberts. Chacune a ses avantages et inconvénients, mais elles permettent dans tous les cas de visualiser nos données. Nous détaillerons plus en détail ce que l'on voit ou ne voit pas dans ces visualisations lors de leur présentation.

# Raison de ces visualisations
Dans le cadre du champ disciplinaire ISH et du champ d’études en Musicologie, les données créées à la suite d’un questionnaire allient ces deux disciplines. Comme indiqué précédemment, l’objectif de la création de ces visualisations est d’ordre à la fois artistique et pratique. Elles partagent toutes une thématique commune en lien avec la musique. Cela se traduit notamment par des visualisations en forme de vinyle, de partition et de piano. D’autres, cependant, ont une apparence somme toute plus classique : camemberts et voronoï. Tous ont toutefois le point commun d'être des visualisations interactives : cliquer, appuyer sur des touches ou aller au-dessus (hover) déclenche un événement.
Nous avons choisi celles-ci pour des raisons expérimentales : nous découvrons plus concrètement l’usage de D3.js avec ces rendus, mais aussi afin de montrer nos résultats. De plus, il est plus intéressant de s’essayer à des rendus visuels atypiques. C’est également le but de Dear Data, rendre les données visuellement cohérentes et en informer sur sa nature. Bien sûr, dans chaque cas de visualisation, il sera fait mention des données invisibles ou difficilement appréhendables au premier abord. Bien que certaines idées aient dû être abandonnées, nous avons pu, dans les grandes lignes, atteindre l'objectif que nous nous étions fixées avec ces visualisations. 

# 1) Camembert:  (fichier c.html et c2.js)
Celui-ci est beaucoup moins poussé que les autres visualisations. Tout d’abord, on remarquera qu’en passant la souris sur un bout de camembert (en hoover), le son démarre (il ne faut pas hésiter à cliquer sur la page pour que le son se débloque). Il affiche les pourcentages de types d’instruments joués (cordes, vents, percussions, chants, autre). Ils ont été codés avec des valeurs numériques de sorte qu’ils soient plus facilement exploitables. Par exemple, 1 est égal à un instrument à corde. Non seulement du son sort des arcs respectifs du camembert, mais la liste des instruments joués s'affiche également. Chaque ligne correspond à une personne. 
On ne voit cependant pas, dans cette visualisation, que certains jouent de plusieurs instruments. Toutes les autres informations du fichier csv ne s’affichent pas non plus.
Quant au choix de cette visualisations, il s’explique par le fait qu'il s'agissait de l'une des premières visualisations créées, et, bien qu’elle soit moins poussée, elle permet tout de même d'extraire des informations sur le type d'instrument le plus joué par les répondants.

# 2) Partition : (fichier p.html et p.js)
Cette visualisation met en scène des notes, en fichiers png ou en texte, qui se déplacent sur des portées créées en svg. L’accolade est également ajoutée en svg. L’animation en soi n’apporte pas nécessairement d’éléments informatifs pour le rendu, mais elle rend l'ensemble moins statique. De plus, les couleurs attribuées aux notes n’apportent pas d’informations supplémentaires, mais sont uniquement décoratives. Pour ce qui est des éléments apportant des informations sur nos données, il y a tout d’abord la tranche d’âge indiquée par le texte qui accompagne les notes. Quant à la forme des notes, elle dépend également de l’âge du répondant et permet donc de distinguer chaque individu par ce premier axe. Le second axe, les « instruments » est associé à la taille des individus. Plus elle est petite, moins la personne joue d’instruments et inversement. Une brève légende accompagne la partition tout en bas de la page à titre de rappel. À cela s'ajoute le fait que si on clique sur une note, il est possible d’afficher d’autres informations connexes (Style de musique, projet potentiel) qui ne sont pas visibles dans notre visualisation.
Toutefois, les autres informations ne sont pas affichées dans cette visualisation, et il devient rapidement évident qu'il est nécessaire de faire une sélection parmi pléthore d’informations disponibles dans le csv. Mais, puisque le fichier est plutôt long, il serait indigeste de tout afficher d’un coup.

# 3) Voronoï : (fichier v.html et v.js)
Cette visualisation combine à la fois D3 et P5 et est basé sur le code mis en lien en tout début du code (fichier v.js). En allant avec la souris (hoover) sur les formes géométriques, on peut afficher les informations de chaque individu. Chaque partie géométrique est un répondant trié par leur ID et par le fait qu’ils soient plus ou moins proches de leurs voisins le plus direct. On peut remarquer en cliquant sur les opposés en diagonales que les informations sont totalement opposées. Qui plus est, contrairement à la visualisation de partition, ce voronoï, est cantonné plus strictement à son canevas, dû au fait qu’il faille à la fois rendre cohérent le code pour P5 et D3 qui sont parfois contradictoire entre eux. C’était le cas par exemple du camembert où l’usage de P5 pour visualiser le son a été abandonné, car l’un fonctionnait, et le second non.
Quant aux données non visibles, puis

# Crédits

1. Camembert

La Sonothèque:
* https://lasonotheque.org/sanza-instrument-s0470.html

* https://lasonotheque.org/accordage-d-un-piano-s2696.html

* https://lasonotheque.org/vent-s0595.html

* https://lasonotheque.org/boite-a-musique-do-1-s1867.html

* https://lasonotheque.org/chant-diphonique-do-s3033.html

* https://lasonotheque.org/didgeridoo-s0296.html

