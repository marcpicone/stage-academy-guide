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
  module_code_contracts_view/
    index.html                 # QuizContract, implémentation et attentes
    module_code_contracts_view.css
  module_code_architecture_view/
    index.html                 # Lecture des rôles, MVP, MVVM et fichiers plats
    module_code_architecture_view.css
  module_code_data_lifecycle_view/
    index.html                 # Mémoire, vue, activité, processus et persistance
    module_code_data_lifecycle_view.css
  module_code_async_view/
    index.html                 # Synchrone/asynchrone, coroutines et Flow
    module_code_async_view.css
  module_agents_intro_view/
    index.html                 # LLM, outils, contexte, demande et relecture
    module_agents_intro_view.css
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

## Code — page 11 : contrats et interfaces

`module_code_contracts_view/index.html` introduit QuizContract (huit opérations
utilisées par la vue), : QuizContract et override. La vue et la variable assemblée
dans WelcomeScreen utilisent le type interface ; la création reste explicitement
QuizPresenter(questions). Les propriétés et le helper de comparaison restent
privés, QuestionView reste privée au fichier. Aucun changement de comportement.

Les conditions/comportements complètent les signatures : getCurrentQuestion exige
un quiz non terminé, submitAnswer ne recompte pas, goToNextQuestion exige une
réponse, restart remet tout à zéro. Le compilateur ne prouve pas ces promesses.
Les exercices invalides retirent une méthode ou override, puis doivent être
restaurés. Une interface seule n’est pas construite avec QuizContract().
Pas d’interface supplémentaire imposée aux autres classes ni de nouvelle
implémentation de production ; une substitution future devra respecter les règles.

QuizContract.kt est le seul fichier ajouté au parcours app. Le contrat, la classe
et les deux vues sont fournis. Navigation visibilité ↔ contrats et home à onze
pages. Aucun JS requis et aucune modification du dépôt Android. Source auteur :
https://kotlinlang.org/docs/interfaces.html . QA : compilation des exemples,
refus des implémentations incomplètes et vérification des règles via le contrat.

## Code — page 12 : architecture

`module_code_architecture_view/index.html` prend du recul sur la version construite
en suivant le guide (et non sur l’état du dépôt Android de départ). Responsabilités
des quatre fichiers, trajet clic/règle/état/affichage, MVP et sa variante vue passive,
MVVM et état de présentation, distinction du rôle ViewModel avec la classe Jetpack.
Notre quiz est décrit comme une séparation pédagogique avec presenter et relecture
explicite, sans prétendre être toutes les variantes de MVP. Le contrat est un type
utilisé pour appeler l’objet, pas un objet intermédiaire d’exécution.

L’organisation plate est définie comme notre choix de rangement de fichiers et
peut coexister avec une séparation MVP ou MVVM. Aucun nouveau code Android, aucune
migration MVVM ou bibliothèque imposée. Schémas HTML sémantiques simplifiés, table
comparative défilable au clavier, cinq exercices de lecture et confirmations
sans JavaScript. Les notes restent en marge sur ordinateur et sous le texte sur
petit écran. Navigation contrats ↔ architecture et badge home à douze pages.

Sources auteur (les références techniques ne sont pas imposées à l’élève) :
- https://martinfowler.com/eaaDev/PassiveScreen.html — variante Passive View, pas définition universelle de MVP.
- https://learn.microsoft.com/en-us/dotnet/architecture/maui/mvvm — responsabilités MVVM, source .NET pour le principe général.
- https://developer.android.com/topic/architecture — responsabilités et frontières Android.
- https://developer.android.com/topic/libraries/architecture/viewmodel — classe Jetpack et durée de vie, pas persistance automatique après arrêt du processus.

Validation : ressources/ancres, cohérence avec les blocs du quiz et distinction
des axes de comparaison. Aucun nouveau comportement à compiler. Vérifier le
rendu, les schémas, les détails au clavier et le tableau sur petit écran.

## Code — page 13 : données et durée de vie

`module_code_data_lifecycle_view/index.html` distingue portée et durée de vie,
variables locales, remember, instance du presenter, activité, processus et
stockage persistant. DataStore est présenté comme un outil sur disque, sans
implémentation de sauvegarde ou meilleur score dans l’app. Un objet partagé à
l’échelle de l’application ne survit pas à l’arrêt du processus. Manager/factory/
graph restent un repère facultatif pour l’encadrant, sans code ajouté.

Les expériences sont manuelles et accompagnées : passage de question, restart,
arrière-plan, rotation et arrêt forcé sans désinstallation/effacement. Aucune
observation appareil n’est simulée comme accomplie. La rotation est conditionnée
à une recréation réelle. Un log optionnel dans onCreate aide à observer celle-ci
sans prouver une mort de processus ; la page rappelle de retirer is:crash.
Le guide ne pilote ni l’appareil ni le dépôt Android.

Navigation architecture ↔ données, home à treize pages. Pas de JavaScript ou
d’introduction aux tests automatisés. Asynchrone/coroutines/Flow restent la suite
prévue, sans lien vers une page inexistante. Sources auteur :
- https://developer.android.com/develop/ui/compose/lifecycle
- https://developer.android.com/guide/components/activities/activity-lifecycle
- https://developer.android.com/guide/components/activities/process-lifecycle
- https://developer.android.com/topic/libraries/architecture/saving-states
- https://developer.android.com/topic/libraries/architecture/datastore
- https://developer.android.com/training/data-storage
- https://developer.android.com/reference/android/util/Log

