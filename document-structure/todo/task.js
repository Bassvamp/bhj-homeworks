const form = document.getElementById("tasks__form");
const taskList = document.getElementById("tasks__list");
const taskInput = document.getElementById("task__input");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const task = `<div class="task">
    <div class="task__title">${taskInput.value}</div>
    <a href="#" class="task__remove">&times;</a>
    </div>`;
  taskList.insertAdjacentHTML("afterbegin", task);
  const taskRemove = document.querySelector(".task");
  taskRemove.addEventListener("click", (e) => {
    e.preventDefault();
    e.target.parentElement.remove();
  });
});
