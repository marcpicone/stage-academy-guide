# Stage Academy Guide

## Objectif et périmètre

Support de cours local, en français, pour un élève de troisième débutant complet.
Le fil rouge est la construction progressive d’un quiz Android en Kotlin/Compose
dans un dépôt séparé, `stage_academy`. Ici, on construit uniquement le guide.
Privilégier les concepts, les exemples concrets et les responsabilités lisibles.
Le ton est direct, encourageant, sans marketing ni promesse de maîtrise en une semaine.

Le guide contient l’accueil et une introduction Git/GitHub avec un arbre Git illustratif, des définitions en marge
et quatre questions corrigées dans `module_git_intro_view/`. La page `module_git_setup_view/` accompagne la création du compte, le fork et le
clone, avec une introduction à la CLI. Les opérations réelles sur le projet Android sont réalisées par l’élève avec son encadrant ; le guide ne les exécute pas. La première page IDE (`module_ide_intro_view/`) présente Android Studio et ses outils.
La page pratique `module_ide_setup_view/` guide l’ouverture, la lecture des fichiers et le lancement existant, sans modifier le code. Les confirmations finales restent manuelles. La page `module_ide_debug_view/` accompagne ensuite une enquête Logcat et une correction dans le clone de l’élève, avec indices dépliables. La page `module_ide_share_view/` propose deux parcours alternatifs (vue Git et terminal intégré) pour le commit, le push et la PR vers le dev du fork de l’élève. La page `module_code_variables_view/` introduit les variables par l’image de boîtes nommées, uniquement val, et les types String, Int, Double et Boolean. L’exercice prépare les données de la question sans affichage Compose, score ou gestion de changement de valeur. Les identifiants des nouveaux exemples sont anglais, les types explicites et les traductions dans le cours ; pas de collections à cette étape. La page `module_code_functions_view/` introduit les fonctions comme actions, paramètres, comparaison ==, return, portée locale/fichier et Unit, sans conditions ou interface. La page `module_code_compose_view/` fournit une première question cliquable : composants Text/Button/Column, action locale, if/else et message en état Compose, sans score ni collections. La page `module_code_second_question_view/` fait ajouter une deuxième question au même écran pour observer les répétitions avant les collections, avec messages indépendants et défilement fourni. La page `module_code_lists_view/` regroupe les choix en List<String>, introduit indices/size et for, puis fait ajouter et réordonner un choix sans dupliquer de bouton. Pas de Map ou de classe à cette étape. Les autres cours seront ajoutés sur demande. Ne pas créer de liens vers
des modules inexistants ou faire passer une illustration pour une interaction.

## Architecture plate par vue

- `index.html` contient directement le HTML sémantique de l’accueil.
- `theme.css` contient uniquement les tokens visuels partagés.
- `theme_page.css` contient les styles HTML généraux et l’accessibilité commune.
- `home_view/home_view.css` contient les styles propres à l’accueil.
- Si une interaction devient utile, son JavaScript classique va dans
  `home_view/home_view.js`. Ne pas créer de fichier JS vide.
- Les futurs modules auront leur propre dossier par vue, seulement quand ils
  seront demandés. Les assets privés restent dans leur vue ; ne pas anticiper un
  dossier partagé sans besoin réel.

Le site doit s’ouvrir par double-clic sur `index.html`, y compris sous Windows.
Utiliser HTML/CSS/JavaScript natifs. Ne pas ajouter de framework, package manager,
build, routeur, backend, CDN, `fetch` pour charger les vues ou module JS imposant un
serveur. Aucun service distant n’est nécessaire à l’affichage de l’accueil.
Préférer l’absence de JavaScript quand HTML/CSS suffisent.

## Contenu et présentation

Les thèmes prévus sont Git/GitHub, IDE, Kotlin/Compose, actions/état, debug/Logcat,
organisation des responsabilités et collaboration avec les LLM/agents.
Chaque cours futur reliera une notion à une petite modification observable de l’app.
Séparer ce que l’élève confirme lui-même des vérifications réellement automatisées.
Ne pas transformer ce guide en cours de développement web.

Conserver une page lisible sur ordinateur et téléphone, une hiérarchie de titres
logique, de vrais liens et boutons, un focus visible et une navigation clavier.
Ne pas ajouter de grandes images sans besoin. Le contenu reste lisible sans JS.

## Vérifier et rendre compte

Avant de modifier, lire les fichiers actuels et le statut Git. Après une modification
visuelle, ouvrir l’accueil, vérifier ordinateur et mobile, liens, clavier, ressources
et console. Si une vérification n’a pas été exécutée, le dire clairement ; une QA
macOS ne vaut pas un test Windows. Ne pas ajouter de tests qui recopient le HTML.

Ne pas modifier le dépôt Android ou les projets de référence sans demande.
Ne jamais mettre de secret dans le frontend ou le dépôt. Ne pas supprimer de travail,
réécrire l’historique, changer de branche ou publier sans autorisation appropriée.
Une demande explicite déjà reçue reste valable ; ne pas redemander par principe.
Les fichiers `.codex` guident l’outil, sans remplacer les contrôles de l’environnement.

<!-- junior-workflow:start -->
## Junior workflow

For development requests, implementation planning and resuming work in Git
repositories, use the `junior-workflow` skill and the `junior_mcp` tools without
waiting for an explicit mention. Follow the repository's own instructions too.
Read-only questions do not create persistent work. Read Junior's saved state after
gate notifications and on resumption; never decide for the human. A plan approval
alone does not start implementation; a subsequent explicit implementation request
authorizes Codex to execute the approved scope with its normal tools and permissions.
<!-- junior-workflow:end -->

## Vocabulaire pédagogique

Définir chaque nouveau mot technique à sa première apparition. Conserver le terme
anglais visible avec son sens en français. Préférer une note 💡 en marge, lisible
sans survol et replacée sous le passage sur mobile. Identifier les captures réelles
et les simulations ; ne pas présenter les conventions de l’équipe comme des règles Git.
