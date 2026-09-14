import { projects } from "../data/projects.js";
export function renderProjects() {
  const el = document.getElementById("project-list");
  if (!el) return;
  el.innerHTML = projects.map(item => `
    <article class="project-card reveal">
      <div class="project-cover"><img src="${item.image}" alt="${item.title}" loading="lazy"></div>
      <div class="project-body">
        <span class="project-number">PROJECT ${item.number}</span>
        <h3>${item.title}</h3>
        <p class="project-sub">${item.subtitle}</p>
        <p>${item.summary}</p>
        <div class="project-tags">${item.tags.map(tag => `<span class="tag">${tag}</span>`).join("")}</div>
        <div class="project-links">
          <a href="${item.pageLink}">项目说明</a>
          <a href="${item.videoLink}" target="_blank" rel="noreferrer">演示视频</a>
        </div>
      </div>
    </article>
  `).join("");
}
