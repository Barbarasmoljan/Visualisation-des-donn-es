# Visualisation de données

L’objectif de ce travail de visualisations est d’illustrer les données récoltées durant le questionnaire tout en les mettant en perspective. Le questionnaire porte en lui-même sur les pratiques musicales des répondants ainsi que sur d’autres questions connexes telles que les difficultés d’apprentissage et leur éventuelle volonté d'apprendre à jouer/chanter via des cours en ligne.


## Contexte du sondage

Pour la création du sondage, l’idée était de comprendre le parcours musical des gens, en se focalisant tout particulièrement sur ces points : besoins en musique, les motivations des gens et les obstacles rencontrés pour ceux qui débutent, reprendre ou approfondir un pratique musicale. À cet effet, un sondage a été créé sur *Google Forms*, puis partagé pour collecter les témoignages. 

Après avoir récolté les réponses, on a par la suite extrait des exemples concernant les difficultés ressenties vis-à-vis de leur pratique musicale. Ceci dans le but de pouvoir développer un programme pédagogique sur internet ultérieurement qui puisse cibler une problématique réelle qui existe chez certaines personnes.

Le questionnaire a été créé de manière anonymisée et transmis, dans un premier temps, à des connaissances, par Whatsapp et par e-mails. Il a été ensuite relayé plus loin. Parmi les connaissances, il s’agissait principalement de cibler des personnes adultes (majeurs), francophones. Qu’elles soient musiciennes professionnelles ou non, ou que ces personnes pratiquent ou non la mausique régulièrement, l'objectif est de visualiser les parcours variés. Afin de tenter d’obtenir le plus possible de réponses, le sondage a également été posté sur des forums de musiquse tels que audio fanzine.

La collecte des réponses a duré environ mois, soit environ 4 semaines, ce qui a résulté de 111 réponses au cours de ce délai. Une fois le sondage terminé, un fichier. csv a été produit à partir de ces données afin de, par la suite, traiter certaines réponses et de les visualiser.

Nos données comportent majoritairement des éléments de réponses catégorielles. Certaines réponses étaient à choix, mais d’autres permettait au répondant d'ajouter une réponse écrite. Pour ce rendu, nous vous proposons six visualisations qui s'appuient pleinement sur ces données. Toutes comportent une certaine forme d’interaction que nous expliciterons pour chacune d’entre elles. Concernant la qualité des données, mise à part quelques corrections qui ont dû être apportée au fichier .csv, on peut dire que l’échantillonnage est plutôt large pour un questionnaire à petite échelle. Nous avons pu obtenir 111 réponses. Même si certaines des réponses ont été interrompues en cours de route, ces dernières restent précieuses. Il peut bien sûr y avoir des biais dans les réponses, car les données concernent l’être humain et ses habitudes et usages musicaux.


## Sur la DATA, en détail
Dans le fichier .csv, on retrouve l’ensemble des données des réponses des 111 (vérif) répondants. Un nettoyage a dû être effectué après le transfert depuis le questionnaire au format .csv. De plus, des catégories supplémentaires ont dû être ajoutées afin de simplifier certaines informations textuelles. C’est le cas par exemple de la variable « TypeInstrument », créée expressément pour récupérer des informations telles que le type d'instrument ils jouent (à corde, à vent, etc.). Ils ont été codés par des chiffres, mais ils renvoient à des réponses catégorielles.

## Liste de chaque variable et leur définition:

-Âge : L’âge des répondants. (En tranche d’âge.)

-Practice : Quelle est la pratique musicale des répondants.

-Instrument : Quels types d’instruments jouent les répondants.

-Apprentissage : Les répondants ont-ils appris par le passé de la musique/du chant.

-Difficultés : Dans quelle mesure l'apprentissage a-t-il été difficile pour les répondants ?

-Aide : Qu'est-ce qui aiderait à se remettre à la musique/au chant.

-StyleMusic : Quel style de musique apprécient/jouent les répondants.

-Intérêts : Intérêt à apprendre.

-Projet : Est-ce que les répondants souhaiteraient produire des projets avec les connaissances apprises.

-Accompagnement : Quel type d'accompagnement les répondants souhaiteraient.

-CoursEnLigne : Que veulent-ils apprendre.

-Avantages : Avantages des cours selon les répondants.

-DifficultésLearn : Quels ont été les difficultés d’apprentissage pour les répondants.

-IntérêtFormationEnLigne : Les répondants sont-ils intéressés par la possibilité de suivre des cours en ligne.

-Remarque Supplémentaire : Réponses supplémentaires des répondants.

-TypeInstrument : Code numérique pour la variable Instrument. Chaque numéro correspond à un type d’instrument (par ex. instruments à cordes.)

