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

const projects = [
  {
    id: "project1",
    title: "Caching I/O ⇓",
    imgSrc: "images/ProjectPics/caching-io.webp",
    imgAlt: "Alt for project 1 pic",
    subtitle: "Input/Output Library written in C",
    description: `
      <p>
        Designed and implemented a cache-driven file I/O library 
        for my computer systems course.
        I began with a thorough brainstorm, design, and pseudo-code process 
        to ensure I grasped the content.
        As I implemented the project, I greatly advanced my understanding of 
        C programming, memory optimization,
        and system calls.
        <br />
        The code has support for opening, closing, seeking, reading, and writing, 
        and many other useful file operations.
        Through a clever caching design, my program ran faster than the 
        standard C I/O library for certain read & write patterns.
      </p>
    `,
  },
  {
    id: "project2",
    title: "On Deck ⇓",
    imgSrc: "images/ProjectPics/on-deck.webp",
    imgAlt: "Alt for project 2 pic",
    subtitle: "Full-Stack Web App written in Java, React.js, and TypeScript",
    description: `
      <p>
        As the culminating project of my software engineering course,
        I worked on a team of 4 to create a web application with real-world use cases.
        We pitched our proposal to a mentor, received feedback, and created 
        user stories and acceptance criteria.
        After designing the proposal in Figma, we sought out user 
        feedback and made improvements.
        <br />
        Our app receives user input for their favorite sports team and 
        pulling from an ESPN API,
        produces a highly-readable calendar view of all relevant games.
        I utilized mocks, unit and integration testing, and Git.
        <br />
        Although the back-end is no longer active,
        you can check out 
        <a href="https://on-deck-375716.web.app">our front-end design</a>.
      </p>
    `,
  },
  {
    id: "project3",
    title: "Search Engine ⇓",
    imgSrc: "images/ProjectPics/search-diagram.webp",
    imgAlt: "Alt for project 3 pic",
    subtitle: "XML Parser and PageRank Algorithm written in Python",
    description: `
      <p> 
        As part of my algorithms & data structures course, my partner and I
        built a terminal-based search engine. Operating on thousands of XML 
        files in the corpus, we implemented a version of Google's PageRank 
        algorithm to optimize search results.
        <br />
        I wrote functions to index the documents, determine the relevance between 
        terms and documents, and calculate the authority of each document.
        Additionally, I programmed parsing, tokenizing, and stemming all of the 
        XML documents.
      </p>
    `,
  },
  {
    id: "project4",
    title: "Connect 4 AI ⇓",
    imgSrc: "images/ProjectPics/connect4-ai.webp",
    imgAlt: "Alt for project 4 pic",
    subtitle: "Connect 4 AI written in ReasonML",
    description: `
      <p>
        As a final project, I created a created a terminal-based
        game engine for playing the game Connect 4. 
        <br />
        Beyond supporting 2 human players, I introduced an AI opponent that
        always wins. Following the minimax algorithm, my AI 
        is guaranteed to win at any two-player, sequential, deterministic, 
        zero-sum game of perfect information. 
      </p>
    `,
  },
  {
    id: "project5",
    title: "GASP ⇓",
    imgSrc: "images/ProjectPics/gasp.webp",
    imgAlt: "Alt for project 5 pic",
    subtitle: "GASP Graphics Program written in Python",
    description: `
      <p> 
        While working as a software engineering intern at NOVA Web Development, 
        I created a Tkinter wrapper to make graphical programming accessible 
        for novice computer scientists.
        <br />
        As project lead, I programmed the majority of the Python code
        base, documented the logic, and introduced GASP to teachers in Arlington County.
        I also help design activities for teachers to use with GASP. 
      </p>
      <p>
        <a href="https://codeberg.org/GASP/GASP_Code">Check out the code here</a>.
      </p>
    `,
  },
];

export { cardData, projects };
