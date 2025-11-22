const imgDog = document.querySelector('.doggy');
const inpRangeWidth = document.querySelector('.inpRangeWidth');

inpRangeWidth.addEventListener('input', _.debounce(() => {
    imgDog.style.width = `${inpRangeWidth.value * 4.2}px`;
}, 300),)