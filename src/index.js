import "./style.css";

function component() {
    const element = document.createElement("div");

    element.innerHTML = "WOW.";
    element.classList.add("hello");

    return element;
}

document.body.appendChild(component());