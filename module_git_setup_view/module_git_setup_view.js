// Ces aides n’exécutent aucune commande et ne contactent pas GitHub.
const usernameInput = document.querySelector("#github-username");
const usernameStatus = document.querySelector("#username-status");
const personalFork = document.querySelector("#personal-fork");
const cloneCommand = document.querySelector('[data-command="clone"]');
const remoteExample = document.querySelector('[data-command="remote"]');

function updateUsername() {
    const username = usernameInput.value.trim();
    const valid = /^[a-z0-9](?:[a-z0-9]|-(?=[a-z0-9])){0,38}$/i.test(username);
    const learner = valid && username.toLowerCase() !== "marcpicone";
    const owner = learner ? username : "TON_PSEUDO";
    const url = `https://github.com/${owner}/stage_academy.git`;
    cloneCommand.textContent = `git clone --branch dev ${url}`;
    remoteExample.textContent = `origin  ${url} (fetch)
origin  ${url} (push)`;
    personalFork.hidden = !learner;
    if (learner) {
        personalFork.setAttribute("href", `https://github.com/${username}/stage_academy`);
        usernameStatus.textContent = `Commande adaptée à ${username}. Vérifie que ce fork existe et t’appartient : le cours ne le vérifie pas.`;
    } else {
        personalFork.removeAttribute("href");
        usernameStatus.textContent = username.toLowerCase() === "marcpicone"
            ? "Ce compte est celui du projet de départ. Indique le compte du stagiaire pour utiliser son fork."
            : "Remplace TON_PSEUDO par ton nom d’utilisateur GitHub : lettres, chiffres ou tirets entre les mots, sans espace. Pas une adresse email.";
    }
}
usernameInput.addEventListener("input", updateUsername);
updateUsername();

const trainingForm = document.querySelector("#terminal-training");
const trainingCommand = document.querySelector("#training-command");
const trainingOutput = document.querySelector("#training-output");
trainingForm.querySelector("button").disabled = false;
trainingForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const command = trainingCommand.value.trim().replace(/\s+/g, " ");
    const responses = {
        "git --version": "Simulation : git version 2.x.y — Git affiche sa version. Dans le vrai terminal, tu verras un numéro précis.",
        pwd: "Simulation : /c/Users/Eleve/Documents/Stage — voici un exemple de dossier courant. Le vrai terminal affichera ton propre chemin.",
    };
    trainingOutput.textContent = Object.hasOwn(responses, command)
        ? responses[command]
        : "Cette commande n’est pas exécutée. Essaie git --version ou pwd : ce petit terminal est seulement une simulation.";
});

const confirmations = document.querySelectorAll("[data-completion]");
const completionStatus = document.querySelector("#completion-status");
confirmations.forEach((checkbox) => checkbox.addEventListener("change", () => {
    const checked = Array.from(confirmations).filter((item) => item.checked).length;
    completionStatus.textContent = `${checked} / ${confirmations.length} points confirmés par toi. À montrer à ton encadrant ; aucune vérification automatique du dépôt.`;
}));
