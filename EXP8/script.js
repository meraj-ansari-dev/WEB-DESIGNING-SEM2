let fontSize = 22;
let visible = true;

function changeHeading() {
    let text = document.getElementById("inputText").value;
    if (text) document.getElementById("heading").innerText = text;
}

function changeBackground() {
    let colors = ["#f0f4f8", "#fee4e1", "#e6ffe6"];
    document.getElementById("box").style.backgroundColor =
        colors[Math.floor(Math.random() * colors.length)];
}

function increaseFont() {
    fontSize += 2;
    document.getElementById("heading").style.fontSize = fontSize + "px";
}

function toggleParagraph() {
    visible = !visible;
    document.getElementById("para").style.display = visible ? "block" : "none";
}

function resetAll() {
    document.getElementById("heading").innerText = "Welcome to JavaScript Lab";
    document.getElementById("box").style.backgroundColor = "white";
    document.getElementById("para").style.display = "block";
    fontSize = 22;
}