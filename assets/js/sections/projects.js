import { projects } from "../data/projects.js";

function renderCard(project) {
  const tags = project.technologies.map(x => `<span class="tag">${x}</span>`).join("");
  const results = project.results.map(([value, label]) => `
    <div><strong>${value}</strong><span>${label}</span></div>
  `).join("");

  return `
    <article class="project-card reveal">
      <div class="project-visual">
        <img src="${project.image}" alt="${project.title} 项目示意图" loading="lazy" />
        <span class="project-badge">${project.badge}</span>
      </div>
      <div class="project-content">
        <span class="project-number">PROJECT ${project.number}</span>
        <h3>${project.title}</h3>
        <p class="project-subtitle">${project.subtitle}</p>
        <p class="project-summary">${project.summary}</p>
        <div class="project-tags">${tags}</div>
        <div class="project-results">${results}</div>
        <a class="project-link" href="${project.link}">查看完整项目 →</a>
      </div>
    </article>
  `;
}

export function renderProjects() {
  const el = document.getElementById("project-list");
  if (!el) return;
  el.innerHTML = projects.map(renderCard).join("");
}
