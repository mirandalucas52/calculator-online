const display = document.querySelector(".display");
const buttons = document.querySelectorAll("button");
const specialChars = ["%", "*", "/", "-", "+", "="];
let output = "";

const calculate = (btnValue) => {
    display.focus();
    if (btnValue === "=" && output !== "") {
        output = eval(output.replace("%", "/100"));
    } else if (btnValue === "AC") {
        output = "";
    } else if (btnValue === "DEL") {
        output = output.toString().slice(0, -1);
    } else {
        if (output === "" && specialChars.includes(btnValue)) return;
        output += btnValue;
    }
    display.value = output || ""; // Affiche une chaîne vide si output est undefined
};

buttons.forEach((button) => {
    button.addEventListener("click", (e) => calculate(e.target.dataset.value));
});

// Récupère le bouton et ajoute un événement de clic
const chooseThemeButton = document.getElementById("choose-theme");
chooseThemeButton.addEventListener("click", toggleThemes);

const darkThemeButton = document.querySelector(".dark-theme");
const lightThemeButton = document.querySelector(".light-theme");
const pastelThemeButton = document.querySelector(".pastel-theme");
const blueThemeButton = document.querySelector(".blue-theme");
const pinkThemeButton = document.querySelector(".pink-theme");

darkThemeButton.addEventListener("click", toggleDarkTheme);
lightThemeButton.addEventListener("click", toggleLightTheme);
pastelThemeButton.addEventListener("click", togglePastelTheme);
blueThemeButton.addEventListener("click", toggleBlueTheme);
pinkThemeButton.addEventListener("click", togglePinkTheme);

function toggleDarkTheme() {
    removeThemeClasses();
    const root = document.documentElement;
    root.classList.add("dark-theme");
    output = ""; // Réinitialise output à une chaîne vide
    display.value = ""; // Réinitialise la valeur affichée dans display à une chaîne vide
}

function toggleLightTheme() {
    removeThemeClasses();
    const root = document.documentElement;
    root.classList.add("light-theme");
    output = ""; // Réinitialise output à une chaîne vide
    display.value = ""; // Réinitialise la valeur affichée dans display à une chaîne vide
}

function togglePastelTheme() {
    removeThemeClasses();
    const root = document.documentElement;
    root.classList.add("pastel-theme");
    output = ""; // Réinitialise output à une chaîne vide
    display.value = ""; // Réinitialise la valeur affichée dans display à une chaîne vide
}

function toggleBlueTheme() {
    removeThemeClasses();
    const root = document.documentElement;
    root.classList.add("blue-theme");
    output = ""; // Réinitialise output à une chaîne vide
    display.value = ""; // Réinitialise la valeur affichée dans display à une chaîne vide
}

function togglePinkTheme() {
    removeThemeClasses();
    const root = document.documentElement;
    root.classList.add("pink-theme");
    output = ""; // Réinitialise output à une chaîne vide
    display.value = ""; // Réinitialise la valeur affichée dans display à une chaîne vide
}

function removeThemeClasses() {
    const root = document.documentElement;
    root.classList.remove("dark-theme");
    root.classList.remove("light-theme");
    root.classList.remove("pastel-theme");
    root.classList.remove("blue-theme");
    root.classList.remove("pink-theme");
}

// Fonction pour basculer entre choose theme
function toggleThemes() {
    const themes = document.querySelector(".themes");
    themes.classList.toggle("active");
    output = ""; // Réinitialise output à une chaîne vide
    display.value = ""; // Réinitialise la valeur affichée dans display à une chaîne vide
}
