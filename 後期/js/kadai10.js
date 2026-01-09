const slider = document.querySelector('#slider');
const sliderItems = slider.querySelectorAll('li');

let currentIndex = 0;
let nextIndex = 0;

sliderItems[currentIndex].classList.add('show');

setInterval(() => {
    if (nextIndex < sliderItems.length) {
        sliderItems[currentIndex].classList.toggle('show');
        sliderItems[nextIndex].classList.toggle('show');
        currentIndex = nextIndex;
        nextIndex = currentIndex + 1;
    } else {
        nextIndex = 0;
    }
    // sliderItems[currentIndex].classList.remove('show');
    // sliderItems[nextIndex].classList.add('show');
}, 3000);