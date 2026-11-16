# Consignes du quiz

## Projet

Ce modèle décrit le quiz Android du parcours Stage Academy : Kotlin, Compose
et un module app. Avant de l’utiliser, confirme la cible et les noms réels du
projet. Pour le compagnon Desktop, adapte ce paragraphe et les commandes Gradle.

Lis le code et les consignes existantes avant une modification. Les données
d’une question, les règles du presenter et l’affichage ont des rôles distincts.
Conserve l’organisation réellement présente ; nos packages de vue portent le
suffixe _view. Les modèles de données restent distincts des vues.

## Règles de la partie

- Afficher une question à la fois et attendre une réponse avant la suivante.
- Garder le premier choix définitif : un point si correct, aucun sinon.
- Empêcher le double comptage et le remplacement du choix après validation.
- Afficher le résultat selon le vrai nombre de questions, sans supposer quatre.
- Recommencer à la première question avec le score et l’état de réponse remis à zéro.

Si la demande change une règle, explique son effet et adapte les comportements
concernés. Pour un changement de présentation, garde les règles en place.

## Manière de travailler

- Utilise des identifiants anglais et des textes d’interface français.
- Garde les changements liés au besoin demandé et explique les nouveaux concepts.
- Vérifie les dépendances et les commandes dans le projet réel avant de les utiliser.
- Pour un transfert entre projets, distingue la référence à lire et la destination à modifier.

## Vérification et compte rendu

Utilise le Gradle Wrapper du projet pour les tâches adaptées. Dans le quiz Android
simple, :app:assembleDebug produit l’APK debug. Une compilation ne prouve pas le
fonctionnement sur appareil.

Pour une modification des règles, vérifie ou propose l’observation des scores
zéro/toutes/une partie des bonnes réponses, du premier choix définitif et du
recommencement. Pour la vue, examine aussi les textes longs et l’espace disponible.

Explique ce qui a changé et pourquoi, les commandes réellement exécutées et leurs
résultats, ainsi que les observations restantes. Les commits, push et PR suivent
la demande de publication ; écrire ces consignes ne publie rien.
