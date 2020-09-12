const menu = document.querySelector('.menu')
const burger = document.querySelector('.burger-menu')
const body = document.querySelector('body')
const playVideo = document.querySelector('.play')

const form = document.getElementById('contact-form')
const name = document.getElementById('name')
const email = document.getElementById('email')
const subject = document.getElementById('subject')
const budget = document.getElementById('budget')
const message = document.getElementById('message')

// Mobil menu
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

// Slider
const mySwiper = new Swiper('.swiper-container', {
    direction: 'horizontal',
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },
  })

// Contact form
form.addEventListener('submit', (e) => {
    e.preventDefault()

    checkInputs()
})
const checkInputs = () => {
    const nameValue = name.value.trim()
    const emailValue = email.value.trim()
    const subjectValue = subject.value.trim()
    const budgetValue = budget.value.trim()
    const messageValue = message.value.trim()

    if (nameValue === ''){
        setError(name, 'Поле не заполненно')
    } else {
        setSuccess(name)
    }

    if (emailValue === ''){
        setError(email, 'Поле не заполненно')
    } else if (!isEmail(emailValue)){
        setError(email, 'Не верный email')
    } else {
        setSuccess(email)
    }

    if(subjectValue === ''){
        setError(subject, 'Поле не заполненно')
    } else {
        setSuccess(subject)
    }

    if(budgetValue === ''){
        setError(budget, 'Поле не заполненно')
    } else {
        setSuccess(budget)
    }

    if(messageValue === ''){
        setError(message, 'Поле не заполненно')
    } else {
        setSuccess(message)
    }
}

const setError = (input, message) => {
    const formControl = input.parentElement;
    const error = formControl.querySelector('.form__error')
    input.className = 'form__input_error'
    error.innerText = message
}

const setSuccess = (input) => {
    const formControl = input.parentElement;
    const error = formControl.querySelector('.form__error')
    input.className = 'form__input_success'
    error.innerText = ''
}

const isEmail = (email) => {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}


