function createHome() {
  const home = document.createElement("div");
  home.classList.add("home");

  const chefImage = document.createElement("img");
  chefImage.src = "images/chef.png";
  chefImage.alt = "Chef";

  home.appendChild(createParagraph("Always delicious meals"));
  home.appendChild(createParagraph("Made with passion since 1900"));
  home.appendChild(chefImage);
  home.appendChild(createParagraph("Come here like your home or order online!"));

  return home;
}

function createParagraph(text) {
  const paragraph = document.createElement("p");
  paragraph.textContent = text;
  return paragraph;
}

function loadHome() {
  const main = document.getElementById("main");
  main.textContent = "";
  main.appendChild(createHome());
}

export default loadHome;
