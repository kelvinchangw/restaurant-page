function loadHomePage() {
    // Main content div
    const content = document.getElementById("content");

    // Page div to contain page elements
    const page = document.createElement("div");
    page.classList.add("page");

    // Restaurant headline
    const headline = document.createElement("h1");
    headline.textContent = "Welcome to our restaurant!";

    // Restaurant image
    const image = document.createElement("img");
    image.src = "./homepage.jpg";
    image.alt = "Restaurant image";
    image.classList.add("homepage-img");

    // Restaurant description
    const description = document.createElement("p");
    description.textContent = "Enjoy the best dining experience with us.";

    // Insert items into page content div
    page.appendChild(headline);
    page.appendChild(image);
    page.appendChild(description);

    // Insert page into main content div
    content.appendChild(page);
}

// Export loadHomePage function
export default loadHomePage;