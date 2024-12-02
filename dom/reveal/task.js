const reveal = document.querySelectorAll('.reveal');

function isVisible (el) {
    el.forEach(elem => {const { top } = elem.getBoundingClientRect();
    if(top < window.innerHeight) {
        elem.classList.add('reveal_active')
        }
    })

}

window.addEventListener('scroll', () => {isVisible(reveal)})