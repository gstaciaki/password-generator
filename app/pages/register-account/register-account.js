'use strict';

const url = 'http://localhost:3000/users';
const navButton = document.getElementById('nav-toggler-button');
const navCollapse = document.getElementById('navbarNav');

navButton.addEventListener('click', function () {
  navCollapse.classList.toggle('show');
});

import { User } from "../../model/user.js";

// const userValues = Array.from(document.querySelectorAll('.form-control'));
$(document).ready(function () {
  $('.form-control[placeholder="CPF"]').mask('000.000.000-00');
});
const userValues = ($('.form-control').children()).prevObject;


const registerButton = document.getElementById('register-button');

registerButton.addEventListener('click', () => {
  let code
  const payload = new User(
    userValues[0].value,
    userValues[1].value,
    userValues[2].value,
    userValues[3].value,
    userValues[4].value
  );
  fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })
    .then(response => response.json())
    .then(data => {
      code = prompt('Informe o código enviado ao seu celular');
    })
    .catch(error => {
      alert(`Erro ao registrar: ${error}`)
    });

  if (code === '123') {
    window.location.replace('../passwords-list/passwords-list.html');
  };
});