const tabNavigation = document.querySelector(".tab__navigation");
const tab = document.querySelectorAll('.tab');
const content = document.querySelectorAll('.tab__content')

tabNavigation.addEventListener('click', (e) => {
    tab.forEach(t => t.classList.remove('tab_active'));
    const index = Array.from(tab).indexOf(e.target);
    e.target.classList.add('tab_active');
    content.forEach(c => c.classList.remove('tab__content_active'));
    content[index].classList.add('tab__content_active');
}
)