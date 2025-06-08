# Visualisation d'un questionnaire musical

# Réalisation du cours
Ce travail a été réalisé par Barbara Smoljan et Margaux Sollberger dans le cadre du cours "Visualisation de données" donné par Isaac Pante (UNIL). 

L’objectif de ce travail de visualisations est d’illustrer les données récoltées durant le questionnaire et de les mettre en perspective. Le questionnaire porte en lui-même sur les pratiques musicales des répondants ainsi que sur d’autres questions connexes telles que les difficultés d’apprentissage et leur éventuelle volonté d'apprendre à jouer ou à chanter via des cours en ligne.


## Contexte du sondage

Pour créer le sondage, l’idée était de comprendre le parcours musical des gens, en se focalisant tout particulièrement sur les points suivants : les besoins en musique, les motivations des gens et les obstacles rencontrés par ceux qui débutent, ou souhaitent reprendre ou approfondir une pratique musicale. À cet effet, un sondage a été créé sur *Google Forms*, puis partagé pour collecter les témoignages. 

Après avoir récolté les réponses, on a par la suite extrait des exemples concernant les difficultés ressenties vis-à-vis de leur pratique musicale. Ceci dans le but de pouvoir développer ultérieurement un programme pédagogique en ligne qui puisse cibler une problématique qui existe chez certaines personnes.

Le questionnaire a été créé de manière anonymisée, puis transmis, dans un premier temps, à des connaissances par *Whatsapp* et par e-mails. Il a ensuite été relayé plus loin. Il s’agissait principalement de cibler des personnes majeures et francophones. Que les répondants soient des musiciens professionnels ou non, ou qu'ils pratiquent ou non la musique régulièrement, l'objectif est de mettre en lumière des parcours variés. Afin d’obtenir un maximum de réponses, le sondage a également été posté sur des forums de musique tels que Audio Fanzine.

La collecte des réponses a duré environ mois, soit environ 4 semaines, soit un mois, ce qui a donné lieu à 111 réponses. Une fois le sondage terminé, un fichier .csv a été produit à partir de ces données afin de pouvoir les traiter et de les visualiser par la suite.

Nos données comportent majoritairement des éléments de réponses catégorielles. Certaines réponses étaient à choix, mais d’autres permettaient au répondant d'ajouter une réponse écrite. Pour ce rendu, nous vous proposons six visualisations s'appuyant pleinement sur ces données. Toutes comportent une certaine forme d’interaction que nous expliciterons pour chacune d’entre elles. Concernant la qualité des données, mise à part quelques corrections qui ont dû être apportées au fichier .csv, on peut dire que l’échantillonnage est plutôt large pour un questionnaire à petite échelle. Nous avons obtenu 111 réponses. Même si certaines des réponses ont été interrompues en cours de route, ces dernières restent précieuses. Il peut bien sûr y avoir des biais dans les réponses, car il s'agit de données concernant l’être humain et ses habitudes et usages musicaux.


## Sur la DATA, en détail
Dans le fichier .csv, on retrouve l’ensemble des données des réponses des 111 (vérif) répondants. Un nettoyage a dû être effectué après le transfert depuis le questionnaire au format .csv. Des catégories supplémentaires ont également dû être ajoutées afin de simplifier certaines informations textuelles. C’est le cas par exemple de la variable « TypeInstrument », créée expressément pour récupérer des informations telles que le type d'instrument joué (à corde, à vent, etc.). Codées par des chiffres, ces variables renvoient à des réponses catégorielles.

## Liste de chaque variable et leur définition:

-Âge : L’âge des répondants. (En tranche d’âge.)

-Practice : Quelle est la pratique musicale des répondants?

-Instrument : Quels types d’instruments jouent les répondants?

-Apprentissage : Les répondants ont-ils appris par le passé à jouer d'un instrument de musique ou à chanter?

-Difficultés : Dans quelle mesure l'apprentissage a-t-il été difficile pour les répondants ?

-Aide : Quelles seraient les meilleures façons de se remettre à la musique ou au chant?

