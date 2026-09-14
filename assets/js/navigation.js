export function initNavigation() {
  const button = document.getElementById("menu-button");
  const nav = document.getElementById("main-nav");
  if (!button || !nav) return;
  button.addEventListener("click", () => {
    const open = nav.classList.toggle("open");
    button.textContent = open ? "×" : "☰";
    button.setAttribute("aria-expanded", String(open));
  });
  nav.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
    nav.classList.remove("open");
    button.textContent = "☰";
    button.setAttribute("aria-expanded", "false");
  }));
}
