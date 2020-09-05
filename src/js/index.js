


const menu = document.querySelector('.menu')
const burger = document.querySelector('.burger-menu')
const body = document.querySelector('body')
const playVideo = document.querySelector('.play')

const toggleMenu = () => {
    menu.classList.toggle('active')
    burger.classList.toggle('active')
    body.classList.toggle('overflow')
}

menu.addEventListener('click', () => {
    toggleMenu()
})
burger.addEventListener('click', () => {
    toggleMenu()
})



const mySwiper = new Swiper('.swiper-container', {
    direction: 'horizontal',
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },
  })

playVideo.addEventListener('click', () => {
    console.log('123')
})




// const getPortfolio = () => {
//     return fetch('http://localhost:3000/portfolio')
//     .then(response => response.json())
//     .then(portfolio => portfolio)
// }

