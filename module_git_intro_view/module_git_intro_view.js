// Amélioration progressive : le cours reste lisible sans JavaScript.
const commitButtons = document.querySelectorAll("[data-commit]");
const commitPanels = document.querySelectorAll(".commit-panel");
const timelineStatus = document.querySelector("#timeline-status");

function selectCommit(button) {
    commitButtons.forEach((item) => {
        item.setAttribute("aria-pressed", String(item === button));
    });
    commitPanels.forEach((panel) => {
        panel.hidden = panel.id !== button.getAttribute("aria-controls");
    });
    timelineStatus.textContent = `Étape affichée : ${button.textContent.trim()}.`;
}

commitButtons.forEach((button) => {
    button.disabled = false;
    button.addEventListener("click", () => selectCommit(button));
});
if (commitButtons.length > 0) selectCommit(commitButtons[0]);

const explanations = {
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
