const h2 = document.querySelector("h2");
const p = document.querySelector("p");
const button = document.querySelector("button");

document.addEventListener("scroll", () => {
  const viewportheight = window.innerHeight - 100;
  const h2top = h2.getBoundingClientRect().top;
  const ptop = p.getBoundingClientRect().top;
  const buttontop = button.getBoundingClientRect().top;

  if (h2top < viewportheight) {
    h2.classList.add("scroll");
  }
  if (ptop < viewportheight) {
    p.classList.add("scroll");
  }
  if (buttontop < viewportheight) {
    button.classList.add("scroll");
  }
});
