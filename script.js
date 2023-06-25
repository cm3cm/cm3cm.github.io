function toggleArrow(button) {
  var arrowSymbol = button.querySelector(".arrowSymbol");
  var title = arrowSymbol.innerHTML.match(/^(.*?) [⇓⇑]/)[1];

  if (arrowSymbol.innerHTML.endsWith("⇓")) {
    arrowSymbol.innerHTML = title + " ⇑";
  } else {
    arrowSymbol.innerHTML = title + " ⇓";
  }
}

const cardData = [
  {
    title: "Software Engineering Intern",
    company: "BTS Asset Management",
    date: "June 2023 — Present",
    description: `As an intern, I researched existing workflow inefficiencies,
                  and boosted employee productivity by automating
                  numerous processes. 
                  Primarily working in Python, I utilized Pandas, Numpy, 
                  and Matplotlib to save the firm hundreds of hours of 
                  work each quarter. `,
  },
  {
    title: "Software Design Intern",
    company: "Develop for Good",
    date: "May 2023 — Present",
    description: `I joined a team of 8 designers 
                  to re-design and upgrade the website for our non-profit client,
                  <a href="https://tuskegeeairmen.org/">Tuskegee Airmen, Inc.</a>
                  <br />
                  Over the course of the internship, I planned deliverables with the client,
                  performed user research, mocked and designed changes in Figma,
                  and created a far more engaging, accessible, and successful site.`,
  },
  {
    title: "Teaching Assistant: CSCI0170",
    company: "Brown University",
    date: "August 2022 — December 2022",
    description: `I worked as a TA for Brown's introductory 
                  computer sciences course, <a href="https://cs17-fall2022.github.io/">CS17</a>, which had 
                  over 100 students enrolled. 
                  During the semester, I wrote and revised course content to meet new standards.
                  <br />
                  Additionally, I led weekly CS labs for 25 students and graded their assignments and projects.
                  I assisted students one-on-one during office hours and through questions submitted online.`,
  },
  {
    title: "Software Development Intern",
    company: "NOVA Web Development",
    date: "March 2020 — September 2020",
    description: `While still in high school, I joined the software development team and quickly developed skills in Django.
                  I coded, tested, and published a graphics program (<a href="https://codeberg.org/GASP/GASP_Code">GASP</a>) for educators to use in their CS courses,
                  all as the lead developer.
                  I also participated in weekly meetings, frequently serving as a bug tester and QA.`,
  },
];

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
  company.className = "text-muted";
  company.textContent = data.company;

  const date = document.createElement("h6");
  date.className = "text-muted";
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