## Code — page 14 : coroutines et Flow

`module_code_async_view/index.html` distingue synchrone/asynchrone, thread,
coroutine, suspend, delay et Flow/emit/collect. Une lecture suspendable fictive
à résultat unique sert à comparer ; la démo utilise un flow froid fini qui émet
2 puis 4 après deux attentes de 1500 ms. Ce sont des valeurs contrôlées, sans
DataStore, fichier, réseau, meilleur score réel ou écriture persistante.

LaunchedEffect(Unit) lance la collecte dans un if piloté par un bouton. Retirer
le bloc annule la coroutine ; réafficher recommence la source. La page distingue
ce cycle de composition du passage de l’app à l’arrière-plan et signale qu’une
observation réelle doit aussi choisir son comportement de cycle de vie Android.
Suspend ne déplace pas le travail vers un autre thread, une annulation est
coopérative et une coroutine lancée n’est pas une garantie de sauvegarde.

Le cadre AsyncBestScoreDemo s’ajoute dans le Column principal de WelcomeScreen.
Les imports LaunchedEffect et kotlinx.coroutines sont fournis ; les bibliothèques
sont accessibles via la base Compose actuelle, sans ajout de version au hasard.
Le presenter, son contrat et le score restent inchangés. Pas de cours de tests
automatisés : le parcours propose une observation sur appareil.

Navigation données ↔ asynchrone et home à quatorze pages. Aucun JS requis.
Sources auteur : https://kotlinlang.org/docs/coroutines-basics.html ,
https://kotlinlang.org/docs/coroutines-flow.html ,
https://developer.android.com/develop/ui/compose/side-effects et
https://developer.android.com/topic/libraries/architecture/coroutines .
Le guide ne modifie pas le dépôt Android et ne pilote pas l’appareil.

## LLM et agents — page 1 : apprendre à demander

`module_agents_intro_view/index.html` commence par le prompt et la génération de
texte/images. Le chemin du dossier est conservé pour préserver l’URL déjà ouverte.
GIGO est présenté comme un repère, pas une garantie : une demande précise aide,
mais le résultat doit encore être relu. Quatre questions guident les demandes :
résultat, public/but, contraintes utiles, forme de réponse.

Exemples avant/après pour les textes d’accueil et pour une maquette ; un prompt
d’asset séparé montre la différence avec un écran complet. Tous les exemples sont
rédigés pour le cours, aucun texte ou visuel n’est généré par le guide. Pas de
service connecté, agent, code/diff à lire, autorisation de commande ou publication
introduits sur cette page. Les zones de brouillon sont des textarea natifs sans
envoi ni stockage ; l’élève doit copier son texte s’il veut le conserver.

Progression demandée :
1. Prompt et demandes de texte/image (cette page).
2. Concevoir/améliorer l’accueil du quiz avec ces outils.
3. Préparer l’écran de question dans le même style.
4. Passer à l’usage d’un coding agent via une application desktop.

Les pages de design de l’accueil et de la question sont créées et liées ; la première étape coding agent est maintenant créée. Le modèle, les outils,
la lecture de diff et l’exécution seront approfondis à l’étape coding agent ; ne
pas y passer directement depuis l’introduction. Une maquette reste une référence
visuelle et ne crée pas une interface Android fonctionnelle. Le dépôt Android
reste inchangé. L’entrée home et le lien depuis la page asynchrone sont alignés.

Sources auteur :
- https://platform.claude.com/docs/en/build-with-claude/prompt-engineering/claude-prompting-best-practices — clarté, contexte et forme du résultat, sans recommandations de modèles.
- https://docs.cloud.google.com/vertex-ai/generative-ai/docs/image/img-gen-prompt-guide — sujet, contexte, style et itérations pour l’image, sans configuration de service imposée.

Vérifier les liens, notes en marge, détails et brouillons au clavier et sur petit
écran. Aucun JavaScript requis et aucune génération effectuée par le site.

## LLM et agents — page 2 : concevoir l’accueil

`module_agents_home_design_view/index.html` fait choisir les textes, demander une
maquette, comparer deux versions et préparer un document de design. Le croquis
HTML/CSS est explicitement illustratif ; son bouton dessiné ne déclenche rien.
Les prompts sont des exemples rédigés, aucune génération n’est exécutée par le site.
L’illustration séparée est distinguée de la maquette entière. L’exercice conserve
les textes et références dans un dossier choisi avec l’encadrant, sans créer les
fichiers automatiquement. Le textarea et les cases ne sauvegardent pas la progression.

Home à deux pages, entrée unique par l’introduction ; navigation intro → accueil.
La page de question est maintenant liée ; l’utilisation desktop d’un coding agent est la page suivante.
Aucun changement Android, navigation du quiz ou installation de service sur cette étape.

## LLM et agents — page 3 : concevoir l’écran de question

