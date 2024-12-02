const rotatorCase = document.querySelectorAll('.rotator__case');
let index;
for(let i = 0; i < rotatorCase.length; i++) {
    if(rotatorCase[i].classList.contains('rotator__case_active')){
    index = i;
    }}

function rotator () {

    if((index) < (rotatorCase.length - 1)) {
        rotatorCase[index].classList.remove('rotator__case_active');
        rotatorCase[index + 1].classList.add('rotator__case_active');
        index++;
    } else {
        index = 0;
        rotatorCase[rotatorCase.length - 1].classList.remove('rotator__case_active');
        rotatorCase[index].classList.add('rotator__case_active');
    }
        
}


setInterval(() => rotator (), 1000);
