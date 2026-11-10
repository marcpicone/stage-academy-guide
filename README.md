# Stage Academy Guide

Un support de cours local pour découvrir la programmation pendant un stage de
troisième, en construisant un petit quiz Android sur le développement.

Ce dépôt contient le guide. L’application Kotlin/Compose est dans le dépôt séparé
[`stage_academy`](https://github.com/marcpicone/stage_academy).

## Ouvrir le guide

Ouvrir `index.html` dans un navigateur par double-clic, sous Windows ou macOS.
Aucune installation Node, compilation ou serveur local n’est nécessaire.
Le contenu et les styles sont locaux ; aucun compte ni connexion Internet n’est
nécessaire pour consulter l’accueil. Les sites externes éventuels nécessitent Internet.

## État actuel

L’accueil donne accès à l’introduction Git/GitHub : historique de versions,
dépôt, commit local, rôle de GitHub et distinction commit/push. La page contient
un arbre Git progressif de six étapes et quatre questions avec explications,
sans note ni sauvegarde de progression. Elle ne lance aucune opération Git réelle.

Ouvrir `module_git_intro_view/index.html` directement ou utiliser le lien de la home.
Sans JavaScript, l’arbre complet et les six étapes restent visibles et les corrections sont proposées
dans des détails dépliables ; les commandes interactives sont désactivées.
La page 2 (`module_git_setup_view/index.html`) guide la création de compte, le fork,
la découverte de la CLI et le clone HTTPS de dev. Elle ne modifie pas l’application
et ne demande ni commit ni push. Quatre pages IDE complètent ce parcours. La première approche du code commence avec les variables et les types. Les autres pages restent à créer. Le téléphone de l’accueil est
une illustration HTML/CSS du quiz à construire.

## Organisation

```text
stage-academy-guide/
  index.html                   # HTML de l’accueil
  theme.css                    # Tokens visuels partagés
  theme_page.css               # Styles HTML généraux
  home_view/
    home_view.css              # Styles propres à l’accueil
  module_git_intro_view/
    index.html                 # Cours et contenu de repli sans JS
    module_git_intro_view.css  # Styles privés au module
    module_git_intro_view.js   # Frise et questions corrigées
  module_git_setup_view/
    index.html                 # Compte, fork, CLI et clone
    module_git_setup_view.css
    module_git_setup_view.js    # Aides locales, aucune commande exécutée
    assets/                    # Captures officielles et provenance
  module_ide_intro_view/
    index.html                 # Rôle de l’IDE et découverte de ses zones
    module_ide_intro_view.css
    module_ide_intro_view.js    # Exploration du schéma et questions
    assets/                    # Capture officielle et provenance
  module_ide_setup_view/
    index.html                 # Ouvrir, explorer et lancer le projet existant
    module_ide_setup_view.css  # Page native sans JavaScript
  module_ide_debug_view/
    index.html                 # Enquête Logcat et correction guidée
    module_ide_debug_view.css
    assets/                    # Capture officielle de Logcat et provenance
  module_ide_share_view/
    index.html                 # Vue Git ou terminal, commit, push et PR
    module_ide_share_view.css
  module_code_variables_view/
    index.html                 # Variables et types, première question Kotlin
    module_code_variables_view.css
  module_code_functions_view/
    index.html                 # Action, paramètres, retour et portée
    module_code_functions_view.css
  module_code_compose_view/
    index.html                 # Text, Button, action, condition et état
    module_code_compose_view.css
  module_code_second_question_view/
    index.html                 # Deux questions et observation des répétitions
    module_code_second_question_view.css
  module_code_lists_view/
    index.html                 # List<String>, indices et boucle for
    module_code_lists_view.css
  module_code_question_model_view/
    index.html                 # data class Question, instances et vue commune
    module_code_question_model_view.css
  module_code_presenter_view/
    index.html                 # Responsabilités et premier QuizPresenter
    module_code_presenter_view.css
  module_code_quiz_progression_view/
    index.html                 # État du quiz, question suivante et fin
    module_code_quiz_progression_view.css
  module_code_score_view/
    index.html                 # Score, réponse unique et recommencement
    module_code_score_view.css
  module_code_visibility_view/
    index.html                 # private/public, classe et fichier
    module_code_visibility_view.css
  README.md
  AGENTS.md                    # Objectif, architecture et consignes de travail
  .gitignore
  .codex/
    config.toml                # Configuration minimale du projet
    rules/default.rules        # Règles pour certains préfixes de commande
```

L’organisation reprend les conventions du projet `web_app_course` : une structure
plate par vue, sans chargement dynamique du HTML. Aucun JavaScript n’est nécessaire
à cet accueil. Si une interaction est ajoutée, son code ira dans
`home_view/home_view.js`. Ne pas créer de dossiers ou abstractions sans besoin.

## Vérifier une modification

- Ouvrir `index.html` directement et vérifier que les styles se chargent.
- Vérifier un affichage ordinateur et une largeur mobile, sans défilement horizontal.
- Parcourir les liens au clavier, notamment le lien d’évitement et l’ancre du parcours.
- Vérifier que la console ne signale pas d’erreur et que les ressources restent locales.
- Distinguer un contrôle réel sur Windows d’une vérification depuis un autre système.

## Configuration Codex

La configuration `.codex` est versionnée, sans modèle imposé ni secret.
Son application dépend de la confiance accordée au projet, de la version de Codex
et des politiques de l’environnement. Les règles par préfixe ne couvrent pas toutes
les façons possibles de lancer une action : ce ne sont pas des garanties générales.
Les demandes déjà autorisées par l’utilisateur ne nécessitent pas de nouvelle
confirmation conversationnelle ; une approbation native peut rester nécessaire.

Références officielles : [configuration](https://learn.chatgpt.com/docs/config-file/config-reference),
[règles de commande](https://developers.openai.com/codex/rules).

La branche principale du guide est `dev`. Un commit ou un push ne se fait que dans
le périmètre d’une autorisation explicite ou d’une validation Junior adaptée.

## Vérifier l’introduction Git/GitHub

Choisir les six étapes de l’arbre : vérifier les points visibles, le repère dev et les explications.
Pour chaque question, vérifier les deux réponses, changer de réponse et réessayer.
Vérifier les liens home → introduction → home et le repli sans JavaScript.
Contrôler aussi les boutons et champs au clavier, le mobile et la console.
La syntaxe peut être vérifiée avec `node --check module_git_intro_view/module_git_intro_view.js`
si Node est disponible pour le développement ; Node n’est pas requis pour lire le cours.

Les mots nouveaux sont expliqués dans des notes en marge (sous les passages sur mobile).
Deux captures réelles de GitHub sont dans `module_git_intro_view/assets/`, avec leur
provenance. La PR et l’arbre sont illustratifs. Les conventions initiales/nom_de_branche
et [FeatureName] Message sont celles du projet ; elles ne sont pas imposées par Git.

## Page 2 : compte, fork et clone

Le parcours Windows utilise Git Bash, préparé avec l’encadrant. La personnalisation
du pseudo reste en mémoire, n’appelle aucune API et ne vérifie pas l’existence du
fork. Le terminal d’entraînement est explicitement simulé, limité à deux commandes.
Les cases finales sont des déclarations de l’élève, sans validation automatique
ni sauvegarde. Sans JavaScript, les commandes sont lisibles avec TON_PSEUDO à remplacer.

Vérifier : pseudo valide/invalide et retour aux exemples, refus du compte source,
simulation des deux commandes et d’une commande inconnue, quatre confirmations,
liens home/page 1/page 2 et repli sans JavaScript. L’authentification et le clonage
du compte réel de l’élève doivent être observés avec l’encadrant, pas simulés comme réussis.

## IDE — page 1

`module_ide_intro_view/index.html` présente le rôle de l’IDE, une capture officielle
d’Android Studio, cinq zones dans un schéma illustratif, la boucle modifier / construire /
lancer / observer et trois questions corrigées. L’ouverture du projet et son lancement sont guidés dans la page pratique suivante.
La page est accessible depuis la home et depuis la fin de Git page 2. Son bouton
précédent est à gauche et son lien suivant vers la page pratique à droite.
Sans JavaScript, le schéma et les descriptions restent lisibles, les corrections
dépliables disponibles et les boutons désactivés. Vérifier les cinq zones, les six
réponses, les changements de choix et les réinitialisations, ainsi que le clavier,
les petits écrans et les ressources locales. Les interactions n’agissent pas sur un vrai IDE.

## IDE — page 2

`module_ide_setup_view/index.html` guide l’ouverture du dossier cloné, la synchronisation
Gradle, la découverte des fichiers et le premier lancement sur un appareil préparé.
Les chemins et les textes attendus ont été vérifiés dans le projet Android de départ.
Un encart distingue la préparation technique avec l’encadrant du parcours élève.
Les définitions en marge, corrections dépliables et cases fonctionnent sans JavaScript.
Ces cases sont des confirmations manuelles, sans stockage ni validation de l’IDE.
L’accueil conserve une seule entrée pour la section IDE ; la page 1 mène à la page 2.
La dernière page ne propose pas de lien suivant tant que la suite n’existe pas.

Vérifier dans le navigateur : accueil → IDE 1 → IDE 2 et retour, ancres et clavier,
affichage étroit, lecture des définitions et ouverture des corrections. Le véritable
lancement Android doit être observé avec l’élève et l’encadrant sur leur appareil ;
le repère de texte dans le guide ne le simule pas comme réussi.

## IDE — page 3 : premier bug

`module_ide_debug_view/index.html` accompagne le bouton pédagogique de la version
Android `8a7ed61` : reproduire le crash, filtrer Logcat, rejoindre MainActivity.kt,
comprendre le calcul, remplacer 0 par 4 et vérifier le résultat du clic.
Les indices et la correction sont dans des détails fermés au chargement.
La capture officielle montre une autre app ; l’extrait de trace est explicitement
illustratif et le numéro 62 correspond à la source de départ. Aucun crash réel
n’a été capturé pour le guide. Pas de JavaScript ni de validation automatique ;
les confirmations sont manuelles et sans stockage. L’Android reste inchangé.

Vérifier : navigation IDE 2 ↔ IDE 3, image locale agrandie, ancres, détails au clavier,
petit écran et lecture sans JavaScript. Avec l’encadrant, exécuter le parcours réel
avant/après correction ; un contrôle statique du guide ne valide pas l’appareil.

## IDE — page 4 : partager la correction

`module_ide_share_view/index.html` présente deux parcours alternatifs, dans la même
section IDE : boutons Git d’Android Studio ou terminal intégré. Branche, lecture du
diff, sélection du fichier, commit, push vers origin et PR vers dev du propre fork.
La correction est supposée locale et non commitée au départ ; les autres états
sont à examiner avec l’encadrant. Les exemples ab/… et TON_PSEUDO sont à remplacer.

Les deux parcours sont des détails natifs, utilisables sans JavaScript. Ils ne sont
pas à exécuter successivement. La PR utilise l’intégration GitHub si disponible,
sinon le navigateur ; Git seul ne crée pas de PR. Pas de GitHub CLI imposée, de
fusion demandée ou de modification automatique de l’app, du Git ou du compte.
Les commandes doivent être exécutées par l’élève, une à une, dans son clone.

Vérifier les liens IDE 3 ↔ IDE 4, la lecture au clavier des parcours, les notes sur
mobile et les exemples depuis un vrai fork d’exercice. Le guide ne vérifie ni
l’authentification, ni le push, ni l’existence de la PR. Les menus sont dépendants
de la version d’Android Studio ; les références IntelliJ décrivent la plateforme.

## Code — page 1 : variables et types

`module_code_variables_view/index.html` introduit les variables par l’image de la
boîte nommée : nom, type autorisé, valeur. Les déclarations utilisent uniquement
val et les types explicites String, Int, Double et Boolean. Les noms sont anglais,
les traductions dans le cours et les textes destinés au joueur en français.
Le nommage est illustré par plusieurs rôles possibles pour une même valeur.

L’exercice prépare une question, trois choix et une bonne réponse avec des valeurs
simples. Il ne demande pas encore de placement dans MainActivity, de vue Compose,
de score, de comparaison ou de gestion de changement de valeur. L’intégration dans
l’app est reportée aux étapes suivantes. Les exemples de durée et d’indice sont
des données, sans comportement associé. Pas de références techniques dans le
parcours élève ; références auteur : documentation Kotlin sur les variables,
les types de base et les nombres (https://kotlinlang.org/docs/numbers.html).

Les exercices dépliables et confirmations fonctionnent sans JavaScript. Vérifier
les notes, la boîte illustrée, les détails au clavier et le petit écran.
Le dépôt Android n’est pas modifié par cette page.

## Code — page 2 : fonctions

`module_code_functions_view/index.html` présente une fonction comme une action :
paramètres, corps, résultat, appels, comparaison ==, return, portée et Unit.
Le validateur final reçoit les deux réponses ; l’exemple à une réponse fixée dans
le fichier est distinct et sert à expliquer la portée sans dépendre de l’ordre
des définitions. Les blocs imbriqués et les paramètres sont mentionnés simplement.
Pas de conditions, de score, de var ou de Compose dans cette leçon.

Le validateur seul peut être ajouté au niveau du fichier dans MainActivity.kt par
l’élève. Il n’est pas encore appelé par un bouton. Un programme console complet
est proposé en détail, avec main comme cadre fourni et résultats attendus ;
ne pas le confondre avec le point de départ de l’app Android. Le site n’exécute
rien. Exercices et confirmations sans JavaScript ni stockage.

Sources auteur : https://kotlinlang.org/docs/functions.html et
https://kotlinlang.org/docs/equality.html. Les références restent hors du parcours
élève. Vérifier la navigation variables ↔ fonctions, les détails au clavier, le
petit écran, puis les vrais résultats du programme console avec l’encadrant.

## Code — page 3 : première question Compose

`module_code_compose_view/index.html` fournit le remplacement de WelcomeScreen :
données locales, trois boutons, règle isCorrectAnswer inchangée, action locale
checkAnswer, choix du message par if/else et état de texte. Elle introduit var à
partir du besoin de changer ce message, puis explique remember/mutableStateOf/by.
Pas de score ni de collection. L’état remember n’est pas une sauvegarde durable.
Les imports d’état et du bouton sont détaillés, le validateur doit exister une
seule fois au niveau du fichier. Le guide ne modifie pas le dépôt Android.

Navigation fonctions ↔ Compose, card home à trois pages, exercices et confirmations
sans JavaScript. Le protocole de test réel demande les trois choix et un retour
d’une réponse correcte à une réponse incorrecte. Compiler l’exemple ne confirme
pas son rendu ou le résultat des gestes sur l’appareil.

Sources auteur : https://developer.android.com/develop/ui/compose/state ,
https://developer.android.com/develop/ui/compose/components/button et
https://kotlinlang.org/docs/control-flow.html . Pas de références techniques
supplémentaires imposées dans le parcours élève.

## Code — page 4 : deuxième question

`module_code_second_question_view/index.html` fait réutiliser le validateur et
dupliquer les données/actions/vues de deux questions dans WelcomeScreen. Les
préfixes firstQuestion/secondQuestion rendent les liens explicites et montrent
l’encombrement avant l’introduction des collections. Pas encore de liste, de
modèle, de score ou de navigation entre questions : les deux groupes s’affichent
sur le même écran avec deux états de message indépendants. La portée est rappelée
sur les noms et variables locales des deux actions.

Un bloc complet de comparaison est dépliable. Les imports rememberScrollState et
verticalScroll sont fournis pour accéder à tous les boutons sur un petit appareil.
La validation doit exister une seule fois au niveau du fichier. Les tests manuels
visent les six choix, les transitions et l’indépendance des messages.

Les liens Compose ↔ deuxième question et le badge home sont mis à jour. Aucun
JavaScript requis ni modification du dépôt Android. Source auteur pour le cadre
de défilement : https://developer.android.com/develop/ui/compose/touch-input/scroll/scroll-modifiers .

## Code — page 5 : listes de choix

`module_code_lists_view/index.html` remplace les trois variables de choix par
List<String> et les trois boutons par un for typé. Ordre, élément, indice à partir
de zéro, size, listOf et portée de choice sont introduits. Les deux questions,
leurs états, actions et le validateur sont conservés. Pas de Map, de classe, de
modèle de question ni de mutation de liste pendant l’exécution.

L’exercice ajoute Logcat à la première liste puis déplace Git en dernier ; aucun
bouton ni action ne doit être recopié et l’égalité de textes doit rester valide.
Le programme complet est repliable et le protocole contrôle aussi l’indépendance
des messages. Les listes sont utilisées en lecture ; le cours ne confond pas
interface en lecture seule et immutabilité universelle.

Liens deuxième question ↔ listes et badge home à cinq pages. Pas de JavaScript ni
de modification du dépôt Android. Sources auteur :
https://kotlinlang.org/docs/collections-overview.html et
https://kotlinlang.org/docs/control-flow.html#for-loops .

## Code — page 6 : modèle Question

`module_code_question_model_view/index.html` introduit une classe, une instance,
les propriétés et le constructeur via data class Question(text, choices,
correctAnswer). Les arguments nommés et l’accès par point sont expliqués.
List<Question> utilise le concept de liste déjà vu ; le corps fourni de
QuestionView réutilise l’affichage et l’action locale. Tout reste dans MainActivity.
Le validateur reste unique et inchangé ; pas de presenter, interface, score,
héritage ou fichiers supplémentaires dans cette étape.

remember(question) conserve un message par appel et le réinitialise si la question
reçue change. Le cours garde un ordre fixe pendant l’exécution ; il n’introduit pas
le déplacement dynamique des éléments ni la persistance des réponses. Le modèle
ne valide pas encore la cohérence d’une réponse avec ses choix, ce qui est explicite.

Deux questions de départ et deux exemples supplémentaires sont fournis pour
vérifier que l’ajout se fait dans les données et la liste, sans copier la vue.
Les tests réels doivent contrôler les réponses et les messages indépendants.
Navigation listes ↔ modèle et badge home à six pages ; aucun JS requis.
Sources auteur : https://kotlinlang.org/docs/data-classes.html et
https://kotlinlang.org/docs/classes.html . Le guide ne modifie pas l’app Android.

## Code — page 7 : premier presenter

`module_code_presenter_view/index.html` déplace la règle de validation dans une
classe Kotlin ordinaire QuizPresenter, sans état. Une instance créée explicitement
dans WelcomeScreen avec remember est transmise à QuestionView. La vue conserve
son état de message et le if qui traduit un résultat en texte ; la règle de
correction dépend uniquement de Question et du choix reçu. Pas d’interface, de
score, d’injection de dépendances par framework ou de nouvelle navigation.

Le parcours déplace Question vers Question.kt et ajoute QuizPresenter.kt à côté
de MainActivity.kt dans le même package. Il demande de supprimer les anciennes
déclarations après migration des appels. Les deux fichiers complets et les vues
sont fournis ; le cadre WelcomeScreen garde deux questions mais les élèves qui
en ont quatre conservent leurs données. La même instance sans état peut vérifier
toutes les questions. Test réel : réponses correctes/incorrectes, indépendance
des messages et explication des rôles.

Navigation modèle ↔ presenter et badge home à sept pages. Pas de JavaScript.
Sources auteur : https://kotlinlang.org/docs/classes.html ,
https://kotlinlang.org/docs/packages.html et
https://developer.android.com/develop/ui/compose/state . Le guide ne modifie
pas le dépôt Android.

## Code — page 8 : faire avancer le quiz

`module_code_quiz_progression_view/index.html` ajoute une progression sans score.
QuizPresenter reçoit List<Question>, garde un indice et un drapeau de réponse
privés, propose submitAnswer et garde isCorrectAnswer comme règle indépendante.
Une réponse incorrecte permet aussi d’avancer ; plusieurs choix restent possibles
avant le passage. goToNextQuestion ne fait rien sans réponse et remet le drapeau
à false, ce qui empêche un deuxième appel immédiat de sauter une question.

getCurrentQuestion a comme précondition !isFinished. L’UI choisit la fin avant
de lire la question : liste vide et dernière transition sont couvertes par ce
protocole. L’indice final vaut size et ne doit pas être utilisé en accès de liste.
La vue relit explicitement indice/statut après l’action et les stocke dans l’état
Compose. L’indice de question fait réinitialiser les messages même pour deux
questions identiques. Callback () -> Unit, enabled et private sont définis.
Pas de flux réactif implicite, interface, score, recommencement ou persistance.

Les deux vues et le presenter complet sont fournis. Question.kt est inchangé.
Navigation presenter ↔ progression et badge home à huit pages. Vérifier les
transitions, la remise à zéro des messages, l’activation après toute réponse et
la fin sur appareil. Le guide ne modifie pas le dépôt Android et n’exécute rien.
Sources auteur : https://kotlinlang.org/docs/visibility-modifiers.html ,
https://kotlinlang.org/docs/lambdas.html et
https://developer.android.com/develop/ui/compose/state .

## Code — page 9 : score et recommencement

`module_code_score_view/index.html` ajoute un point par bonne première réponse.
Contrairement à la page 8, le premier choix devient définitif, incorrect ou non.
Le presenter conserve son résultat et renvoie ce résultat sans recompter si
submitAnswer est rappelée. Les boutons se désactivent aussi côté vue. Le message
incorrect devient « Réponse incorrecte. » au lieu de proposer de réessayer.

Score privé, getScore, copie affichée dans un état Compose et callback
onAnswerSubmitted pour relire après l’action. Le score final est affiché sur le
nombre total de questions (une barre de texte, aucune division). restart remet
indice, drapeau de réponse, résultat courant et score à zéro ; la vue relit ses
trois informations. Le bouton n’apparaît qu’à la fin. Pas de persistance ni de
nouvelle architecture. Le cas vide reste terminé avec 0 / 0.

Le protocole manuel obtient 3 / 4 puis vérifie une deuxième partie. Le code
complet du presenter et des deux vues est fourni. Question.kt ne change pas.
Navigation progression ↔ score et badge home à neuf pages. Aucun JS requis et
aucune modification du dépôt Android. La suite prévue : visibilité, contrats et
interfaces, responsabilités/architecture, puis découverte des coding agents.

## Code — page 10 : visibilité private/public

`module_code_visibility_view/index.html` distingue private dans une classe,
private au niveau du fichier, public par défaut, portée locale et val/var. Les
exemples partent du score privé, des méthodes appelées par la vue et de la
comparaison devenue un détail de submitAnswer. Pas de protected/internal ni
d’interface introduits ici. Le mot public ne concerne pas le partage GitHub.

L’exercice rend QuizPresenter.isCorrectAnswer privée, écrit public sur getScore
pour montrer l’équivalence et rend QuestionView privée au fichier MainActivity.
Le reste des appels et les règles de score restent inchangés. Une expérience
d’accès interdit doit être annulée avant compilation. L’exemple formatScore sert
seulement à expliquer la visibilité de fichier, sans nouveau fichier app imposé.

Les blocs complets du presenter et de QuestionView sont fournis. WelcomeScreen
est celui de la page précédente. Navigation score ↔ visibilité et badge home à
dix pages. Aucun JavaScript requis, aucune modification du dépôt Android.
Source auteur : https://kotlinlang.org/docs/visibility-modifiers.html .
Validation : compilation du code autorisé, refus des accès privés et maintien du
comportement du quiz ; le rendu et la manipulation restent à contrôler sur appareil.