`module_agents_question_design_view/` réutilise la référence d’accueil, ses couleurs,
formes et style de textes. L’élève prépare une maquette avant réponse, les états
correct/incorrect, puis un document de design et les références associées.
Les règles de la page score sont conservées : première réponse définitive, choix
désactivés après réponse, +1 si correct, suite disponible après réponse. Aucun
surlignage du choix cliqué ou dévoilement de solution n’est requis. Croquis HTML/CSS
explicitement illustratif ; prompts rédigés, sans génération automatique ni JS.

La lecture sur petit écran et un énoncé plus long font partie des critères de choix.
Le textarea et les cases restent manuels, sans stockage de progression. Home à trois
pages LLM, entrée unique par l’introduction et navigation accueil ↔ question.
La page suivante introduit l’usage desktop d’un coding agent.
Aucun fichier Android ni comportement du quiz n’est modifié par cette leçon.

## LLM et agents — page 4 : coding agent desktop

`module_agents_desktop_view/` introduit agent/outils, sélection du clone Android
local, demande de lecture, références accessibles, modification limitée de l’accueil,
lecture du diff et observation du résultat. Codex sert d’exemple sans procédure
figée d’installation, de compte ou de menus. L’encadrant prépare l’environnement.
Le quiz existant est un prérequis ; le guide ne prétend pas que le dépôt starter
Android a reçu les modifications des leçons. Aucun fichier Android modifié ici.

L’exercice demande à l’agent de créer l’accueil et son bouton Commencer vers le
quiz existant, sans refaire les questions, les règles ou l’architecture. Pas de
bibliothèque nouvelle, commit/push automatique ou cours de tests automatisés.
Le compte rendu distingue fichiers écrits, compilation et observation sur appareil.
Le diff illustratif n’est pas un résultat réel ; le panneau de revue inclut aussi
les modifications préexistantes. Brouillon sans stockage et cases manuelles.
Home à quatre pages LLM, navigation question ↔ agent, aucun lien futur anticipé.

Sources officielles consultées pour cette page :
- https://learn.chatgpt.com/docs/projects — accès aux dossiers de projet locaux.
- https://learn.chatgpt.com/docs/environments/modes — travail dans le dossier local.
- https://learn.chatgpt.com/docs/code-review — panneau de revue et état Git.

## LLM et agents — page 5 : AGENTS.md et dossiers d’outillage

`module_agents_project_instructions_view/` distingue tâche courante et consignes
durables, puis fait écrire un AGENTS.md court à la racine du clone Android de
l’élève. Un fichier existant est relu et adapté, jamais remplacé aveuglément.
L’exemple suit le quiz réalisé pendant le cours, pas le dépôt starter inchangé.
Les règles restent dans le presenter ; les instructions ne changent pas l’app.

.agents/skills/ et SKILL.md sont présentés comme procédures réutilisables ;
.codex/config.toml comme réglages Codex (projets fiables). Aucun skill, dossier
ou réglage réel n’est créé par le guide. Un seul fichier de consignes est demandé
à l’élève. Le prompt de vérification demande une lecture explicite dans une nouvelle
session ; une reformulation correcte ne garantit pas le respect futur des règles.

L’application concrète est le design des questions dans le style de l’accueil,
avec références fournies, revue du diff et observation sur appareil. Le guide
reste statique, sans génération ni modification Android. Brouillon sans stockage.
Home à cinq pages LLM, navigation desktop ↔ consignes. Aucun lien futur anticipé.

Sources officielles consultées :
- https://learn.chatgpt.com/docs/agent-configuration/agents-md
- https://learn.chatgpt.com/docs/build-skills
- https://learn.chatgpt.com/docs/config-file/config-basic

## LLM et agents — page 6 : résultat, exercice plus autonome

`module_agents_result_design_view/` fournit une mission et des critères sans
prompt complet, solution Kotlin ni maquette à recopier. L’élève prépare les textes,
la référence et ses propres demandes, affine un point puis guide la réalisation.
Indices natifs fermés par défaut et liens vers les méthodes précédentes.
Les données d’une maquette sont distinguées du score calculé pour la partie.
Pas de pourcentage, classement ou stockage ajouté. Le recommencement existant
retourne directement au quiz, sans ajout de retour vers l’accueil.

Les parcours manuels couvrent zéro, toutes et une partie des bonnes réponses
(0/4, 4/4, 2/4 pour quatre questions), suivis d’un recommencement. Critères de
lisibilité sur appareil et compte rendu attendu/observé, sans exécution par le guide.
Les brouillons et cases ne sauvegardent rien. Un fichier result-design.txt et les
références sont conservés par l’élève dans son dossier de design.

Home à six pages LLM, navigation consignes ↔ résultat ; aucun lien futur anticipé.
Aucun changement au dépôt Android, aucun agent ou service lancé par cette page.

## Bilan : expliquer son application

`module_review_view/` conclut le parcours sans nouvelle notion : démonstration
prévue/observée, trajet d’un clic, repères de code, difficulté comprise, trace Git,
travail avec l’agent et bilan personnel. Les noms du code des leçons sont des
repères à adapter au clone réel. Les observations de cycle de vie et Flow sont
accessibles en aide facultative, sans prétendre qu’une sauvegarde existe.

L’élève présente les preuves disponibles et distingue maquette, modification,
compilation et observation sur appareil. Les étapes inachevées restent explicites.
Les notes sont des textarea sans envoi ni sauvegarde ; les cases sont personnelles.
Ni examen automatique ni nouveau code ou comportement Android demandé.

