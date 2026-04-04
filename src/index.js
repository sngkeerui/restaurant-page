import "./styles.css";
import { initialPageLoad } from "./pageLoad.js";
import { menu } from "./menu.js";

initialPageLoad();

const content = document.getElementById("content");
const homeBtn = document.getElementById("home");

homeBtn.addEventListener("click", () => {
    content.textContent = "";
    initialPageLoad();
})

const menuBtn = document.getElementById("menu");
menuBtn.addEventListener("click", () => {
    content.textContent = "";
    menu();
})
