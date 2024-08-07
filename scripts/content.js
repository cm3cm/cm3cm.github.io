export const experience = [
  {
    title: "Software Engineering Intern",
    company: "Chicago Cubs",
    date: "June 2024 — August 2024",
    location: "Chicago, IL",
    description: `
                  I joined the Cubs Baseball Systems team, part of the Cubs R&D department.
                  I built software for internal baseball operations projects, such as
                  designing a new internal webpage for our catching coaches to share and evaluate in
                  advanced baseball analytics through dynamic tables and charts.
                  I also worked with the Analytics department to improve our internal models for defense.
                  <br />
                  Primarily I worked in React and Redux, while occassionally programming with Angular.
                  All my front-end code came with a suite of Jest tests.
                  I scripted PostgresSQL queries and Python modules to expand our automated data flow to our databases and caches.
                  Additionally, I developed programs to ingest and normalize data from our 3rd-party partners.
                  Throughout this, I followed an Agile process and frequently checked in with my shareholders.
                  `,
  },
  {
    title: "Software Engineering Intern",
    company: "BTS Asset Management",
    date: "June 2023 — September 2023",
    location: "Lincoln, MA",
    description: `As an intern, I researched existing workflow inefficiencies
                  and boosted employee productivity by automating
                  numerous processes. 
                  Primarily working in Python, I utilized Pandas, NumPy, 
                  and Matplotlib to save the firm over one hundred hours of 
                  work each quarter.
                  I accessed financial data through API calls, processed
                  and analyzed the information, and produced descriptive
                  charts, Excel files, and tables for internal and marketing use.
                  <br />
                  I	engineered a web application to display and evaluate
                  technical analysis investment models with a Python & Django
                  back end and JavaScript & React.js front end,
                  including developing a REST API.
                  <br />
                  I spearheaded these two project for the financial firm and 
                  collaborated with non-technical employees to ensure
                  their goals were achieved.
                  `,
  },
  {
    title: "Software Design Intern",
    company: "Develop for Good",
    date: "May 2023 — August 2023",
    location: "Remote",
    description: `I joined a team of 8 designers 
                  to re-design and upgrade the website for our non-profit client,
                  <a href="https://tuskegeeairmen.org/">Tuskegee Airmen, Inc.</a>
                  <br />
                  Throughout the internship, I planned deliverables with the client
                  and my team.
                  I conducted user research, such as card sorting tests, to identify shortcomings and 
                  areas for improvement in the existing site's design and UX, 
                  then ameliorated these issues and followed up with the research subjects.
                  In Figma, I created wireframes, mock-ups, prototypes, and re-usable elements.
                  I implemented responsive web design and improved page navigation.
                  My final design proved 40% faster for common user journeys than the
                  existing design. 
                  To bolster their social media presence, I introduced templates 
                  they could utilize for recurring posts 
                  (event announcements, member spotlights, organization news, etc.),
                  styled in accordance with their brand guidelines. 
                  `,
  },
  {
    title: "Teaching Assistant: CSCI0170",
    company: "Brown University",
    date: "August 2022 — December 2022",
    location: "Providence, RI",
    description: `I worked as a TA for Brown's introductory 
                  computer science course, <a href="https://cs17-fall2022.github.io/">CS17</a>,
                  with over 100 students enrolled. 
                  During the semester, I wrote and revised course content to meet new standards.
                  I met weekly with my colleagues and the professor to assess the curriculum
                  and prepare upcoming material. 
                  <br />
                  Additionally, I led weekly CS labs for 25 students and promptly graded their assignments and projects.
                  I assisted students one-on-one during office hours and through questions submitted online.`,
  },
  {
    title: "Software Development Intern",
    company: "NOVA Web Development",
    date: "March 2020 — September 2020",
    location: "Arlington, VA",
    description: `While still in high school, I joined the software development team and quickly developed skills in Django.
                  I coded, tested, and published a graphics program (<a href="https://codeberg.org/GASP/GASP_Code">GASP</a>) for educators to use in their CS courses,
                  all as the lead developer. 
                  I followed OOP principles and test-driven development, ensuring
                  a thorough test suite. 
                  I wrote the documentation and a how-to guide for teachers to introduce GASP in their classes.
                  <br />
                  The program is now available for download on 
                  <a href="https://pypi.org/project/gasp/">PyPI</a> 
                  and receives aproximately 100 downloads each month. 
                  I also participated in weekly meetings, frequently serving as a bug tester and QA.`,
  },
];