Entrée home distincte « 08 / Présenter », navigation résultat ↔ bilan ; dernier
lien vers le parcours, sans faux lien suivant. Le guide ne pilote aucune app.

## Pour aller plus loin — page 1 : animations

`module_further_animation_view/` ajoute une extension facultative après le bilan.
AnimatedVisibility fait apparaître le résultat de QuestionView avec fadeIn/tween,
piloté par canGoToNextQuestion. Le texte initial reste visible avant réponse.
Les imports et le remplacement ciblé sont fournis pour la version contrats ;
le code issu des agents est à adapter sans nouveau calcul ou validation.

Le score et les boutons réagissent sans attendre l’animation. Le passage à la
question suivante réinitialise l’état local ; pas de garantie d’exit si le parent
est retiré. Comparaison 300/900 ms, réponse correcte/incorrecte et recommencement.
Illustration HTML/CSS distincte de Compose, case native, mouvement réduit respecté.
Aucun JS, aucun nouveau package, aucun fichier Android modifié par le guide.
Brouillon sans stockage. Navigation bilan ↔ animation et entrée home « 09 / Explorer ».
Collections, grilles, pager, images et manifeste restent les extensions prévues,
sans liens anticipés. Source : documentation Android des animations Compose.

## Pour aller plus loin — page 2 : LazyColumn et LazyRow

`module_further_lazy_lists_view/` crée une révision en lecture seule accessible
depuis le résultat. ReviewScreen reçoit la liste existante et onBack, les cartes
affichent énoncé/bonne réponse. Choix Column/Row versus listes lazy, items, hauteur
bornée et comparaison verticale/horizontale. Pas de téléchargement/pagination.
Pas de benchmark prétendu à quatre questions, pas d’item state ou de clés ajoutés.

L’intégration fournie se place avant la Column défilante du quiz : presenter et
états conservés avant le branchement ; bouton dans isQuizFinished, retour sans
restart. LazyColumn occupe la hauteur restante, sans parent vertical non borné.
La variante LazyRow remplace le seul bloc de liste, avec carte de largeur fournie.
Lecture longue à vérifier ; les navigations des exercices agents sont à adapter.

Home à deux extensions, navigation animation ↔ listes. Aucun changement Android
par le guide, aucun service ou JS. Brouillons manuels sans sauvegarde. Grille et
pager restent à venir sans lien anticipé. Source : documentation Android des listes.

## Pour aller plus loin — page 3 : grilles lazy

`module_further_lazy_grid_view/` réutilise ReviewScreen/ReviewCard et les questions
sans changement de score. Remplacer le seul bloc de liste par LazyVerticalGrid,
puis comparer Fixed(2) et Adaptive(180.dp / 240.dp). Imports lazy.grid.items,
hauteur restante bornée et retrait de la largeur fixe de la variante LazyRow.
LazyHorizontalGrid est identifié sans deuxième implémentation imposée.

Schéma HTML/CSS interactif explicitement distinct de Compose. Lecture longue,
petit/grand écran, dernière ligne et retour au résultat à observer manuellement.
Les changements de configuration ne garantissent pas la conservation d’état ;
aucune sauvegarde ajoutée. La grille peut être abandonnée au profit d’une liste.
Pas de nouveau modèle, thème ou fonctionnalité de jeu. Notes sans stockage.
Home à trois extensions et navigation listes ↔ grille, sans lien futur anticipé.
Source : documentation Android des listes et grilles Compose.

## Pour aller plus loin — page 4 : pager de révision

`module_further_pager_view/` remplace seulement ReviewScreen par HorizontalPager.
Mêmes données et ReviewCard, accès après résultat et retour sans score modifié.
Différence avec LazyRow et ancien nom ViewPager explicitée ; VerticalPager cité
sans variante imposée. PagerState distinct de l’indice du presenter ; currentPage
sert au repère et peut évoluer pendant le geste. Boutons bornés et désactivés
pendant le défilement, animateScrollToPage via rememberCoroutineScope/launch.

Chaque page peut défiler verticalement dans une hauteur bornée pour les énoncés
longs. Liste vide explicite, une question et extrémités à observer. Aucune
persistance de position promise après retrait de la vue. Notes sans stockage.
Home à quatre extensions, navigation grille ↔ pager ; pas de nouveau package ou
changement Android dans le guide. Source : documentation Android Pager in Compose.

## Pour aller plus loin — page 5 : packages _view et navigation

`module_further_app_navigation_view/` adopte la convention d’équipe home_view /
profile_view pour regrouper chaque MVP. Déplacer le parcours existant et ses helpers,
QuizContract et QuizPresenter ; Question reste hors des groupes de vue. MainActivity
assemble un Scaffold, HorizontalPager et NavigationBar avec une seule position.
Icônes vectorielles fournies en XML, sans dépendance d’icônes supplémentaire.
ProfileContract/Presenter vides préparent le second MVP, ProfileView blanche sans action.

Deux pages conservées composées via beyondViewportPageCount=1 pour garder les
remember existants pendant le changement d’onglet. Choix limité à deux espaces,
aucune persistance ou survie à recréation promise. Ne pas lancer la caméra depuis
une simple composition ; l’espace Profil peut être composé hors écran. Observer
score/message/boutons après retour et interactions avec le pager de révision.
Extraits à adapter au clone réel, imports/package/visibilité/prévisualisations inclus
au déplacement. Aucun fichier Android ni AGENTS.md du clone modifié par le guide.
Home à cinq extensions, navigation pager ↔ deux espaces. Prise de photo puis édition et sauvegarde du profil à venir.

