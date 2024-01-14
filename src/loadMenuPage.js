import menuImg from "../menu.jpg";

function loadMenuPage() {
    // Main content div
    const content = document.getElementById("content");

    // Page div to contain page elements
    const page = document.createElement("div");
    page.classList.add("page");

    // Menu headline
    const headline = document.createElement("h1");
    headline.textContent = "Menu";

    // Menu image
    const image = document.createElement("img");
    image.src = menuImg;
    image.alt = "Our menu";
    image.classList.add("homepage-img");

    // Menu description
    const description = document.createElement("p");
    description.textContent = "Wanna eat?";

    // Insert items into page content div
    page.appendChild(headline);
    page.appendChild(image);
    page.appendChild(description);

    // Insert page into main content div
    content.appendChild(page);    
}

export default loadMenuPage;