function loadContactPage() {
    // Main content div
    const content = document.getElementById("content");

    // Page div to contain page elements
    const page = document.createElement("div");
    page.classList.add("page");

    // Contact headline
    const headline = document.createElement("h1");
    headline.textContent = "Contact us";

    // Contact image
    const image = document.createElement("img");
    image.src = "../contact.jpg";
    image.alt = "Contact image";
    image.classList.add("homepage-img");

    // Contact description
    const description = document.createElement("p");
    description.textContent = "Not sure we want to reveal contact info..";

    // Insert items into page content div
    page.appendChild(headline);
    page.appendChild(image);
    page.appendChild(description);

    // Insert page into main content div
    content.appendChild(page);    
}

export default loadContactPage;