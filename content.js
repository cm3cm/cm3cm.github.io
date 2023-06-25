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

const svgData = [
  {
    href: "resources/CalebMoran-resume.pdf",
    icon: "bi-file-earmark-pdf-fill",
    label: "Resume",
    tooltip: "Resume",
    path: "M4 0h5.293A1 1 0 0 1 10 .293L13.707 4a1 1 0 0 1 .293.707V14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2zm5.5 1.5v2a1 1 0 0 0 1 1h2l-3-3zM4.165 13.668c.09.18.23.343.438.419.207.075.412.04.58-.03.318-.13.635-.436.926-.786.333-.401.683-.927 1.021-1.51a11.651 11.651 0 0 1 1.997-.406c.3.383.61.713.91.95.28.22.603.403.934.417a.856.856 0 0 0 .51-.138c.155-.101.27-.247.354-.416.09-.181.145-.37.138-.563a.844.844 0 0 0-.2-.518c-.226-.27-.596-.4-.96-.465a5.76 5.76 0 0 0-1.335-.05 10.954 10.954 0 0 1-.98-1.686c.25-.66.437-1.284.52-1.794.036-.218.055-.426.048-.614a1.238 1.238 0 0 0-.127-.538.7.7 0 0 0-.477-.365c-.202-.043-.41 0-.601.077-.377.15-.576.47-.651.823-.073.34-.04.736.046 1.136.088.406.238.848.43 1.295a19.697 19.697 0 0 1-1.062 2.227 7.662 7.662 0 0 0-1.482.645c-.37.22-.699.48-.897.787-.21.326-.275.714-.08 1.103z",
  },
  {
    href: "https://www.linkedin.com/in/caleb-moran/",
    icon: "bi-linkedin",
    label: "LinkedIn",
    tooltip: "LinkedIn",
    path: "M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z",
  },
  {
    href: "mailto:caleb_moran@brown.edu",
    icon: "bi-envelope",
    label: "Email",
    tooltip: "Email",
    path: "M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z",
  },
  {
    href: "https://github.com/cm3cm",
    icon: "bi-github",
    label: "GitHub",
    tooltip: "GitHub",
    path: "M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z",
  },
];

export { cardData, projects, svgData };
