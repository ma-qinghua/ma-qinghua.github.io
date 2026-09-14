import { articles } from "../data/articles.js";

export function renderArticles() {
  const container = document.getElementById("article-list");
  if (!container) return;
  container.innerHTML = articles.map(item => `
    <a class="article reveal" href="${item.url}">
      <time>${item.date}</time>
      <div><h3>${item.title}</h3><p>${item.category}</p></div>
      <span>↗</span>
    </a>`).join("");
}
