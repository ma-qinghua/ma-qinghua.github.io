import { initNavigation } from "./navigation.js";
import { initReveal } from "./reveal.js";
import { renderProjects } from "./sections/projects.js";
import { renderCapabilities } from "./sections/capabilities.js";
import { renderExperience } from "./sections/experience.js";
import { renderArticles } from "./sections/writing.js";

function init() {
  renderProjects();
  renderCapabilities();
  renderExperience();
  renderArticles();
  initNavigation();
  requestAnimationFrame(initReveal);
}

document.addEventListener("DOMContentLoaded", init);