export const projects = [
  {
    id: "project0",
    title: "Go Deep!",
    imgSrc: "images/ProjectPics/go-deep.webp",
    imgAlt: "Alt for project 0 pic",
    subtitle: "Deep Neural Network Machine Learning Project",
    description: `
      <p>
        Working in a team, we modified an existing paper called DeepQB
        that aims to bring deep learning techniques to football analytics,
        primarily looking at how quarterbacks
        make split-second decisions on the field.
        Our model was trained for 10 epochs with a batch size of 128 and the Adam optimizer at a learning rate of 0.001.
        After training, our model which uses softmax activation to represent the receiver target variant,
        achieved a validation accuracy of over 40% and a validation loss of approximately 1.
        This performance was twice as successful as a naive implementation.
      </p>
    `,
  },
  {
    id: "project1",
    title: "Caching I/O",
    imgSrc: "images/ProjectPics/caching-io.webp",
    imgAlt: "Alt for project 1 pic",
    subtitle: "Input/Output Library written in C",
    description: `
      <p>
        Designed and implemented a cache-driven file I/O library 
        for my computer systems course.
        I began with a thorough brainstorming, design, and pseudo-code process 
        to ensure I grasped the content.
        As I implemented the project, I greatly advanced my understanding of 
        C programming, memory optimization,
        and system calls.
        <br />
        The code has support for opening, closing, seeking, reading, writing, 
        and many other useful file operations.
        Through a clever caching design, my program ran faster than the 
        standard C I/O library for certain read & write patterns.
      </p>
    `,
  },
  {
    id: "project2",
    title: "On Deck",
    imgSrc: "images/ProjectPics/on-deck.webp",
    imgAlt: "Alt for project 2 pic",
    subtitle: "Full-Stack Web App written in Java, React.js, and TypeScript",
    description: `
      <p>
        As the culminating project of my software engineering course,
        I worked in a team of 4 to create a web application with real-world use cases.
        We pitched our proposal to a mentor, received feedback, and created 
        user stories and acceptance criteria.
        After designing the app with wireframes in Figma, we sought out user 
        feedback and made improvements for accessibility.
        <br />
        Our app receives user input for their favorite sports team and, by 
        pulling from an ESPN API,
        produces a highly-readable calendar view of the all relevant games.
        I utilized mocks, object-oriented programming, 
        unit and integration testing, and Git.
        Since I was programming in a team, I had to manage our
        deliverables schedule, coordinate between front-end and back-end, 
        and spearhead the final presentation to our mentor. 
        <br />
        Although the back-end is no longer active,
        you can check out 
        <a href="https://on-deck-375716.web.app">our front-end design</a>.
      </p>
    `,
  },
  {
    id: "project3",
    title: "Search Engine",
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
    title: "Connect 4 AI",
    imgSrc: "images/ProjectPics/connect4-ai.webp",
    imgAlt: "Alt for project 4 pic",
    subtitle: "AI Guaranteed to Win written in ReasonML",
    description: `
      <p>
        As a final project, I created a terminal-based
        game engine for playing the game Connect 4. 
        <br />
        Beyond supporting 2 human players, I introduced an AI opponent that
        always wins—I could never beat it! Utilizing the minimax algorithm, my AI 
        is guaranteed to win at any two-player, sequential, deterministic, 
        zero-sum game of perfect information. 
      </p>
    `,
  },
  {
    id: "project5",
    title: "GASP",
    imgSrc: "images/ProjectPics/gasp.webp",
    imgAlt: "Alt for project 5 pic",
    subtitle: "Graphics API for Students of Python written in Python",
    description: `
      <p> 
        While working as a software engineering intern at NOVA Web Development, 
        I created a Tkinter wrapper to make graphical programming accessible 
        for novice computer scientists.
        The project receives approximately 100 downloads each month from PyPI.
        I collaborated with my manager and another
        intern through Git branches, merging, issues, and pull requests. 
        <br />
        As the project lead, I programmed the majority of the Python code
        base, documented the logic, and introduced GASP to teachers in Arlington County.
        I also helped design activities for teachers to use with GASP. 
      </p>
      <p>
        <a href="https://codeberg.org/GASP/GASP_Code">Check out the code here</a>.
      </p>
    `,
  },
];

