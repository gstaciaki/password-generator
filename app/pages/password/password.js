'use strict';

const url = 'http://localhost:3000/passwords';
const navButton = document.getElementById('nav-toggler-button');
const navCollapse = document.getElementById('navbarNav');

navButton.addEventListener('click', () => {
  navCollapse.classList.toggle('show');
});

const overlay = document.querySelector('.blur');

function warning() {
  alert('Por questões de segurança, escondemos a senha caso tenha deixado a página aberta');
  if (confirm('Deseja continuar na página?')) {
    overlay.style.display = 'none';
    setTimeout(applyBlur, 30000);
  } else {
    window.location.href = 'https://gstaciaki.github.io/password-generator/app/pages/passwords-list/passwords-list.html';
  }
}

const applyBlur = () => {
  overlay.style.display = 'block';
  setTimeout(warning, 100);
};

// uso do setTimeout
setTimeout(applyBlur, 5000);

window.onload = () => {
  const param = new URLSearchParams(window.location.search);
  let passInfo;
  const paramId = param.get('id');

  $.ajax({
    url: `${url}/${paramId}`,
    type: 'GET',
    success: function (data) {
      passInfo = data
      let childElements = $('.register-section').children().children();

      childElements[0].textContent = passInfo.title;
      $('#password-email').html(passInfo.email);
      childElements[2].value = passInfo.pass;
      childElements[3].textContent = passInfo.description;
    },
    error: function (error) {
      
    }
  });
};

const passwordInput = document.getElementById('password-content');
$('#password-content').addClass('cover');

$('#password-content').on('mouseover', () => {
  $('#password-content').removeClass('cover');
});

$('#password-content').on('mouseout', () => {
  $('#password-content').addClass('cover');
});