## Pour aller plus loin — page 6 : caméra depuis Profil

`module_further_camera_view/` présente manifeste/permission runtime, clic volontaire,
aperçu intégré CameraX, capture en cache et affichage. L’intégration Android complète
est une tâche guidée à réaliser avec l’agent dans le clone, pas un bloc exécutable
fourni par le site. Aucune version CameraX arbitraire : vérifier les dépendances
compatibles au moment de réaliser la tâche. Manifeste, appel isActive et contrat /
presenter sont des extraits partiels explicitement situés, pas une app complète.

Le profil actif dans le pager ne suffit pas : demande volontaire, permission et
cycle de vie sont distingués. Libération à la sortie, refus, accès modifié depuis
les paramètres et initialisation tardive sont des critères de l’intégration.
ProfilePresenter garde un chemin nullable en mémoire ; la vue relit le résultat.
Cache privé temporaire, aucune galerie ou sauvegarde durable de profil promise.

Observations accompagnées sur appareil/émulateur avec cas non reproduits laissés
non vérifiés. Le site ne demande aucune permission ni n’exécute caméra ou agent.
Notes sans stockage, home à six extensions, navigation deux espaces ↔ caméra.
Sources : docs Android manifeste, permissions, CameraX aperçu/capture/architecture
et fichiers spécifiques à l’app, liées dans la page.

## Pour aller plus loin — page 7 : profil local persistant

`module_further_profile_storage_view/` distingue brouillon, cache, image privée
persistante et petites métadonnées Preferences DataStore. Nom obligatoire après
trim, photo facultative, sauvegarde explicite et annulation du brouillon.
PlayerProfile et ProfileStorage restent hors des packages _view ; injection
explicite au presenter sans graph. Les extraits sont modèle/contrat, pas une
implémentation DataStore complète ; intégration guidée à réaliser par l’agent.

Une photo candidate n’écrase pas la précédente : nouveau fichier, métadonnées,
puis nettoyage après réussite. DataStore et copie de fichier ne sont pas une
transaction unique. Gestion erreur/annulation sans faux succès, lecture initiale
sans écraser l’édition et image absente avec remplacement. Une instance DataStore
par fichier/processus. Aucun cloud, compte ou permission de stockage ajouté.

Validation manuelle après véritable arrêt/relance, et cache vidé si disponible ;
ne pas désinstaller/effacer les données pour prouver la persistance. Les cas
non reproduits restent non vérifiés. Le score de partie n’est pas sauvegardé
par cette tâche. Home à sept extensions, navigation caméra ↔ profil persistant.
Notes sans stockage ; le site ne crée ni profil ni données Android. Sources :
documentation Android DataStore et fichiers spécifiques à l’app.

## Accueil — parcours principal et extensions

La home distingue 27 pages principales (Git 2, IDE 4, code 14, LLM 6, bilan 1)
et 8 extensions facultatives. Les anciennes cartes Actions & état, Debug & Logcat
et Responsabilités ne sont plus « À venir » : ces notions sont déjà traitées dans
les sections existantes. Une entrée par section, sans raccourci vers Git page 2.

Les quatorze pages de code sont présentées en cinq étapes de 2/4/3/3/2 pages,
sans modifier l’ordre, les URL ou le contenu des leçons. Les extensions sont
regroupées visuellement en animation, collections et profil/caméra/persistance ;
le point d’entrée reste leur première page, avec les prérequis explicités.
Ancres locales parcours/extensions, pas de progression enregistrée ou de nouvelle
installation requise. Les compteurs décrivent les pages, pas les exercices réalisés.

## Pour aller plus loin — page 8 : affichage des images

`module_further_images_view/` compare ressource drawable et fichier photo, puis
Fit/Crop, taille, proportions, découpe ronde et description accessible. Schéma SVG
original explicitement illustratif et rendu en CSS, sans photo personnelle.
ProfilePhoto reçoit un Painter déjà préparé ; il ne charge pas de fichier. La vue
parente conserve les états absence/chargement/erreur et l’intégration existante.
Aucun nouveau chargeur, package, accès caméra ou changement de sauvegarde imposé.
Le composant fourni est un exemple de présentation à adapter, avec imports.
Home à 27 pages principales et 8 extensions ; navigation profil ↔ images.
Notes sans stockage, pas de lecture des fichiers Android par le site. Sources :
documentation Android des images (chargement/personnalisation/optimisation).

## Relecture de l’enchaînement — 13 novembre 2026

Relecture des 35 leçons, du fork au composant d’image, avec corrections de
transition dans 14 pages. Les consignes précisent désormais la reprise du dev
corrigé après la première PR, la conservation des questions personnalisées lors
des changements de structure, la différence entre le calcul du premier exercice
et le score du quiz, le retrait de la démo asynchrone et la mise à jour des appels
lors du déplacement de WelcomeScreen vers home_view. Les annonces de la suite
et le risque de redéclarer ProfilePhoto après le travail avec l’agent sont clarifiés.

Vérifications techniques réalisées sur une copie temporaire du projet Android :

