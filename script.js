import { cardData, projects } from "./content.js";

function toggleArrow(button) {
  var arrowSymbol = button.querySelector(".arrowSymbol");
  var title = arrowSymbol.innerHTML.match(/^(.*?) [⇓⇑]/)[1];

  if (arrowSymbol.innerHTML.endsWith("⇓")) {
    arrowSymbol.innerHTML = title + " ⇑";
  } else {
    arrowSymbol.innerHTML = title + " ⇓";
  }
}

// Create the Experience cards
const cardContainer = document.getElementById("cardContainer");

cardData.forEach((data) => {
  const card = document.createElement("div");
  card.className = "card bg-dark";

  const cardBody = document.createElement("div");
  cardBody.className = "card-body bg-dark";

  const title = document.createElement("h5");
  title.className = "card-title";
  title.textContent = data.title;

  const company = document.createElement("h6");
  company.className = "text-info";
  company.textContent = data.company;

  const date = document.createElement("h6");
  date.className = "text-info small";
  date.textContent = data.date;

  const description = document.createElement("p");
  description.className = "card-text";
  description.innerHTML = data.description;

  cardBody.appendChild(title);
  cardBody.appendChild(company);
  cardBody.appendChild(date);
  cardBody.appendChild(description);

  card.appendChild(cardBody);
  cardContainer.appendChild(card);
});

// Create the Projects list items
const projectList = document.getElementById("projectList");

projects.forEach((project) => {
  const listItem = document.createElement("li");
  listItem.className = "list-group-item text-bg-dark";

  const button = document.createElement("button");
  button.className = "btn btn-dark";
  button.setAttribute("type", "button");
  button.setAttribute("data-bs-toggle", "collapse");
  button.setAttribute("data-bs-target", `#${project.id}`);
  button.setAttribute("aria-expanded", "false");
  button.setAttribute("aria-controls", project.id);
  button.setAttribute("onclick", "toggleArrow(this)");

  const buttonTitle = document.createElement("h3");
  buttonTitle.className = "arrowSymbol";
  buttonTitle.innerHTML = project.title;

  button.appendChild(buttonTitle);
  listItem.appendChild(button);

  const collapseDiv = document.createElement("div");
  collapseDiv.className = "collapse";
  collapseDiv.id = project.id;

  const cardDiv = document.createElement("div");
  cardDiv.className = "card card-body bg-dark";

  const innerRowDiv = document.createElement("div");
  innerRowDiv.className = "row row-cols-1 row-cols-md-2 text-left p-2";

  const imageColDiv = document.createElement("div");
  imageColDiv.className = "col";

  const image = document.createElement("img");
  image.className = "img-fluid";
  image.src = project.imgSrc;
  image.alt = project.imgAlt;

  imageColDiv.appendChild(image);

  const contentColDiv = document.createElement("div");
  contentColDiv.className = "col";

  const title = document.createElement("h5");
  title.innerHTML = `<b>${project.title}</b>`;

  const subtitle = document.createElement("h6");
  subtitle.className = "text-info";
  subtitle.innerHTML = project.subtitle;

  const description = document.createElement("div");
  description.innerHTML = project.description;

  contentColDiv.appendChild(title);
  contentColDiv.appendChild(subtitle);
  contentColDiv.appendChild(description);

  innerRowDiv.appendChild(imageColDiv);
  innerRowDiv.appendChild(contentColDiv);

  cardDiv.appendChild(innerRowDiv);
  collapseDiv.appendChild(cardDiv);

  listItem.appendChild(collapseDiv);
  projectList.appendChild(listItem);
});
