'use strict';

const navButton = document.getElementById('nav-toggler-button');
const navCollapse = document.getElementById('navbarNav');

navButton.addEventListener('click', function () {
  navCollapse.classList.toggle('show');
});

//funcao com nome
function createBlock(title_content, email_content, id) {
  //acesso DOM via querySelector
  let main_div = document.querySelector('.main');
  let new_div = document.createElement('div');
  let new_link = document.createElement('a');

  new_link.setAttribute('href', `../../pages/password/password.html?id=${id}`);

  new_link.classList.add('block-link');
  new_div.classList.add('block');

  let title = document.createElement('h1');
  title.textContent = title_content;

  let email = document.createElement('p');
  email.textContent = email_content;

  new_div.appendChild(title);
  new_div.appendChild(email);

  new_link.appendChild(new_div);
  main_div.appendChild(new_link);
}

const passwords = JSON.parse(localStorage.getItem('passwords'));

//evento de carregamento de pag onload
window.onload = () => {
  //laço foreach
  passwords.forEach(element => {
    createBlock(element.title, element.email, element.id);
  });
};