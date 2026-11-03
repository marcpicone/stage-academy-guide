// Chaque étape change une illustration locale, jamais un vrai dépôt Git.
const treeSteps = [["base", "Le point de départ", "Le projet existe sur dev."], ["branch", "Créer une branche", "mp/ajouter_score pointe au départ sur le même commit que dev. Aucun nouveau point."], ["commit", "Enregistrer un commit", "Le point [QuizScore] Add the final score apparaît sur la branche de travail. dev ne bouge pas."], ["push", "Envoyer la branche", "Le push envoie la branche et son historique vers GitHub. Aucun nouveau commit n’est créé."], ["pr", "Ouvrir une PR", "On propose mp/ajouter_score → dev. La discussion est ouverte ; dev est encore inchangée."], ["merge", "Accepter et fusionner", "Après relecture, les changements rejoignent dev. Cet exemple utilise un commit de fusion avec deux parents."]];
const treeButtons = document.querySelectorAll("[data-tree-step]");
const treeParts = document.querySelectorAll("[data-tree-from]");
const treeTitle = document.querySelector("#tree-step-title");
const treeDescription = document.querySelector("#tree-step-description");
const treeLocation = document.querySelector("#tree-location");
const devPointer = document.querySelector("#dev-pointer");
const graphDescription = document.querySelector("#tree-desc");

function showTreeStep(index) {
    const step = treeSteps[index];
    treeButtons.forEach((button) => button.setAttribute("aria-pressed", String(Number(button.dataset.treeStep) === index)));
    treeParts.forEach((part) => { part.toggleAttribute("hidden", Number(part.dataset.treeFrom) > index); });
    treeTitle.textContent = `${index + 1} / ${treeSteps.length} · ${step[1]}`;
    treeDescription.textContent = step[2];
    treeLocation.textContent = index < 3 ? "Lieu : sur ton ordinateur." : "Lieu : sur GitHub aussi. La branche dev reste inchangée jusqu’à la fusion.";
    if (index === 5) treeLocation.textContent = "Résultat : les changements acceptés sont maintenant dans dev sur GitHub. Ta copie locale devra ensuite être mise à jour.";
    devPointer.setAttribute("x", index === 5 ? "510" : "55");
    graphDescription.textContent = `${step[1]}. ${step[2]}`;
}
treeButtons.forEach((button) => {
    button.disabled = false;
    button.addEventListener("click", () => showTreeStep(Number(button.dataset.treeStep)));
});
if (treeButtons.length) {
    showTreeStep(0);
    document.querySelector("#tree-transcript").open = false;
}

const explanations = {
    merge: {
        correct: "no",
        yes: "Pas encore. La PR propose les changements pour relecture. La fusion dans dev est une action distincte, après acceptation.",
        no: "Exact. Ouvrir une PR ne modifie pas dev. On peut discuter, demander des corrections, puis décider de fusionner ou de fermer la proposition.",
    },
    offline: {
        correct: "yes",
        yes: "Exact. Git enregistre le commit dans ton dépôt local, sur ton ordinateur. Tu n’as pas besoin d’Internet pour faire ce commit.",
        no: "Tu peux faire un commit hors ligne : il est enregistré par Git sur ton ordinateur. Internet sera nécessaire pour l’envoyer vers GitHub.",
    },
    published: {
        correct: "no",
        yes: "Pas encore. Un commit local reste sur ton ordinateur. Il faut ensuite faire un push pour l’envoyer vers le dépôt sur GitHub.",
        no: "Exact. Commit et push sont deux actions différentes : enregistrer une étape localement, puis envoyer des commits vers le dépôt distant.",
    },
    bug: {
        correct: "compare",
        compare: "Exact. Comparer les changements aide à chercher ce qui a provoqué le bug. Il reste à observer, comprendre et tester une correction.",
        repair: "Git garde les étapes enregistrées, mais ne répare pas automatiquement les bugs. L’historique permet de comparer ce qui a changé pour guider ta recherche.",
    },
};

document.querySelectorAll(".knowledge-check").forEach((form) => {
    const feedback = form.querySelector(".feedback");
    const explanation = explanations[form.dataset.question];
    form.querySelectorAll("button").forEach((button) => { button.disabled = false; });
    form.addEventListener("submit", (event) => {
        event.preventDefault();
        const selected = form.querySelector("input:checked");
        if (!selected) return;
        feedback.textContent = explanation[selected.value];
        feedback.dataset.result = selected.value === explanation.correct ? "correct" : "retry";
    });
    form.addEventListener("change", () => {
        feedback.textContent = "";
        delete feedback.dataset.result;
    });
    form.addEventListener("reset", () => {
        feedback.textContent = "";
        delete feedback.dataset.result;
    });
});
