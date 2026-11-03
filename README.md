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
La création du compte, le fork, le clone et les manipulations réelles viendront dans
une prochaine page. Les autres cours restent à créer. Le téléphone de l’accueil est
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
