import style from "./styles/style.css";
import media from "./styles/mediaQuery.css"

import renderProjects from "./apps/addProjects";
import addShowNavEvent from "./apps/navScript";

// Render projects on the DOM
renderProjects();

// Add event to nav button
addShowNavEvent();
