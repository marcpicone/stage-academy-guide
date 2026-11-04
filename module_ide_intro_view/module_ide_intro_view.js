// Illustration et exercices locaux : aucune action n’est lancée dans un vrai IDE.
const zones = [["toolbar", "Les actions", "Zone pour choisir une action, comme lancer l’application. Dans le vrai IDE, il faut aussi choisir la bonne configuration et un appareil."], ["project", "Les fichiers · Project", "Le panneau Project sert à parcourir les dossiers et à retrouver un fichier. Cliquer sur un fichier permet de l’ouvrir dans l’éditeur."], ["editor", "L’éditeur · Editor", "La zone centrale affiche le contenu du fichier ouvert. Elle aide à lire et modifier le texte du code ; ce n’est pas l’écran du téléphone."], ["terminal", "Le terminal · Terminal", "Une fenêtre pour écrire des commandes, comme git status. Le terminal intégré retrouve la même idée de CLI que dans Git Bash."], ["messages", "Les messages · Build / Run / Logcat", "Les panneaux de sortie indiquent ce qui se passe. Build concerne la construction ; Run le lancement ; Logcat les messages venant de l’appareil Android. Ils ne racontent pas tous la même chose."]];
const zoneButtons = document.querySelectorAll("[data-zone]");
const zoneTitle = document.querySelector("#zone-title");
const zoneDescription = document.querySelector("#zone-description");
zoneButtons.forEach((button) => {
    button.disabled = false;
    button.addEventListener("click", () => {
        const zone = zones.find((item) => item[0] === button.dataset.zone);
        zoneButtons.forEach((item) => item.setAttribute("aria-pressed", String(item === button)));
        zoneTitle.textContent = zone[1];
        zoneDescription.textContent = zone[2];
    });
});
if (zoneButtons.length) document.querySelector("#zone-transcript").open = false;

const answers = {
    file: {
        correct: "project",
        project: "Exact. Le panneau Project permet de chercher dans les dossiers et les fichiers du projet. Tu peux ensuite ouvrir le fichier dans l’éditeur.",
        editor: "L’éditeur montre le fichier ouvert. Pour retrouver un autre fichier, commence par le panneau des fichiers, souvent nommé Project.",
    },
    error: {
        correct: "messages",
        messages: "Exact. Les messages de Build donnent des informations sur la construction qui vient d’échouer sur ton ordinateur.",
        github: "GitHub héberge le dépôt et facilite la collaboration. Pour cette erreur de construction locale, regarde d’abord les messages de Build dans l’IDE.",
    },
    save: {
        correct: "no",
        yes: "Enregistrer conserve le fichier localement. Cela ne crée pas de commit et n’effectue pas de push vers GitHub.",
        no: "Exact. L’éditeur enregistre le fichier local. Le commit conserve une étape dans Git, et le push envoie des commits vers le dépôt distant.",
    },
};
document.querySelectorAll(".knowledge-check").forEach((form) => {
    const feedback = form.querySelector(".feedback");
    const answer = answers[form.dataset.question];
    form.querySelectorAll("button").forEach((button) => { button.disabled = false; });
    form.addEventListener("submit", (event) => {
        event.preventDefault();
        const selected = form.querySelector("input:checked");
        if (!selected) return;
        feedback.textContent = answer[selected.value];
        feedback.dataset.result = selected.value === answer.correct ? "correct" : "retry";
    });
    const clearFeedback = () => {
        feedback.textContent = "";
        delete feedback.dataset.result;
    };
    form.addEventListener("change", clearFeedback);
    form.addEventListener("reset", clearFeedback);
});
