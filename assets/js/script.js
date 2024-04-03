let totalSlids = document.querySelectorAll('.slider--item').length;
let currentSlid = 0;
let sliderWidth = document.querySelector('.slider').clientWidth;

document.querySelector('.slider--width').style.width = `${sliderWidth * totalSlids}px`;
document.querySelector('.slider--controls').style.width = `${sliderWidth}px`;
document.querySelector('.slider--controls').style.height = `${document.querySelector('.slider').clientHeight}px`;

const goPrev = () => {
  currentSlid--
  if (currentSlid < 0) {
    currentSlid = totalSlids - 1
  }
  upadateMargin()
}
const goNext = () => {
currentSlid++
  if (currentSlid > (totalSlids - 1)) {
    currentSlid = 0
  }
  upadateMargin()
}

const upadateMargin = () => {
  let sliderItemWidth = document.querySelector('.slider--item').clientWidth
  let newMargin = (currentSlid * sliderItemWidth)
  document.querySelector('.slider--width').style.marginLeft = `-${newMargin}px`
}

setInterval(goNext, 5000)