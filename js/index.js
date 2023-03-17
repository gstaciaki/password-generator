let loged = false

//acessando os elementos por getElementById() 
const navButton = document.getElementById('nav-toggler-button');
const navCollapse = document.getElementById('nav-bar');

//tratador de eventos inline????
navButton.addEventListener('click', function() {
  navCollapse.classList.toggle('show');
});

//funcao anonima sem argumento
document.getElementById('login-button').onclick = function() {
    //acessando elemento por getElementsByName()
    const email = document.getElementsByName('email-input')[0].value
    //acessando elemento apenas pelo Id
    const password = window["password-input"].value

    if(email == 'teste@teste.com' || password == 'teste123') {
      loged = true
      window.location.href = 'passwords-list.html' 
    }
    //alert
    else alert('Email ou senha incorreto')
}