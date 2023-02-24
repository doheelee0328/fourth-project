const message = document.getElementById('message')
const fullName = document.getElementById('fullName')
const fullNameMessage = document.getElementById('fullNameValidation')
const email = document.getElementById('email')
const emailMessage = document.getElementById('emailValidation')

const validateForm = (myForm) => {
  const getFullName = fullName.value
  let fullNameIsValid = false

  if (getFullName === '' || getFullName == null) {
    fullNameMessage.innerText = 'Full name must be entered'
    fullNameMessage.classList.add('invalidMessage')
    fullNameMessage.classList.remove('validMessage')
    fullNameIsValid = false
  } else {
    fullNameMessage.innerText = 'Looks Right!'
    fullNameMessage.classList.add('validMessage')
    fullNameMessage.classList.remove('invalidMessage')
    fullNameIsValid = true
  }

  const getEmail = email.value
  const emailRegex = new RegExp('[a-z0-9]+@[a-z]+.[a-z]{2,3}')
  const checkEmail = emailRegex.test(getEmail)
  let emailIsValid = false

  if (getEmail === '' || getEmail == null) {
    emailMessage.innerText = 'Email cannot be empty'
    emailMessage.classList.add('invalidMessage')
    emailMessage.classList.remove('validMessage')
    emailIsValid = false
  } else {
    if (checkEmail == false) {
      emailMessage.innerText = 'Email must be written correctly'
      emailMessage.classList.add('invalidMessage')
      emailMessage.classList.remove('validMessage')
      emailIsValid = false
    } else {
      emailMessage.innerText = 'Looks Right!'
      emailMessage.classList.add('validMessage')
      emailMessage.classList.remove('invalidMessage')
      emailIsValid = true
    }
  }

  if (fullNameIsValid == true && emailIsValid == true) {
    message.innerText = `Thank you for signing up ${getFullName}`
  }
}
