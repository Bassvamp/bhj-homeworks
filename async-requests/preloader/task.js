const loader = document.querySelector('#loader');
const items = document.querySelector('#items');

fetch("https://students.netoservices.ru/nestjs-backend/slow-get-courses")
  .then((response) => response.json())
  .then((json) => {
    loader.classList.remove("loader_active");

    const valutes = json.response.Valute;

    for (let i = 0; i < Object.keys(valutes).length; i++) {
        const { CharCode, Value } = Object.values(valutes)[i];
        console.log(CharCode, Value);
        const add = `<div class="item">
                        <div class="item__code">
                            ${CharCode}
                        </div>
                        <div class="item__value">
                            ${Value}
                        </div>
                        <div class="item__currency">
                            руб.
                        </div>
                    </div>`; 
        items.insertAdjacentHTML("beforeend", add);
    }
  });