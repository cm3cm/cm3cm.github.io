(function () {
  let lightSwitch = document.getElementById("lightSwitch");
  if (!lightSwitch) {
    return;
  }

  function setAriaChecked(value) {
    let switchIcon = document.getElementById("switchIcon");
    if (!switchIcon) {
      return;
    }
    switchIcon.setAttribute("aria-checked", value);
  }

  function darkMode() {
    setAriaChecked("true");

    document.querySelectorAll(".list-group-item").forEach((element) => {
      element.classList.remove("bg-light");
      element.classList.add("bg-dark");
      element.classList.remove("text-dark");
      element.classList.add("text-light");
    });

    document.querySelectorAll(".btn:not(.color-exempt)").forEach((element) => {
      // don't select the resume/linkedin/github/email link buttons
      element.classList.remove("btn-light");
      element.classList.add("btn-dark");
      element.classList.remove("text-dark");
      element.classList.add("text-white");
    });

    document.querySelectorAll(".text-white").forEach((element) => {
      element.classList.remove("text-white");
      element.classList.add("text-dark");
    });

    document.querySelectorAll(".bg-light").forEach((element) => {
      element.className = element.className.replace(/-light/g, "-dark");
    });

    document.querySelectorAll(".link-dark").forEach((element) => {
      element.className = element.className.replace(/link-dark/, "text-white");
    });

    document.body.classList.add("bg-dark");

    if (document.body.classList.contains("text-dark")) {
      document.body.classList.replace("text-dark", "text-light");
    } else {
      document.body.classList.add("text-light");
    }

    // Tables
    var tables = document.querySelectorAll("table");
    for (var i = 0; i < tables.length; i++) {
      // add table-dark class to each table
      tables[i].classList.add("table-dark");
    }

    // set light switch input to true
    if (!lightSwitch.checked) {
      lightSwitch.checked = true;
    }
    localStorage.setItem("lightSwitch", "dark");
  }

  function lightMode() {
    setAriaChecked("false");

    document.querySelectorAll(".list-group-item").forEach((element) => {
      element.classList.remove("bg-dark");
      element.classList.add("bg-light");
      element.classList.remove("text-light");
      element.classList.add("text-dark");
    });

    document.querySelectorAll(".btn:not(.color-exempt)").forEach((element) => {
      // don't select the resume/linkedin/github/email link buttons
      element.classList.remove("btn-dark");
      element.classList.add("btn-light");
      element.classList.remove("text-white");
      element.classList.add("text-dark");
    });

    document.querySelectorAll(".text-dark").forEach((element) => {
      element.classList.remove("text-dark");
      element.classList.add("text-white");
    });

    document.querySelectorAll(".bg-dark").forEach((element) => {
      element.className = element.className.replace(/-dark/g, "-light");
    });

    document.querySelectorAll(".text-white").forEach((element) => {
      element.className = element.className.replace(/text-white/, "link-dark");
    });

    document.body.classList.add("bg-light");

    if (document.body.classList.contains("text-light")) {
      document.body.classList.replace("text-light", "text-dark");
    } else {
      document.body.classList.add("text-dark");
    }

    // Tables
    var tables = document.querySelectorAll("table");
    for (var i = 0; i < tables.length; i++) {
      if (tables[i].classList.contains("table-dark")) {
        tables[i].classList.remove("table-dark");
      }
    }

    if (lightSwitch.checked) {
      lightSwitch.checked = false;
    }
    localStorage.setItem("lightSwitch", "light");
  }

  function onToggleMode() {
    if (lightSwitch.checked) {
      darkMode();
    } else {
      lightMode();
    }
  }

  function getSystemDefaultTheme() {
    const darkThemeMq = window.matchMedia("(prefers-color-scheme: dark)");
    if (darkThemeMq.matches) {
      return "dark";
    }
    return "light";
  }

  function setup() {
    var settings = localStorage.getItem("lightSwitch");
    if (settings == null) {
      settings = getSystemDefaultTheme();
    }

    if (settings == "dark") {
      lightSwitch.checked = true;
    }

    lightSwitch.addEventListener("change", onToggleMode);
    onToggleMode();
  }

  setup();
})();
