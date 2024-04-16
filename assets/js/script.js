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


// Script do mode black

const mode = document.getElementById('mode-icon')

mode.addEventListener('click', () => {
  const body = document.getElementById('modeDark')

  if (mode.classList.contains('fa-moon')) {
    mode.classList.remove('fa-moon')
    mode.classList.add('fa-sun')
    
    body.classList.add('dark')
    return
  }
  
  mode.classList.remove('fa-sun')
  mode.classList.add('fa-moon')

  body.classList.remove('dark')
})


// Script do meu 
const meuShow = () => {
  let menuMobile = document.querySelector('.menu-mobile')

  if (menuMobile.classList.contains('open')) {
    menuMobile.classList.remove('open')
    document.querySelector('.icon').src = "assets/img/icons/menu_white_36dp.svg"
    
  } else {
    menuMobile.classList.add('open')
    document.querySelector('.icon').src = "assets/img/icons/close_white_36dp.svg"
  }
}