- Rejeu cumulatif avec 26 étapes compilées par `./gradlew --offline :app:compileDebugKotlin`,
  en faisant évoluer les mêmes fichiers de la correction initiale à l’affichage
  d’image. Les changements de disposition et le déplacement de packages sont inclus.
- Exécution de l’exemple console des fonctions et contrôle de la logique du
  presenter : scores 0/4, 3/4 et 4/4, première réponse définitive, absence de double
  comptage, progression, fin, recommencement et liste vide.
- Contrôle des 36 pages HTML : cibles locales, fragments, identifiants et références
  des libellés ; chaîne des 35 leçons et réciprocité des liens précédent/suivant.
  Analyse XML des SVG et vérification syntaxique des trois fichiers JavaScript.

Ces vérifications ne valident pas une application complète produite par un élève.
Les designs réalisés avec l’agent peuvent varier. CameraX et DataStore restent des
intégrations guidées à réaliser dans le clone : seuls leurs extraits de modèle et
contrat ont été compilés ici. Aucun fonctionnement caméra, sauvegarde ou cycle de
vie sur appareil n’est attesté par cette relecture. Le rendu dans un navigateur,
la navigation au clavier et l’exécution sous Windows restent à vérifier.
Le dépôt Android de départ n’a pas été modifié par ce rejeu.


## Pour aller plus loin — page 9 : comprendre Gradle

`module_further_gradle_view/` relie le code à l’APK : construction et compilation,
sync/build/run, fichiers racine et module app, dépendances/imports, plugins et
Gradle Wrapper. Exercice : lire les tâches, lancer `:app:assembleDebug` depuis la
racine Android et retrouver `app/build/outputs/apk/debug/app-debug.apk`.
Commandes PowerShell et macOS/Linux séparées, adaptation Git Bash expliquée.

Le clone doit déjà se construire dans l’IDE. Aucune version ou dépendance n’est
modifiée ; ni caméra ni profil requis. Les états UP-TO-DATE/FROM-CACHE, un ancien
APK après échec, le JDK du terminal et les besoins de téléchargement sont expliqués.
Le Wrapper reste versionné et les sorties build ignorées. L’exercice ne lance pas
l’appareil et ne publie rien. Notes sans stockage, page sans JavaScript.
Accueil à 27 pages principales et 9 extensions, navigation images ↔ Gradle.
Sources : documentations officielles Android build/CLI et Gradle Wrapper/tasks.
Les prochaines pages Desktop, Python et ressources ne sont pas créées ici ;
l’angle Python doit être rediscuté avant réalisation.


Vérifications de cette page : lecture des tâches avec `projects :app:tasks --all`
et construction `:app:assembleDebug` réussies sur la copie temporaire du quiz,
avec `--offline` uniquement parce que le cache de vérification était déjà prêt.
APK présent au chemin enseigné, archive lisible avec manifeste et code DEX.
Contrôles statiques : 37 pages HTML et chaîne de 36 leçons valides, liens/ancres
et libellés vérifiés, `git diff --check` sans erreur. Le rendu navigateur, le
clavier et les commandes Windows ne sont pas vérifiés ici ; aucun appareil lancé.


## Pour aller plus loin — page 10 : Compose Desktop

`module_further_desktop_view/` ouvre Kotlin/Compose à une fenêtre d’ordinateur,
dans un projet compagnon distinct du quiz Android. Préparation guidée avec
l’assistant officiel JetBrains, cible Desktop seule et fenêtre générée observée
avant ajout de code. Les emplacements et commandes sont adaptés au modèle réel.

Les extraits fournissent la même fonction isCorrectAnswer que la page fonctions,
un DesktopQuiz à une question et l’assemblage main/application/Window. Package
explicite, séparation du composable commun et du lanceur Desktop. Première réponse
définitive, Réessayer, défilement et retour à l’état initial après relance ; pas de
score, de reprise complète des MVP, de caméra, de stockage ou de module partagé
entre les deux projets. Le code recopié n’est pas synchronisé automatiquement.

Le lancement local ne produit pas un installateur ; les tâches de packaging
Compose sont propres au système compatible. La page ne crée ni projet ni fenêtre,
et les observations de l’élève restent manuelles. Notes sans envoi ni sauvegarde.
Accueil à 27 pages principales et 10 extensions ; navigation Gradle ↔ Desktop.
Sources : documentation officielle Kotlin/JetBrains, générateur, quickstart,
relation Jetpack Compose/Compose Multiplatform et distributions natives.
Python et les ressources restent à traiter séparément ; l’angle Python doit être
rediscuté avec l’utilisateur avant réalisation.


Vérifications de la page Desktop : extraits extraits du HTML puis compilés dans
un projet JVM temporaire avec Kotlin 2.3.21, plugin Compose 1.9.3 et Material 3.
Commande `:desktopApp:compileKotlin :desktopApp:tasks --all` réussie ; tâche run
présente. Les fichiers compilés correspondent aux blocs du guide et la fonction
isCorrectAnswer est identique à celle de la page fonctions. Les versions servent
à cette vérification, pas de versions imposées au projet généré de l’élève.
La configuration de contrôle est un projet JVM minimal, pas un rejeu du générateur.
Contrôles statiques : 38 pages HTML et chaîne des 37 leçons, liens locaux, ancres
et libellés valides ; `git diff --check` sans erreur. Aucune fenêtre Desktop
lancée, aucun installateur produit ; rendu navigateur, clavier, Windows et Linux
non vérifiés ici.


