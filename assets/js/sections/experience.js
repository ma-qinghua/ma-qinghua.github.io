import { experience } from "../data/experience.js";

export function renderExperience() {
  const container = document.getElementById("experience-list");
  if (!container) return;
  container.innerHTML = experience.map(item => `
    <article class="timeline-item reveal">
      <time>${item.period}</time>
      <div class="timeline-body"><h3>${item.title}</h3><p>${item.description}</p></div>
    </article>`).join("");
}
