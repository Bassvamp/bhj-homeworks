const form = document.getElementById('signin__form');
const welcome = document.getElementById('welcome');
const userId = document.getElementById('user_id');

function logIn() {
  const formData = new FormData(form);
  fetch("https://students.netoservices.ru/nestjs-backend/auth", {
    method: "POST",
    body: formData,
  })
    .then((response) => response.json())
    .then((json) => {
      if (json.success === true) {
        const id = json.user_id;
        welcome.classList.add("welcome_active");
        userId.textContent = id;
        localStorage.setItem("id", id);
      }

      if (json.success === false) {
        alert("Неверный логин/пароль");
      }
    });
  form.reset();
}


if (localStorage.getItem("id")) {
  welcome.classList.add("welcome_active");
  userId.textContent = localStorage.getItem("id");
}
form.classList.add("signin_active");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (e.submitter.id === "signin__btn") {
    logIn();
  }
  if (e.submitter.id === "signout__btn") {
    localStorage.clear();
    location.reload();
  }
});


