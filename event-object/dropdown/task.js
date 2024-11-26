const dropDownList = document.querySelector(".dropdown__list");
const dropDown = document.querySelector(".dropdown");
const dropDownValue = document.querySelector(".dropdown__value");
dropDown.addEventListener('click', (e) => {
    dropDownList.classList.toggle('dropdown__list_active');
    e.preventDefault();
    dropDownValue.textContent = e.target.textContent;
    e = () => dropDownList.classList.remove('dropdown__list_active');
})
