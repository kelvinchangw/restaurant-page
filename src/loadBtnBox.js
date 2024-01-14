function loadBtnBox() {
    // Container to store buttons
    const btnBox = document.createElement("div");
    btnBox.classList.add("btn-box");

    // Home button
    const homeBtn = document.createElement("button");
    homeBtn.textContent = "HOME";

    // Menu button
    const menuBtn = document.createElement("button");
    menuBtn.textContent = "MENU";

    // Contact button
    const contactBtn = document.createElement("button");
    contactBtn.textContent = "CONTACT";

    // Insert buttons into button container
    btnBox.appendChild(homeBtn);
    btnBox.appendChild(menuBtn);
    btnBox.appendChild(contactBtn);

    // Insert items into main content div
    content.appendChild(btnBox);
}

export default loadBtnBox;