## Pour aller plus loin — page 11 : Codex dans le terminal

`module_further_codex_cli_view/` prolonge la fenêtre à une question par un transfert
guidé du vrai quiz Android vers Desktop. CLI/terminal/prompt et commandes internes
distingués ; installation et accès préparés avec l’encadrant. Vérification de
version, dossier courant, démarrage Codex, /permissions, /status, /diff et /quit.
Les commandes ne sont pas exécutées par la page, qui reste sans JavaScript.

Les projets restent distincts : Android est la référence en lecture, Desktop la
destination. Chemins réels, historique initial et état Git connus, branche de
travail. Lecture des règles puis demande de réalisation séparée. Questions,
progression, score, résultat et recommencement, sans caméra/profil ni deuxième
validation conservée. Les copies ne constituent pas un module de code partagé.
Un chemin inaccessible est signalé, jamais inventé ; --add-dir n’est pas présenté
comme une option de lecture seule. Accès contrôlés dans l’outil, pas par le prompt.

Relecture Git des deux projets et vérification manuelle de la partie, des scores,
du premier choix définitif et de restart. Total adapté au nombre de questions.
La compilation annoncée par l’agent reste distincte des observations en fenêtre.
Notes sans envoi ni stockage. Aucune installation, connexion ou migration réelle
des projets Android/Desktop n’est effectuée par la réalisation du guide.
Home à 27 pages principales et 11 extensions ; navigation Desktop ↔ Codex CLI.
Sources : documentation officielle OpenAI CLI, commandes internes, options et accès.
Python reste à discuter avant réalisation.


Vérifications de la page CLI : documentation officielle OpenAI consultée pour
l’installation, le démarrage, les commandes internes et les droits. CLI locale
0.169.0 : `codex --version` et `codex --help` consultés, sans connexion ni session
agent démarrée pour l’exercice. Le bac à sable a signalé une impossibilité de
créer des alias PATH lors de cette consultation ; version et aide étaient lisibles.
Syntaxe des blocs terminal analysée avec `bash -n`, sans exécuter les chemins
à remplacer. Structure HTML équilibrée, titre principal unique et tokens CSS
valides. Contrôle des 39 pages HTML et de la chaîne des 38 leçons : ressources,
ancres, libellés et précédent/suivant valides ; `git diff --check` sans erreur.
Aucun transfert Android vers Desktop réalisé, aucune installation/connexion ou
fenêtre observée ; rendu navigateur, clavier et exécution Windows non vérifiés.


## Pour aller plus loin — page 12 : Python, bibliothèques et uv

`module_further_python_view/` introduit Python par l’outillage personnel :
bibliothèque standard, écosystème PyPI, rôles de Pillow et uv. Script fourni et
téléchargeable resize_image.py avec métadonnées inline Python/Pillow ; contenu
identique au bloc de code du cours. Installation uv accompagnée par la doc officielle.

Exercice dans un dossier de travail séparé : source PNG, chemin de sortie et
limite en pixels. thumbnail conserve les proportions, ne crée pas d’agrandissement
et produit un PNG RGBA. Refus d’une taille non positive, d’une sortie non PNG,
d’une source/sortie identiques et d’une sortie déjà présente. Les erreurs de
lecture/écriture sont signalées ; aucune image de l’élève n’est lue par le guide.

Syntaxe Python présentée par analogie avec les fonctions/conditions déjà connues,
indentation et snake_case expliqués. Dimensions distinguées du poids du fichier.
uv prépare un environnement et peut télécharger Python/Pillow ; ce n’est pas une
application autonome ni une garantie de dépendances figées sans verrouillage.
Notes sans stockage, aucun JavaScript ou lancement du script depuis le navigateur.
Home à 27 pages principales et 12 extensions, navigation CLI ↔ Python.
Les densités Android et variantes de ressources restent pour la page suivante.


Vérification réelle du script téléchargé via `uv run`, avec uv 0.11.26 et
Pillow 13.0.0 : carré 512×512 vers 256×256, rectangle 800×400 vers 256×128,
petite image 64×64 non agrandie, noms de fichiers avec espaces et limite 128.
PNG RGBA et transparence conservés ; SHA-256 des sources inchangés. Refus et
absence de résultat trompeur vérifiés pour sortie existante, source/sortie
identiques, taille nulle/négative, extension de sortie non PNG et source absente
ou illisible. Aide du script vérifiée. Images synthétiques temporaires uniquement.

Contrôles du guide : téléchargement identique au code affiché, syntaxe Python,
structure HTML et tokens CSS valides ; 40 pages HTML et chaîne des 39 leçons
validées (ressources, liens locaux, ancres, libellés, précédent/suivant).
`git diff --check` sans erreur. Aucun projet Android/Desktop modifié ; rendu
navigateur, clavier et exécution Windows non vérifiés ici. Les densités Android
ne sont ni introduites ni générées par cette première page.


## Pour aller plus loin — page 13 : images et densités Android

