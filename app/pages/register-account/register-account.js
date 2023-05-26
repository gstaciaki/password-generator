'use strict';

const navButton = document.getElementById('nav-toggler-button');
const navCollapse = document.getElementById('navbarNav');

navButton.addEventListener('click', function () {
  navCollapse.classList.toggle('show');
});

import { User } from "../../model/user.js";

const userValues = Array.from(document.querySelectorAll('.form-control'));

const registerButton = document.getElementById('register-button');

registerButton.addEventListener('click', () => {
  localStorage.setItem('user', JSON.stringify(new User(
    userValues[0].value,
    userValues[1].value,
    userValues[2].value,
    userValues[3].value,
    userValues[4].value
  )));
  let code = prompt('Informe o código enviado ao seu celular');

  if (code === '123') {
    window.location.replace('../passwords-list/passwords-list.html');
  }

  return false;
});