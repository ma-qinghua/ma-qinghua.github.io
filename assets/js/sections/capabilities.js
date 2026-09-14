import { capabilities } from "../data/capabilities.js";

export function renderCapabilities() {
  const container = document.getElementById("capability-list");
  if (!container) return;
  container.innerHTML = capabilities.map((item,index) => `
    <article class="capability-card reveal">
      <span class="capability-index">${String(index + 1).padStart(2,"0")}</span>
      <h3>${item.title}</h3>
      <p>${item.description}</p>
      <div class="skill-list">${item.skills.map(skill => `<span>${skill}</span>`).join("")}</div>
    </article>`).join("");
}
