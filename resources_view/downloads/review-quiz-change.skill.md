---
name: review-quiz-change
description: Relire les changements d’un quiz Kotlin Compose pour repérer les régressions de progression, de score, de recommencement ou d’affichage. Utiliser pour une demande de revue, sans modifier le code.
---

# Relire une modification du quiz

Lis les consignes du projet, son état Git et les changements concernés par la
demande, y compris le contenu des nouveaux fichiers. Utilise le code environnant
pour comprendre l’effet réel d’un changement ; n’invente pas un problème à partir
du seul nom d’un fichier.

Suivant le périmètre modifié, suis le trajet du clic à la validation, au score
et à l’état relu par la vue. Recherche notamment :

- une progression possible sans réponse ou une lecture de question après la fin ;
- un deuxième comptage, un premier choix remplaçable ou un total fixé à quatre ;
- un recommencement qui garde l’indice, le score ou l’état d’une ancienne réponse ;
- une vue qui ne relit plus l’état ou masque une action avec un texte long.

Pour chaque défaut étayé, donne le fichier et l’endroit, un scénario concret,
l’effet observé dans le code et une correction suggérée. Distingue une régression
d’une préférence de style. Si tu ne trouves pas de défaut étayé, indique-le.

Propose les commandes et les observations utiles pour les incertitudes restantes.
Présente ces propositions comme non exécutées. Cette revue ne modifie pas les
fichiers et ne crée ni commit ni publication.
