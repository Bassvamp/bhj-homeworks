const bookControl = document.querySelector('.book__control_font-size');
const fontSize = document.querySelectorAll('.font-size');
const bookContent = document.querySelector('.book__content');

bookControl.addEventListener('click', (e) => {
    e.preventDefault();
    fontSize.forEach(el => el.classList.remove('font-size_active'))
    e.target.classList.add('font-size_active');

    if(e.target.classList.contains('font-size_small')) {
        bookContent.classList.remove('font-size_big')
        bookContent.classList.add('font-size_small')
    } else if(e.target.classList.contains('font-size_big')) {
        bookContent.classList.add('font-size_big')
    } else {
        bookContent.classList.remove('font-size_big')
        bookContent.classList.remove('font-size_small')
    }
})