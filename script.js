const form = document.querySelector("form")
const inputWeight = document.querySelector('#weight')
const inputHeight = document.querySelector('#height')
const alertError = {
  element: document.querySelector('alert'),

open(){
  alertError.element.classList.add('open')
},

close() {
  alertError.element.classList.remove('open')
}

}



const modal = {

wrapper: document.querySelector('.modal-wrapper'),
message : document.querySelector('.modal-card .title span'),
btnClose : document.querySelector('#close'),




open() {
  modal.wrapper.classList.add('open')

},
close() {

   modal.wrapper.classList.remove(`open`)

}


}


function notANumber (value) {

return isNaN(value) || value == ''


}



form.onsubmit = event =>{

  event.preventDefault()

  const weight = inputWeight.value
  const height = inputHeight.value


  const result = IMC(weight,height)
  const message = `Seu IMC é de ${result}`
  modal.open()

  modal.message.innerText = message
 
}

modal.btnClose.onclick = () => {
  modal.close()
}

function IMC(weight,height) {
return (weight/((height / 100) ** 2)).toFixed(2)
}