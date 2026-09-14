import { experience } from "../data/experience.js";

export function renderExperience() {
  const el = document.getElementById("experience-list");
  if (!el) return;

  el.innerHTML = experience.map(item => `
    <article class="experience-item reveal">
      <time>${item.period}</time>
      <div class="experience-body">
        <h3>${item.title}</h3>
        <span class="experience-org">${item.organization}</span>
        <p>${item.description}</p>
      </div>
    </article>
  `).join("");
}
