let loged

//funcao autoexecutavel
(function () {
  loged = false
})();

//acessando os elementos por getElementById() 
const navButton = document.getElementById('nav-toggler-button');
const navCollapse = document.getElementById('nav-bar');

navButton.addEventListener('click', function () {
  navCollapse.classList.toggle('show');
});

const user = JSON.parse(localStorage.getItem('user'))
//funcao anonima sem argumento
//tratador de evento da forma tradicional
document.getElementById('login-button').onclick = function () {
  //acessando elemento por getElementsByName()
  const email = document.getElementsByName('email-input')[0].value
  //acessando elemento apenas pelo Id
  const password = window["password-input"].value

  if (email == user.email && password == user.passwordMaster) {
    loged = true
    window.location.href = '/app/pages/passwords-list/passwords-list.html'
  }
  else alert('Email ou senha incorreto')
}

//evento de formulario onblur
document.getElementById('password-input').addEventListener('blur', () => {
  alert('Sempre tenha cuidado com a sua senha mestre!')
})