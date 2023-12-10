function toFortunes() {
    window.location.href='findfortunes.html';
}

function signmein() {
    window.location.href = "signin.html";
}

function login() {
    const nameEl = document.querySelector("#name");
    localStorage.setItem("userName", nameEl.value);
    window.location.href = "myfortunes.html";
}

function gohome() {
    window.location.href = "index.html";
}

