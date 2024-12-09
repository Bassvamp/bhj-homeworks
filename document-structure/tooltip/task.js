const tooltip = document.querySelectorAll(".has-tooltip");

tooltip.forEach((el) => {
  const div = document.createElement("div");
  el.insertAdjacentElement("afterend", div);
  div.classList.add("tooltip");
  div.innerText = el.title;
  el.addEventListener("click", (event) => {
    event.preventDefault();
    const { top } = el.getBoundingClientRect();
    const tips = document.querySelectorAll(".tooltip");
    if (!div.classList.contains("tooltip_active")) {
      tips.forEach((tip) => tip.classList.remove("tooltip_active"));
    }
    if (top < window.innerHeight) {
      div.classList.toggle("tooltip_active");
      div.setAttribute("style", "left: 200px; top: 200px");
    }
  });
});
