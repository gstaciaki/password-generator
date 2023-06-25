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
    window.location.href = '../passwords-list/passwords-list.html';
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

  const xhr = new XMLHttpRequest();
  xhr.open('GET', `${url}/${paramId}`, true);

  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      passInfo = JSON.parse(xhr.responseText);
      let childElements = $('.register-section').children().children();

      childElements[0].textContent = passInfo.title;
      $('#password-email').html(passInfo.email);
      childElements[2].value = passInfo.pass;
      childElements[3].textContent = passInfo.description;
    }
  };

  xhr.send();
};

const passwordInput = document.getElementById('password-content');
$('#password-content').addClass('cover');

$('#password-content').on('mouseover', () => {
  $('#password-content').removeClass('cover');
});

$('#password-content').on('mouseout', () => {
  $('#password-content').addClass('cover');
});
