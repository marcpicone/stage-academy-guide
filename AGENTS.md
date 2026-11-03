# Stage Academy Guide

## Objectif et périmètre

Support de cours local, en français, pour un élève de troisième débutant complet.
Le fil rouge est la construction progressive d’un quiz Android en Kotlin/Compose
dans un dépôt séparé, `stage_academy`. Ici, on construit uniquement le guide.
Privilégier les concepts, les exemples concrets et les responsabilités lisibles.
Le ton est direct, encourageant, sans marketing ni promesse de maîtrise en une semaine.

L’état initial contient seulement l’accueil et l’aperçu des thèmes. Les cours,
missions et quiz du guide seront ajoutés sur demande. Ne pas créer de liens vers
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

Les thèmes prévus sont Git/GitHub, Kotlin/Compose, actions/état, debug/Logcat,
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