## Totalité des variables des données du fichier CSV
"Age","Practice","Instrument","Apprentissage","Difficultés","Aide","StyleMusic","Intérêts","Projet","Accompagnement","CoursEnLigne","Avantages","DifficultésLearn","IntérêtFormationEnLigne","RemarqueSupplémentaire","TypeInstrument"

## Visualisation: avant-propos
Concernant les visualisations choisies, elles ont toutes soit un attrait artistique, soit un lien avec la thématique du questionnaire : la musique. Cela passe autant par la forme autant que par le son. La plupart des visualisations s’inspirent d’objets réels (piano, partition, gramophone avec un vinyle) et d’autres comportent des formes plus classiques, entre guillemets, plus propre aux visualisations. C’est le cas, par exemple, du Voronoï qui utilise également les P5 et les camemberts. Chacune a ses avantages et inconvénients, mais elles permettent dans tous les cas de visualiser nos données. Nous détaillerons plus en détail ce que l'on voit ou ne voit pas dans ces visualisations lors de leur présentation.

## Raison de ces visualisations
Dans le cadre du champ disciplinaire ISH et du champ d’études en Musicologie, les données créées à la suite d’un questionnaire allient ces deux disciplines. Comme indiqué précédemment, l’objectif de la création de ces visualisations est d’ordre à la fois artistique et pratique. Elles partagent toutes une thématique commune en lien avec la musique. Cela se traduit notamment par des visualisations en forme de vinyle, de partition et de piano. D’autres, cependant, ont une apparence somme toute plus classique : camemberts et voronoï. Tous ont toutefois le point commun d'être des visualisations interactives : cliquer, appuyer sur des touches ou aller au-dessus (hover) déclenche un événement.
Nous avons choisi celles-ci pour des raisons expérimentales : nous découvrons plus concrètement l’usage de D3.js avec ces rendus, mais aussi afin de montrer nos résultats. De plus, il est plus intéressant de s’essayer à des rendus visuels atypiques. C’est également le but de Dear Data, rendre les données visuellement cohérentes et en informer sur sa nature. Bien sûr, dans chaque cas de visualisation, il sera fait mention des données invisibles ou difficilement appréhendables au premier abord. Bien que certaines idées aient dû être abandonnées, nous avons pu, dans les grandes lignes, atteindre l'objectif que nous nous étions fixées avec ces visualisations. 

## 1) Camembert:  (fichiers c.html et c2.js)
Celui-ci est beaucoup moins poussé que les autres visualisations. Tout d’abord, on remarquera qu’en passant la souris sur un bout de camembert (en hoover), le son démarre (il ne faut pas hésiter à cliquer sur la page pour que le son se débloque). Il affiche les pourcentages de types d’instruments joués (cordes, vents, percussions, chants, autre). Ils ont été codés avec des valeurs numériques de sorte qu’ils soient plus facilement exploitables. Par exemple, 1 est égal à un instrument à corde. Non seulement du son sort des arcs respectifs du camembert, mais la liste des instruments joués s'affiche également. Chaque ligne correspond à une personne. 
On ne voit cependant pas, dans cette visualisation, que certains jouent de plusieurs instruments. Toutes les autres informations du fichier csv ne s’affichent pas non plus.
Quant au choix de cette visualisations, il s’explique par le fait qu'il s'agissait de l'une des premières visualisations créées, et, bien qu’elle soit moins poussée, elle permet tout de même d'extraire des informations sur le type d'instrument le plus joué par les répondants.

## 2) Partition : (fichiers p.html et p.js)
Cette visualisation met en scène des notes, en fichiers png ou en texte, qui se déplacent sur des portées créées en svg. L’accolade est également ajoutée en svg. L’animation en soi n’apporte pas nécessairement d’éléments informatifs pour le rendu, mais elle rend l'ensemble moins statique. De plus, les couleurs attribuées aux notes n’apportent pas d’informations supplémentaires, mais sont uniquement décoratives. Pour ce qui est des éléments apportant des informations sur nos données, il y a tout d’abord la tranche d’âge indiquée par le texte qui accompagne les notes. Quant à la forme des notes, elle dépend également de l’âge du répondant et permet donc de distinguer chaque individu par ce premier axe. Le second axe, les « instruments » est associé à la taille des individus. Plus elle est petite, moins la personne joue d’instruments et inversement. Une brève légende accompagne la partition tout en bas de la page à titre de rappel. À cela s'ajoute le fait que si on clique sur une note, il est possible d’afficher d’autres informations connexes (Style de musique, projet potentiel) qui ne sont pas visibles dans notre visualisation.
Toutefois, les autres informations ne sont pas affichées dans cette visualisation, et il devient rapidement évident qu'il est nécessaire de faire une sélection parmi pléthore d’informations disponibles dans le csv. Mais, puisque le fichier est plutôt long, il serait indigeste de tout afficher d’un coup.