`module_further_density_view/` relie pixels, dp et densité à une illustration
d’accueil de 96 dp. Schéma CSS explicitement illustratif, table des cinq variantes
96/144/192/288/384 px, même nom de fichier et une seule référence R.drawable.
Les autres densités existent ; les cinq dossiers sont le périmètre de l’exercice.
Images bitmap distinguées des vectoriels, photos de profil et icônes de lancement.

Le script téléchargeable generate_android_images.py réutilise resize_image.py de
la page précédente ; les deux fichiers doivent être côte à côte dans l’outil.
PNG carré ≥384 px, sortie nouvelle, boucle sur un dictionnaire de tailles.
Génération d’abord dans un dossier séparé, contrôle des fichiers puis copie
accompagnée dans app/src/main/res. Une interruption peut laisser une sortie partielle.
Ajout Image Compose décoratif dans l’accueil réel, règles du quiz inchangées.

ImageMagick facultatif : commande magick avec réduction seulement, proportions
conservées et nouveau nom choisi. Les refus de réécriture du script ne s’y
transfèrent pas ; uv ne fournit pas ce programme externe. subprocess comme piste
pour un autre outillage, sans deuxième implémentation imposée. Pas de JS, de
génération ou de lecture des images de l’élève par le navigateur.
Home à 27 pages principales et 13 extensions ; navigation Python ↔ densités.
Sources : documentation officielle Android ressources/densités/Compose,
Pillow et ImageMagick. Observations sur plusieurs configurations avec l’encadrant,
cas non reproduits explicitement laissés non vérifiés.


Vérifications réelles : exécution des deux scripts téléchargés côte à côte avec
uv/Pillow 13.0.0 sur une image synthétique 512×512. Cinq PNG RGBA de dimensions
96/144/192/288/384, transparence conservée, chemins avec espaces. Refus vérifiés
pour sortie existante et sources petite, rectangulaire, non-PNG, absente ou
illisible, sans création de dossier de résultat pour ces sources invalides.
Sources et sorties existantes inchangées par comparaison SHA-256. ImageMagick
exécuté sur les fichiers temporaires : réduction à 96 px et absence d’agrandissement.

Les cinq ressources et le bloc Compose extrait de la page ont été compilés dans
la copie Android temporaire avec `./gradlew --offline :app:assembleDebug` : succès.
L’APK est lisible et contient les cinq variantes dans leurs dossiers de densité.
Cette vérification ne démontre pas leur sélection ou leur rendu sur appareil.
Aucun fichier du vrai dépôt Android de départ n’a été modifié.

Contrôles du guide : 41 pages HTML, chaîne des 40 leçons, liens/ancres/libellés
valides ; code affiché identique au générateur téléchargeable, syntaxe Python,
structure HTML et tokens CSS valides ; `git diff --check` sans erreur. Rendu
navigateur, clavier, exécution Windows et affichage sur plusieurs densités non
vérifiés ici. Les images de contrôle sont synthétiques et restent temporaires.


## Ressources — consignes et skills

`resources_view/` est une bibliothèque indépendante du parcours : entrée home et
liens depuis la leçon des consignes et la fin des extensions, sans nouvelle leçon
ou compteur de progression. Le parcours conserve 27 pages principales et 13 extensions.

Deux kits ZIP de trois fichiers chacun : AGENTS.md + .agents/skills pour Codex,
CLAUDE.md + .claude/skills pour Claude Code. Même contenu pédagogique de consignes,
deux procédures review-quiz-change et add-quiz-question. Les quatre fichiers
individuels portent des noms de téléchargement préfixés, à renommer à destination.
Les archives conservent les vrais noms et dossiers ; aucun réglage d’outil fourni.

Les modèles sont à lire et adapter au projet réel, puis à fusionner avec les
consignes existantes. Android par défaut, adaptation explicite pour Desktop et
ses tâches Gradle. Explication du rôle des instructions, skills et permissions,
de la reconnaissance des fichiers et de l’invocation dans l’interface de l’agent.
La revue est sans modification ; l’ajout de question reste une tâche ciblée.
La page ne télécharge ni n’installe automatiquement un kit et ne démarre aucun agent.
Les fichiers de ressources sont du contenu pédagogique, pas des instructions
actives ou des skills installés pour le développement du guide.
Sources : docs officielles OpenAI AGENTS.md/skills et Anthropic mémoire/skills.
La sélection de documentation et de dépôts utiles reste une page à réaliser ensuite.


Vérifications des ressources : deux ZIP lisibles extraits dans un dossier
temporaire, trois fichiers attendus chacun, chemins relatifs sans traversée,
contenus identiques aux téléchargements individuels et aux aperçus HTML.
Les quatre copies de skills extraites passent quick_validate.py de skill-creator
(en-têtes YAML et nommage). Cela ne valide pas leur comportement avec un agent.
Aucun exemple n’est présent dans les emplacements de skills actifs du guide.

Contrôles : 42 pages HTML, 40 leçons toujours reliées dans la même chaîne ; liens,
ancres et libellés valides. Structure HTML accueil/ressources et tokens CSS
vérifiés, `git diff --check` sans erreur. Compteurs inchangés : 27 pages principales
et 13 extensions, la bibliothèque restant indépendante. Installation/chargement
réels dans Codex et Claude Code, clic de téléchargement dans un navigateur,
rendu, clavier et Windows non vérifiés. Aucun projet Android/Desktop modifié.
