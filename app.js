///DARK MODE///
//DOM ELEMENTS///
let darkMode = localStorage.getItem("dark-mode")
const darkModeBtn = document.getElementById("mode-btn");
const body = document.getElementById("body");

const enableDarkMode = () => {
    body.classList.add("dark")
    localStorage.setItem("dark-mode", "enabled");

};

const disableDarkMode = () => {
    body.classList.remove("dark")
    localStorage.setItem("dark-mode", "disabled");
};

if (darkMode === "enabled") {
    enableDarkMode();
}

darkModeBtn.addEventListener("click", ()=> {
    let darkMode = localStorage.getItem("dark-mode");
    if (darkMode !== "enabled") {
        enableDarkMode();
    } else {
        disableDarkMode();
    }
});



