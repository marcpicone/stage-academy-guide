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