## 3) Voronoï : (fichiers v.html et v.js)
Cette visualisation combine à la fois les libraries *D3* et *P5* et est basée sur le code mis en lien en tout début du code (fichier v.js). En allant avec la souris (hover) sur les formes géométriques, on peut afficher les informations de chaque individu. Chaque forme géométrique correspond à un répondant lié à son ID. Le fait que les formes soient plus ou moins proches de leurs voisins les plus directs montre qu'ils sont similaires. En cliquant sur les opposés en diagonale, on peut remarquer que les informations sont totalement opposées. L'angle N-W joue le moins d'instrument différent, l'angle S-E joue le plus d'instrument différent. L'angle N-E concerne les individus les plus âgés et l'angle S-W, les plus jeunes. Qui plus est, contrairement à la visualisation de partition, ce voronoï, est cantonné plus strictement à son canevas, en raison de la nécessité de rendre cohérent le code pour *P5* et *D3* qui sont parfois contradictoires. C’était le cas par exemple du camembert où l’usage de *P5* pour visualiser le son a été abandonné, car l’un fonctionnait, et le second non.
Quant aux données non visibles, elles concernent surtout celles qui ne sont pas affichées dans le descriptif en survol. On ignore quel type d'instrument un individu joue ainsi que les détails de son parcous.
Si cette visualisation a été conservée, c'est parce qu'elle allie deux librairies différentes, mais qui peuvent s'avérer utiles selon le type de visualisation souhaité.

## Crédits

1. Camembert

La Sonothèque:
* https://lasonotheque.org/sanza-instrument-s0470.html

* https://lasonotheque.org/accordage-d-un-piano-s2696.html

* https://lasonotheque.org/vent-s0595.html

* https://lasonotheque.org/boite-a-musique-do-1-s1867.html

* https://lasonotheque.org/chant-diphonique-do-s3033.html

* https://lasonotheque.org/didgeridoo-s0296.html

## 4) Vinyle interactif 

Il s’agit d’une visualisation interactive réalisée en d3.js, représentant un vinyle animé. Ce dernier affiche 111 réponses réparties en cinq catégories d’âges : - 18 ans, 18 à 29 ans, 30 à 44 ans, 45 à 60 ans et plus de 60 ans. Chaque catégorie d’âges est associée à une zone colorée sur le vinyle, permettant d’afficher le nombre de personnes et le pourcentage lorsqu’on clique sur une couleur.
Une description et des instructions pour utilisateur.ice.s figurent en haut de l’écran de visualisation et résument brièvement de quoi il s’agit et comment interagir avec la visualisation. Le texte écrit est également animé. En effet, si on passe, sans cliquer avec la « souris » sur le texte, celui-ci change de couleur et s’anime. Les émoticônes qui ont été rattachés au texte ont été prise de la libraire Openmoji.org. 
Lorsqu’on sélectionne une zone, le vinyle s’anime en tournant dans le sens des aiguilles d’une montre, accompagnée d’une musique. Le premier clic active le vinyle, affiche les réponses et démarre le son. Un second clic arrête la rotation du vinyle et de la musique. On peut ainsi changer de zone en cliquant une nouvelle fois sur une autre couleur pour découvrir une nouvelle catégorie d’âge, ses données et une autre musique associée à la nouvelle catégorie sectionnée. Les résultats sont affichés sur l’écran sous forme de texte et situés en dessous du vinyle.
La forme du vinyle s’inspire d’un « donut » ou cercle avec un trou central, rappelant le type de visualisation en « camembert » , mais avec un espace central pour imiter un vinyle. Au niveau esthétique, deux images en PNG : un chien et un gramophone, ont été placées au centre. Ces images font références et sont un clin d’œil au logo emblématique de His Master’s Voice (HMV) et qui est à l’origine une œuvre de l’artiste anglais Francis Barraud. Le logo a été repris par la société Gramophone Group (Future EMI). Sans en copier exactement le logo pour respecter les droits d’auteur, les images utilisés ont été extraites de la libraire d’images disponibles sur le site Pixabay.
Afin que les deux images se superposent mais restent chacune visibles, nous avons réajusté leur degré d’opacité dans le code.
Au niveau du rendu visuel, l’image du gramophone reste statique et au centre, tandis que celle du chien tourne dès le vinyle est activé. A ces deux images, un texte « Mon Vinyle » a été ajouté en haut au centre, renforçant l’effet visuel souhaité. 
Pour simuler l’aspect d’un véritable vinyle, une aiguille (needle) composée d’un rectangle et de deux petits cercles à son extrémité a été ajouté. Cette aiguille s’active lors du clic sur une zone. Enfin, en arrière-plan, des notes musiques animées ont été intégrée et qui montent de façon fluide pour renforcer l’ambiance musicale de la visualisation. 

## Crédits

