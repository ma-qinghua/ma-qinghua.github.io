import { articles } from "../data/articles.js";

export function renderArticles() {
  const el = document.getElementById("article-list");
  if (!el) return;

  el.innerHTML = articles.map(article => `
    <a class="article-row reveal" href="${article.url}">
      <time>${article.date}</time>
      <div>
        <h3>${article.title}</h3>
        <p>${article.category}</p>
      </div>
      <span>↗</span>
    </a>
  `).join("");
}