-StyleMusic : Quel style de musique apprécient ou jouent les répondants?

-Intérêts : Intérêt à apprendre.

-Projet : Est-ce que les répondants souhaiteraient produire des projets avec les connaissances apprises?

-Accompagnement : Quel type d'accompagnement les répondants souhaiteraient-ils?

-CoursEnLigne : Que souhaitent-ils apprendre?

-Avantages : Avantages des cours selon les répondants.

-DifficultésLearn : Quelles ont été les difficultés d’apprentissage pour les répondants?

-IntérêtFormationEnLigne : Les répondants sont-ils intéressés par la possibilité de suivre des cours en ligne?

-Remarque Supplémentaire : Réponses supplémentaires des répondants.

-TypeInstrument : Code numérique pour la variable Instrument. Chaque numéro correspond à un type d’instrument (par ex.: instruments à cordes.).

## Totalité des variables des données du fichier CSV
"Age","Practice","Instrument","Apprentissage","Difficultés","Aide","StyleMusic","Intérêts","Projet","Accompagnement","CoursEnLigne","Avantages","DifficultésLearn","IntérêtFormationEnLigne","RemarqueSupplémentaire","TypeInstrument"

## Visualisation: avant-propos
Concernant les visualisations choisies, elles ont toutes un attrait artistique ou un lien avec la thématique du questionnaire : la musique. Cela passe autant par la forme autant que par le son. La plupart des visualisations s’inspirent d’objets réels (piano, partition, gramophone avec un vinyle) et d’autres comportent des formes plus classiques, en quelque sorte, plus propres aux visualisations. C’est le cas, par exemple, du Voronoï qui utilise également P5 et les camemberts. Chacune a ses avantages et inconvénients, mais elles permettent dans tous les cas de visualiser nos données. Nous détaillerons plus en détail ce que l'on voit ou ne voit pas dans ces visualisations lors de leur présentation.

## Raison de ces visualisations
Dans le cadre du champ disciplinaire ISH et du champ d’études en musicologie, les données créées à la suite d’un questionnaire allient ces deux disciplines. Comme indiqué précédemment, l’objectif de la création de ces visualisations est d’ordre à la fois artistique et pratique. Toutes partagent une thématique commune en lien avec la musique. Cela se traduit notamment par des visualisations en forme de vinyle, de partition et de piano. D’autres, cependant, ont une apparence somme toute plus classique : camemberts et voronoï. Toutes ces visualisations ont toutefois le point commun d'être interactives : cliquer, appuyer sur des touches ou aller au-dessus (hover) déclenche un événement.
Nous avons choisi celles-ci pour des raisons expérimentales : nous découvrons plus concrètement l’usage de D3.js avec ces rendus, mais aussi afin de montrer nos résultats. De plus, il est plus intéressant de s’essayer à des rendus visuels atypiques. C’est également l'objectif du livre *Dear Data*, rendre les données visuellement cohérentes et en informer sur leur nature. Bien entendu, dans chaque cas de visualisation, il sera fait mention des données invisibles ou difficilement appréhendables au premier abord. Bien que certaines idées aient dû être abandonnées, nous avons pu, dans les grandes lignes, atteindre l'objectif que nous nous étions fixé avec ces visualisations.

## 1) Camembert : (fichiers c.html et c2.js)
Celui-ci est beaucoup moins poussé que les autres visualisations. Tout d’abord, lorsqu'on passe la souris au-dessus d'une partie du camembert (en hover), le son démarre (il ne faut pas hésiter à cliquer sur la page pour que le son se débloque). Il affiche les pourcentages de types d’instruments joués (cordes, vents, percussions, chants, autre). Ils ont été codés avec des valeurs numériques pour les rendre plus facilement exploitables. Par exemple, 1 correspond à un instrument à corde. Non seulement du son sort des arcs respectifs du camembert, mais la liste des instruments joués s'affiche également. Chaque ligne correspond à une personne.
Cette visualisation ne permet cependant pas de voir que certains jouent de plusieurs instruments. Toutes les autres informations du fichier .csv ne s’affichent pas non plus.
Quant au choix de cette visualisations, il s’explique par le fait qu'il s'agissait de l'une des premières visualisations créées. Bien qu’elle soit moins poussée, elle permet tout de même d'extraire des informations sur le type d'instrument le plus joué par les répondants.

