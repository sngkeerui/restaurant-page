export function menu() {
    const content = document.getElementById("content");
    const heading = document.createElement("h2");
    heading.textContent = "Check out what we have!";
    const para = document.createElement('p');
    para.classList.add("menu-item");
    para.textContent = "Aglio e Olio";
    content.appendChild(heading);
    content.appendChild(para);
}