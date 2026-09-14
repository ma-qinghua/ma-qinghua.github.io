import { skills } from "../data/skills.js";
export function renderSkills() {
  const el = document.getElementById("skill-list");
  if (!el) return;
  el.innerHTML = skills.map(item => `
    <article class="skill-card reveal">
      <span class="num">${item.index}</span>
      <h3>${item.title}</h3>
      <p>${item.description}</p>
      <div class="skill-tags">${item.tags.map(tag => `<span class="tag">${tag}</span>`).join("")}</div>
    </article>
  `).join("");
}