## Crédits

1. Camembert

La Sonothèque:
* https://lasonotheque.org/sanza-instrument-s0470.html

* https://lasonotheque.org/accordage-d-un-piano-s2696.html

* https://lasonotheque.org/vent-s0595.html

* https://lasonotheque.org/boite-a-musique-do-1-s1867.html

* https://lasonotheque.org/chant-diphonique-do-s3033.html

* https://lasonotheque.org/didgeridoo-s0296.html

## 2) Partition : (fichiers p.html et p.js)
Cette visualisation met en scène des notes, sous forme de fichiers .png ou en texte, qui se déplacent sur des portées créées en svg. L’accolade est également ajoutée en svg. L’animation en soi n’apporte pas nécessairement d’éléments informatifs pour le rendu, mais elle rend l'ensemble moins statique. De plus, les couleurs attribuées aux notes ne fournissent pas d’informations supplémentaires, mais sont uniquement décoratives. Pour ce qui est des éléments apportant des informations sur nos données, il y a tout d’abord la tranche d’âge indiquée par le texte qui accompagne les notes. Quant à la forme des notes, elle dépend également de l’âge du répondant et permet donc de distinguer chaque individu par ce premier axe. Le second axe, les « instruments » est associé à la taille des individus. Plus elle est petite, moins la personne joue d’instruments et inversement. Une brève légende accompagne la partition tout en bas de la page à titre de rappel. À cela s'ajoute le fait que si on clique sur une note, il est possible d’afficher d’autres informations connexes (style de musique, projet potentiel) qui ne sont pas visibles dans notre visualisation.
Toutefois, les autres informations ne sont pas affichées dans cette visualisation, et il devient rapidement évident qu'il est nécessaire de faire une sélection parmi la multitude d’informations disponibles dans le .csv. Mais, puisque le fichier est plutôt long, il serait indigeste de tout afficher d’un coup.

## 3) Voronoï : (fichiers v.html et v.js)
Cette visualisation combine à la fois les libraries *D3* et *P5* et est basée sur le code mis en lien en tout début du code (fichier v.js). Lorsqu'on déplace le curseur sur une forme géométrique, les informations de chaque individu s'affichent. Chaque forme géométrique correspond à un répondant lié à son ID. Le fait que les formes soient plus ou moins proches de leurs voisins les plus directs montre qu'ils sont similaires. En cliquant sur les opposés en diagonale, on peut remarquer que les informations sont totalement opposées. L'angle N-W joue le moins d'instruments différents, l'angle S-E joue le plus d'instruments différents. L'angle N-E concerne les individus les plus âgés et l'angle S-W, les plus jeunes. De plus, contrairement à la visualisation de partition, ce voronoï, est cantonné plus strictement à son canevas, en raison de la nécessité de rendre cohérent le code pour *P5* et *D3* qui sont parfois contradictoires. C’était le cas par exemple du camembert où l’usage de *P5* pour visualiser le son a été abandonné, car l’un fonctionnait, et l'autre non.
Quant aux données non visibles, elles concernent surtout celles qui ne sont pas affichées dans le descriptif en survol. On ignore quel type d'instrument un individu joue ainsi que les détails de son parcours.
Si cette visualisation a été conservée, c'est parce qu'elle allie deux librairies différentes, mais qui peuvent s'avérer utiles selon le type de visualisation souhaité.

## 4) Vinyle interactif 

Il s’agit d’une visualisation interactive réalisée en *D3.js*, représentant un vinyle animé. Ce dernier affiche 111 réponses réparties en cinq catégories d’âges : 18 ans ou moins, 18 à 29 ans, 30 à 44 ans, 45 à 60 ans et plus de 60 ans. Chaque catégorie d’âge est associée à une zone colorée sur le vinyle, permettant d’afficher le nombre de personnes et le pourcentage lorsqu’on clique sur une couleur.

