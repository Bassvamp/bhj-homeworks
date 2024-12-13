const pollTitle = document.querySelector("#poll__title");
const pollAnswers = document.querySelector("#poll__answers");
const card = document.querySelector(".card");

fetch("https://students.netoservices.ru/nestjs-backend/poll")
  .then((response) => response.json())
  .then((json) => {
    const { title, answers } = json.data;
    pollTitle.textContent = `${title}`;
    for (let item in answers) {
      const btn = `<button class="poll__answer">
                        ${answers[item]}
                   </button>`;
      pollAnswers.insertAdjacentHTML("beforeend", btn);
    }

    pollAnswers.addEventListener("click", (e) => {
      alert("Спасибо, ваш голос очень важен для нас.");
      const index = answers.indexOf(e.target.textContent.trim());

      fetch("https://students.netoservices.ru/nestjs-backend/poll", {
        method: "POST",
        body: `vote=${json.id}&answer=${index}`,
        headers: {
          "Content-type": "application/x-www-form-urlencoded",
        },
      })
        .then((response) => response.json())
        .then((json) => {
          pollAnswers.classList.remove("poll__answers_active");
          let sum = 0;
          for (let i = 0; i < json.stat.length; i++) {
            sum += json.stat[i].votes;
          }

          for (let item in json.stat) {
            const percent = (json.stat[item].votes / sum) * 100;
            const statItem = `<div class="item">
                                <div class="item__answer">
                                ${json.stat[item].answer}: ${percent.toFixed(2)}%
                                </div>
                            </div>`;
            card.insertAdjacentHTML("beforeend", statItem);
          }

        setTimeout(() => location.reload(), 5000)
        });
    });
  });
