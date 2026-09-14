import { initNavigation } from './navigation.js';
import { initReveal } from './reveal.js';
import { renderSkills } from './sections/skills.js';
import { renderProjects } from './sections/projects.js';
import { renderPapers } from './sections/papers.js';

document.addEventListener('DOMContentLoaded', () => {
  renderSkills();
  renderProjects();
  renderPapers();
  initNavigation();
  requestAnimationFrame(initReveal);
});