Une description et des instructions pour utilisateur.ice.s figurent en haut de l’écran de visualisation et résument brièvement le fonctionnement de la visualisation. Le texte écrit est également animé. En effet, si l'on passe le curseur au-dessus sans cliquer, le texte change de couleur et s’anime. Les émoticônes qui ont été rattachés au texte ont été pris de la library Openmoji.org. 

Lorsqu’on clique sur une zone colorée du vinyle, celui-ci s’anime en tournant dans le sens des aiguilles d’une montre et fait une musique est jouée. Le premier clic active ainsi le vinyle, affiche les réponses et démarre le son. Un second clic arrête la rotation du vinyle et de la musique. On peut ainsi changer de zone en cliquant une nouvelle fois sur une autre couleur pour découvrir une nouvelle catégorie d’âge, ses données et une autre musique associée à cette nouvelle catégorie. Les résultats s'affichent sous forme de texte et situés en dessous du vinyle.

La forme du vinyle s’inspire d’un graphique en forme de « donut » comportant un trou ou un espace central. Au niveau esthétique, deux images en PNG : un chien et un gramophone, ont été placées au centre. Ces images font référence au logo emblématique de *His Master’s Voice* (HMV), qui est à l’origine une œuvre de l’artiste anglais Francis Barraud. Le logo a été repris par le groupe Gramophone Group (Future EMI). Sans en copier exactement le logo pour respecter les droits d’auteur, les images utilisées ont été extraites de la bibliothèque d’images disponibles sur le site *Pixabay*. Afin que les deux images se superposent tout en restnt visibles chacune à part, nous avons ajusté leur degré d’opacité dans le code.

L’image du gramophone reste statique et au centre, tandis que celle du chien tourne dès que le vinyle est activé. Un texte « Mon Vinyle » a été ajouté au-dessus et au centre de ces deux images, renforçant ainsi l’effet visuel souhaité. 

Pour simuler l’aspect d’un véritable vinyle, une aiguille (needle dans le code) composée d’un rectangle et de deux petits cercles à son extrémité a été ajoutée. Cette aiguille s’active lors du clic sur une zone colorée du vinyle. Enfin, en arrière-plan, des notes de musique animées ont été intégrées en arrière-plan. Celles-ci montent de façon fluide pour renforcer l’ambiance musicale de la visualisation. 

Une des limites de ce type de visualisation est la difficulté à effectuer des comparaisons précises pour des valeurs qui seraient proches, comme par exemple 10.8 % par rapport à une valeur représentant 8.1 %. Contrairement à des visualisations ou des graphiques qui représentent des barres ou des histogrammes, il est plus difficile de lire et de comparer les tranches/ zones issues de ce type de visualisation. De plus, sans texte, ni explication, il serait beaucoup plus complexe à comprendre. Ce type de visualisation ne serait pas non plus adapté si les données étaient beaucoup plus nombreuses. Un autre aspect limitant porte sur le fait qu'il s'agit d'un vinyle qui tourne. Ceci peut désorienter les utilisateur.ice.s et donc leur faire perdre leurs repères par rapport aux tranches d'âges/zones colorées.

## Crédits

Les images du chien et du gramophone proviennent du site internet suivant : https://pixabay.com/fr/

Emoticônes: https://openmoji.org

Musique par tranches d'âge :

- Moins de 18 ans : https://pixabay.com/fr/music/search/2000s%20%20pop%20music/?pagi=2
- 18 à 29 ans : https://pixabay.com/fr/music/search/90s%20music/ 
- 30 à 44 ans : https://pixabay.com/fr/music/search/80s%20music/ 
- 45 à 59 ans : https://pixabay.com/fr/music/trouille-snatch-166884/
- Plus de 60 ans : https://pixabay.com/music/search/emo%20rock%20/

