
const navButton = document.getElementById('nav-toggler-button');
const navCollapse = document.getElementById('navbarNav');


navButton.addEventListener('click', function() {
  navCollapse.classList.toggle('show');
});

import { User } from "../../model/user.js";

const userValues = document.querySelectorAll('.login-input')

const registerButton = document.getElementById('register-button')

registerButton.addEventListener('click', () => {
  localStorage.setItem('user', JSON.stringify(new User(
    userValues[0].value,
    userValues[1].value,
    userValues[2].value,  
    userValues[3].value,
    userValues[4].value
  )))
  let code = prompt('Informe o código enviado ao seu celular')

  if(code == '123456') window.location.href = '../passwords-list/passwords-list.html'
})