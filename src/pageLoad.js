import MyImage from "./chef.jpg";

export function initialPageLoad() {
    const content = document.getElementById("content");
    const heading = document.createElement("h1");
    heading.textContent = "Welcome to my restaurant!";
    const logo = new Image();
    logo.src = MyImage;
    logo.width = 300;
    content.appendChild(heading);
    content.appendChild(logo);
}