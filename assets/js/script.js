let totalSlids = document.querySelectorAll('.slider--item').length;
let currentSlid = 0

document.querySelector('.slider--width').style.width = `calc(100vw * ${totalSlids})`;
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
  let newMargin = (currentSlid * document.body.clientWidth)
  document.querySelector('.slider--width').style.marginLeft = `-${newMargin}px`
}

setInterval(goNext, 3000)