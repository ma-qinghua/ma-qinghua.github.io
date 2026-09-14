import { projects } from "../data/projects.js";

function createProjectCard(project) {
  const tags = project.technologies.map(item => `<span class="tag">${item}</span>`).join("");
  const highlights = project.highlights.map(item => `<li>${item}</li>`).join("");
  return `
    <article class="project-card reveal" data-project="${project.id}">
      <div class="project-image"><img src="${project.image}" alt="${project.title}" loading="lazy" /></div>
      <div class="project-content">
        <span class="project-number">PROJECT ${project.number}</span>
        <h3>${project.title}</h3>
        <p class="project-summary">${project.summary}</p>
        <div class="project-tags">${tags}</div>
        <ul class="project-highlights">${highlights}</ul>
        <a class="project-link" href="${project.link}">查看完整项目 →</a>
      </div>
    </article>`;
}

export function renderProjects() {
  const container = document.getElementById("project-list");
  if (container) container.innerHTML = projects.map(createProjectCard).join("");
}
