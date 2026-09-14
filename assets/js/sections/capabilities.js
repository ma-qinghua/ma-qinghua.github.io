import { capabilities } from "../data/capabilities.js";

export function renderCapabilities() {
  const el = document.getElementById("capability-list");
  if (!el) return;

  el.innerHTML = capabilities.map(item => `
    <article class="capability-card reveal">
      <span class="capability-index">${item.index}</span>
      <h3>${item.title}</h3>
      <p>${item.description}</p>
      <div class="capability-skills">
        ${item.skills.map(skill => `<span>${skill}</span>`).join("")}
      </div>
    </article>
  `).join("");
}
