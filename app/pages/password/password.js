'use strict';

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

  JSON.parse(localStorage.getItem('passwords')).forEach((password) => {
    if (password.id === paramId) {
      passInfo = password;
    }
  });

  document.getElementById('password-title').textContent = passInfo.title;
  document.getElementById('password-email').textContent = passInfo.email;
  document.getElementById('password-content').value = passInfo.pass;
  document.getElementById('password-description').textContent = passInfo.description;
};
