// variáveis - variables
const form = document.querySelector('form')
const inputWeight = document.querySelector('#weight')
const inputHeight = document.querySelector('#height')

const modalWrapper = document.querySelector('.modal-wrapper')
const modalMessage = document.querySelector('.modal .title span')
const modalBtnCloset = document.querySelector('.modal button.closet')

form.onsubmit = function(event) {
   event.preventDefault()

   console.log(event)

   const weight = inputWeight.value
   const height = inputHeight.value

   const result = IMC(weight, height)
   const message = `Seu IMC é de ${result}`
   
   modalMessage.innerText = message
   modalWrapper.classList.add('open')
}

modalBtnCloset.onclick = () => modalWrapper.classList.remove('open')


function IMC(weight, height) {
    return (weight / ((height / 100) ** 2)). toFixed(2)
}