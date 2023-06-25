"use strict";

let loged;
let arrayMails = []
const url = 'http://localhost:3000/users';

// função autoexecutável
(function () {
  loged = false;
})();

// acessando os elementos por getElementById()
// const navButton = document.getElementById('nav-toggler-button');
// const navCollapse = document.getElementById('nav-bar');
$(document).ready(function () {
  $('.navbar-toggler').click(function () {
    $('#nav-bar').toggleClass('show');
  });
});


// navButton.addEventListener('click', function () {
//   navCollapse.classList.toggle('show');
// });

// const user = JSON.parse(localStorage.getItem('user'));
// função anônima sem argumento
// tratador de evento da forma tradicional

fetch(url)
  .then(response => response.json())
  .then(data => {
    arrayMails = data.map(obj => { return { email: obj.email, password: obj.passwordMaster } })
  })

document.getElementById('login-button').onclick = function () {
  // acessando elemento por getElementsByName()
  const email = document.getElementsByName('email-input')[0].value.trim();
  // acessando elemento apenas pelo Id
  const password = window["password-input"].value;


  arrayMails.forEach(user => {
    if (user.email == email && user.password == password) {
      window.location.href = '/app/pages/passwords-list/passwords-list.html';
      loged = true;
      const logedAtTime = {
        date: new Date(),
        email: user.email
      }
      localStorage.setItem('loged', loged);
      localStorage.setItem('logedAtTime', logedAtTime)
    };
  });
  if (!loged) alert('Email ou senha incorreto');

  document.getElementsByName('email-input')[0].value = ''
};

// evento de formulário onfcus
$(document).ready(function () {
  let intervalId;

  $('input').on('click', function () {
    if (!intervalId) {
      createAlert('block');
      intervalId = setInterval(function () {
        createAlert($('#alert-box').css('display') === 'none' ? 'block' : 'none');
      }, 2000);
    }
  });

  $('input').on('blur', function () {
    clearInterval(intervalId);
    intervalId = null;
    createAlert('none');
  });
});



const createAlert = function (display) {
  let alertBox = $('#alert-box');
  const text = 'Sempre tome muito cuidado com a sua senha mestre!'
  if (display === 'block') {
    alertBox.text(text).fadeIn(300);
  } else {
    alertBox.fadeOut(300);
  }
};

const showAlert = function (alertFunction) {
  alertFunction('block')
  setTimeout(() => alertFunction('none'), 4000)
};

$(document).ready(() => {
  $('input').on('focus', () => {
    $(document).off('keypress').on('keypress', function (e) {
      if (e.which === 13) {
        $('#login-button').click();
      }
    });
  });
});