const menu = document.querySelector('.menu')
const burger = document.querySelector('.burger-menu')
console.log(burger)
menu.addEventListener('click', () => {
    console.log(1)
    toggleMenu()
})
burger.addEventListener('click', () => {
    console.log(1)
    toggleMenu()
})
const toggleMenu = () => {
    menu.classList.toggle('active')
    burger.classList.toggle('active')
}
console.log(3)

console.log(2)

var mySwiper = new Swiper('.swiper-container', {
    direction: 'horizontal',
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },
  })