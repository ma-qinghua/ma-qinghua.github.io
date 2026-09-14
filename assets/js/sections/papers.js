import { papers } from "../data/papers.js";
export function renderPapers() {
  const el = document.getElementById("paper-list");
  if (!el) return;
  el.innerHTML = papers.map(item => `
    <article class="paper-card reveal">
      <img src="${item.image}" alt="${item.title} 论文封面" loading="lazy">
      <div class="paper-body">
        <h3>${item.title}</h3>
        <p>${item.meta}</p>
        <a href="${item.link}" ${item.link !== '#' ? 'target="_blank" rel="noreferrer"' : ''}>查看论文 ↗</a>
      </div>
    </article>
  `).join("");
}