HMV - *The Rise and Fall of a music icon* : https://www.bbc.com/news/uk-46700080

## 5) Piano

Cette nouvelle visualisation représente des réponses à une question portant sur les difficultés rencontrées lors de l'apprentissage musical, et utilise la métaphore visuelle d'un piano. Le piano est un instrument fréquemment utilisé comme un symbole de l'apprentissage de la musique en général. L'idée de cette visualisation consiste à apporter une dimension ludique et interactif de l'usage des données. La structure de la visualisation se repose sur la binarité des réponses "OUI" ou "NON", puis illustre la proportion de personnes ayant rencontré ou non des difficultés dans leur apprentissage.

L'un des objectifs est de permettre à un.e utilisateur.ice d'explorer les deux résultats possibles en jouant sur différentes touches pour découvrir les réponses. Pour ce faire, il est possible de tester ces résultats en cliquant au hasard sur des touches du piano pour tenter de retrouver les deux notes associées aux réponses " OUI" et "NON", ou directement en appuyant sur les touches "V" et "G" du clavier d'un ordinateur. Ce choix est motivé par le fait que ces deux lettres font référence à la position des doigts sur les touches d'un clavier de piano. La visualisation affiche clairement, si la réponse correspond à "OUI" ou "NON". Elle affiche également le pourcentage et le nombre précis de personnes ayant répondu dans chacun des cas.

L'idée de la visualisation est de permettre aux utilisateur.ice.s d'interagir de deux manières : soit en cliquant au hasard sur des touches du piano soit en utilisant les touches "V" ou "G" d'un clavier d'ordinateur. En procédant ainsi, la lecture d'une note (son d'une note spécifique) est déclenchée. Lorsqu'une touche spécifique est activée, celle-ci s'anime. Il est également possible d'observer que la touche bouge (descend, puis remonte) afin de simuler une pression sur une touche de piano. Le son qui accompagne l'action renforce l'aspect multisensoriel de l'expérience. Le fonctionnement de cette visualisation se veut simple : chaque interaction génère un feedback immédiat pour permettre aux utilisateur.ice.s de comprendre la répartitions des réponses. L'objectif est d'obtenir un effet sensoriel et sonore, tout en proposant une petite exploration ludique.

L'une des limites de cette visualisation concerne la perception des proportions qui peut être difficile à interpréter de façon précise. Sans explication écrite, il est ardu de comprendre les valeurs et leurs significations. Une autre limite réside dans le fait que cette visualisation pourrait être confondue avec une pure simulation musicale et que chaque touche pourrait représenter d'autres données. 

Un autre aspect important à souligner et qui n'est pas explicitement spécifié dans cette visualisation, concerne le nombre de réponses "OUI" et "NON". Nous obtenons en effet 97 réponses sur un total de 111 pour l'ensemble du sondage. Cependant, si l'on additionne le nombre de "OUI" et le nombre de "NON", on n'obtient pas le résultat de 111. Ceci suggère que toutes les réponses ne sont pas comptabilisées ou ne sont pas disponibles. Ceci s'explique notamment par le format du sondage, dans lequel la question traitée n'était pas formulée comme une question obligatoire. Une partie des personnes ayant pris part au sondage ont donc dû laisser cette question vide ou ont passé outre. Par conséquent, la répartition des réponses "OUI" et "NON" ne couvre pas la totalité des personnes ayant répondu au sondage. 

Malgré ces limites, il est possible de dire que cette visualisation propose une manière différente d'explorer et d'interroger des données. Elle s'émancipe d'une présentation graphique habituelle pour offrir une expérience plus interactive et multisensorielle.

## Crédits

Sons pour les notes proviennent du site *SampleFocus* : https://samplefocus.com/
Pour ce site il faut créer un compte gratuit afin de pouvoir accéder à la libraire des sons.

Pour la note Fa (V) : https://samplefocus.com/samples/piano-f

Pour la note Fa# (G) :  https://samplefocus.com/samples/piano-note-f-f


