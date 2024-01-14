import "./style.css";
import loadBtnBox from "./loadBtnBox";
import loadHomePage from "./loadHomePage";
import loadMenuPage from "./loadMenuPage";
import loadContactPage from "./loadContactPage";
import clearPageContents from "./clearPageContents";

document.addEventListener("DOMContentLoaded", () => {
    // On page load, initialize button box and land users on home page
    loadBtnBox();
    loadHomePage();

    const btnBox = document.querySelector(".btn-box");
    // Event handler for button clicks
    btnBox.addEventListener("click", (event) => {
        // Clear page contents prior to inserting new page
        clearPageContents();

        switch(event.target.textContent) {
            case "HOME":
                loadHomePage();
                break;
            case "MENU":
                loadMenuPage();
                break;
            case "CONTACT":
                loadContactPage();
        }
    });
});