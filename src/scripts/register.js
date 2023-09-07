// Desenvolva as funcionalidades de cadastro aqui

import { creatUser, red } from "./requests.js"
import { toast } from "./toast.js"

const handleCreat = () => {
    const inputs = document.querySelectorAll('.input__cadastro')
    const button = document.querySelector('.btn__register')
    let count = 0

    button.addEventListener('click', async (e) => {
        e.preventDefault()
        const creatLogin = {}

        inputs.forEach((input) => {
            if (input.value.trim() == '') {
                count++
            }
            creatLogin[input.name] = input.value
        })
        if (count !== 0) {
            count = 0

            return toast('Por favor preencha todos os campos vazios!', red)
        }
        const register = await creatUser(creatLogin)
        return register
    })

    const backButton = document.querySelector('.btn__back')
    backButton.addEventListener('click', () => {
        location.replace('../../index.html')
    })
}

handleCreat()