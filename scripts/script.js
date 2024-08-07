import { experience, projects, svgData } from "./content.js";

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

experience.forEach((data) => {
  const card = document.createElement("div");
  card.className = "card bg-light";

  const cardBody = document.createElement("div");
  cardBody.className = "card-body bg-light";

  const title = document.createElement("h5");
  title.className = "card-title";
  title.textContent = data.title;

  const company = document.createElement("h5");
  company.className = "text-info";
  company.textContent = data.company;

  const date = document.createElement("h6");
  date.className = "text-info small";
  date.textContent = data.date;

  const location = document.createElement("h6");
  location.className = "text-info small";
  location.textContent = data.location;

  const description = document.createElement("p");
  description.className = "card-text";
  description.innerHTML = data.description;

  cardBody.appendChild(title);
  cardBody.appendChild(company);
  cardBody.appendChild(date);
  cardBody.appendChild(location);
  cardBody.appendChild(description);

  card.appendChild(cardBody);
  cardContainer.appendChild(card);
});

// Create the Projects list items
const projectList = document.getElementById("projectList");

projects.forEach((project) => {
  const listItem = document.createElement("li");
  listItem.className = "list-group-item text-bg-dark bg-light";

  const button = document.createElement("button");
  button.className = "btn";

  if (lightSwitch.checked) {
    button.classList.add("btn-dark");
    button.classList.add("text-white");
  } else {
    button.classList.add("btn-light");
    button.classList.add("text-dark");
  }

  button.setAttribute("type", "button");
  button.setAttribute("data-bs-toggle", "collapse");
  button.setAttribute("data-bs-target", `#${project.id}`);
  button.setAttribute("aria-expanded", "false");
  button.setAttribute("aria-controls", project.id);
  button.addEventListener("click", function () {
    toggleArrow(this);
  });

  const buttonTitle = document.createElement("h3");
  buttonTitle.className = "arrowSymbol";
  buttonTitle.innerHTML = `${project.title} ⇓`;

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

// Create the SVG elements and their links
const linksContainer = document.getElementById("links");

let svgNewDim;
if (window.innerWidth >= 768) {
  svgNewDim = 26;
} else {
  svgNewDim = 18;
}

svgData.forEach((link) => {
  const linkElement = document.createElement("div");
  linkElement.className = "col";

  const linkAnchor = document.createElement("a");
  linkAnchor.className = "btn btn-primary color-exempt";
  linkAnchor.href = link.href;
  linkAnchor.role = "button";
  linkAnchor.setAttribute("data-bs-toggle", "tooltip");
  linkAnchor.style.color = "white";
  linkAnchor.setAttribute("data-bs-title", link.tooltip);
  linkAnchor.setAttribute("data-bs-trigger", "manual");
  linkAnchor.target = "_blank";

  const iconSvg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  iconSvg.setAttribute("xmlns", "http://www.w3.org/2000/svg");
  iconSvg.setAttribute("width", svgNewDim);
  iconSvg.setAttribute("height", svgNewDim);
  iconSvg.setAttribute("fill", "currentColor");
  iconSvg.setAttribute("class", `bi ${link.icon}`);
  iconSvg.setAttribute("viewBox", `0 0 ${svgNewDim} ${svgNewDim}`);
  iconSvg.setAttribute("role", "img");
  iconSvg.setAttribute("aria-label", link.tooltip);

  const iconPath = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "path"
  );
  iconPath.setAttribute("d", link.path);
  iconPath.setAttribute("transform", `scale(${svgNewDim / link.origDim})`);
  iconSvg.appendChild(iconPath);

  linkAnchor.appendChild(iconSvg);

  linkElement.appendChild(linkAnchor);

  linksContainer.appendChild(linkElement);
});

// always display all the tooltip labels
const tooltipTriggerList = [].slice.call(
  document.querySelectorAll('[data-bs-toggle="tooltip"]')
);
const tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl);
});
tooltipList.forEach(function (tooltip) {
  tooltip.show();
  tooltip.tip.style.fontSize = Math.max(12, svgNewDim / 2) + "px";
});
