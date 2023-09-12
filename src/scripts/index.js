// Desenvolva as funcionalidades de login aqui

import { login, red } from "./requests.js";
import { toast } from "./toast.js";

const autentication = () => {
    const token = localStorage.getItem('@petinfo:token')

    if (token) {
        location.replace('./src/pages/feed.html')
    }
}

const handleLogin = () => {
    const form = document.querySelector('#form__container__login')
    const inputs = document.querySelectorAll('.input__login')
    const button = document.querySelector('.btn__login')
    let count = 0

    console.log(form, "form")

    form.addEventListener('submit', e => {
        e.preventDefault()
       
    })

    button.addEventListener('click', (e) => {
        e.preventDefault()

        const loginBody = {}

        inputs.forEach(input => {
            if (input.value.trim() == '') {
                count++
            }
            loginBody[input.name] = input.value
        })
        if (count !== 0) {
            count = 0
            return toast('por favor, preencha todos os campos vazios', red)
        }
        login(loginBody)

    })

    const buttonResgister = document.querySelector('#register__button')
    buttonResgister.addEventListener('click', (e) => {
        e.preventDefault()
        location.replace('./src/pages/register.html')
    })
}

handleLogin()
autentication()