export const svgData = [
  {
    href: "resources/CalebMoran-resume.pdf",
    icon: "bi-file-earmark-pdf-fill",
    label: "Resume",
    tooltip: "Resume",
    path: "M41.5,0H6.9v64h50.1V15.6L41.5,0z M42.1,3.6l11.3,11.3H42.1V3.6z M9.1,61.9V2.1H40v14.9h14.9v44.8 H9.1z M36.8,39.5c0.6,0,1.1-0.5,1.1-1.1c0-0.6-0.5-1.1-1.1-1.1H18.7c-0.6,0-1.1,0.5-1.1,1.1c0,0.6,0.5,1.1,1.1,1.1H36.8z M47.5,32 H40c-0.6,0-1.1,0.5-1.1,1.1s0.5,1.1,1.1,1.1h7.5c0.6,0,1.1-0.5,1.1-1.1S48.1,32,47.5,32z M22.9,33.1c0,0.6,0.5,1.1,1.1,1.1h10.7 c0.6,0,1.1-0.5,1.1-1.1S35.3,32,34.7,32H24C23.4,32,22.9,32.5,22.9,33.1z M17.9,32.3c-0.2,0.2-0.3,0.5-0.3,0.8 c0,0.3,0.1,0.6,0.3,0.7c0.2,0.2,0.5,0.3,0.8,0.3s0.6-0.1,0.8-0.3c0.2-0.2,0.3-0.5,0.3-0.8c0-0.3-0.1-0.6-0.3-0.8 C19,31.9,18.3,31.9,17.9,32.3z M41.4,37.6c-0.2,0.2-0.3,0.5-0.3,0.8c0,0.3,0.1,0.6,0.3,0.8c0.2,0.2,0.5,0.3,0.8,0.3s0.6-0.1,0.8-0.3 c0.2-0.2,0.3-0.5,0.3-0.8c0-0.3-0.1-0.6-0.3-0.8C42.5,37.2,41.8,37.2,41.4,37.6z M46.7,37.6c-0.2,0.2-0.3,0.5-0.3,0.8 c0,0.3,0.1,0.6,0.3,0.8c0.2,0.2,0.5,0.3,0.8,0.3c0.3,0,0.6-0.1,0.8-0.3c0.2-0.2,0.3-0.5,0.3-0.7c0-0.3-0.1-0.6-0.3-0.8 C47.8,37.2,47.1,37.2,46.7,37.6z M24.6,42.8c-2.3,1.2-3.1,3.5-3.4,6c-0.4-0.4-0.9-0.7-1.3-1.1c-1-0.9-2.6,0.6-1.5,1.5 c1,0.8,2,1.7,3,2.5c0.7,0.6,1.8,0.2,1.8-0.8c0.1-2.3,0.2-5.1,2.5-6.3C26.9,44.1,25.8,42.2,24.6,42.8z M38.9,47 c-1.6-0.1-3.8,2.3-5,0.2c-0.3-0.5-1-0.7-1.5-0.4c-1.5,0.9-3.5,2.3-5.1,0.5c-0.9-1-2.4,0.5-1.5,1.5c2,2.2,4.6,1.5,6.8,0.3 c0.5,0.6,1.1,1,2,1.2c0.8,0.2,4.3-1.2,4.5-1c0.8,1.1,2.7,0,1.8-1.1C40.4,47.5,39.9,47.1,38.9,47z M30.6,25.6l0.7-0.5l-0.4-0.8 c-0.3-0.7-0.9-1.3-1.5-1.6l-2.3-1.2c1-0.7,1.8-1.7,2.2-3c0.7-0.4,1.2-1.2,1.2-2.1v-0.7c0-0.7-0.3-1.4-0.8-1.9 c-0.4-2-1.8-4.2-5.9-4.2c-0.2,0-0.3,0-0.5,0c-0.6,0-1.4,0-2.1-0.5c-0.3-0.2-0.5-0.4-0.6-0.5c-0.3-0.4-0.9-0.6-1.4-0.4 c-0.5,0.2-0.8,0.7-0.7,1.3c0,0.3,0.1,0.6,0.1,0.9c0.1,0.4,0.1,0.6,0.1,0.6c0,0-0.1,0.2-0.1,0.3c-0.1,0.2-0.2,0.4-0.3,0.6 c-0.2,0.6-0.4,1.2-0.5,1.8c-0.5,0.5-0.8,1.1-0.8,1.8v0.7c0,0.9,0.5,1.7,1.2,2.1c0.4,1.3,1.2,2.3,2.2,3l-2.4,1.2 c-0.7,0.4-1.2,0.9-1.5,1.6L16.3,25l0.7,0.5c2,1.4,4.4,2.2,6.8,2.2C26.2,27.7,28.6,27,30.6,25.6z M19.2,24.4l2.6-1.3 c0.6-0.3,0.9-0.8,0.9-1.4v-1.5l-0.6-0.3c-1-0.4-1.6-1.2-1.9-2.5L20,16.9l-0.6-0.2c-0.1,0-0.3-0.2-0.3-0.3v-0.7 c0-0.2,0.1-0.3,0.2-0.3l0.5-0.3l0.1-0.6c0.1-0.6,0.2-1.2,0.4-1.7c0.1-0.2,0.2-0.4,0.2-0.5c0.2-0.4,0.3-0.6,0.3-0.9 c0.8,0.3,1.7,0.5,2.6,0.4c0.1,0,0.2,0,0.3,0c3.1,0,3.7,1.4,3.9,2.8l0.1,0.6l0.5,0.3c0.1,0.1,0.2,0.2,0.2,0.3v0.7 c0,0.2-0.1,0.3-0.3,0.3l-0.6,0.2l-0.2,0.6c-0.3,1.2-1,2.1-1.9,2.5l-0.6,0.3v1.5c0,0.6,0.3,1.2,0.9,1.4l2.6,1.3 C25.5,26,22,26,19.2,24.4z",
    origDim: 64,
  },
  {
    href: "https://www.linkedin.com/in/caleb-moran/",
    icon: "bi-linkedin",
    label: "LinkedIn",
    tooltip: "LinkedIn",
    path: "M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z",
    origDim: 16,
  },
  {
    href: "mailto:caleb_moran@brown.edu",
    icon: "bi-envelope",
    label: "Email",
    tooltip: "Email",
    path: "M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z",
    origDim: 16,
  },
  {
    href: "https://github.com/cm3cm",
    icon: "bi-github",
    label: "GitHub",
    tooltip: "GitHub",
    path: "M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z",
    origDim: 16,
  },
];
