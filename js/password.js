const navButton = document.getElementById('nav-toggler-button')
const navCollapse = document.getElementById('navbarNav')


navButton.addEventListener('click', function () {
  navCollapse.classList.toggle('show')
})


const overlay = document.querySelector('.blur')

function warning() {
  alert('Por questoes de seguranca, escondemos a senha caso tenha deixado a pagina aberta')
  if (confirm('Deseja continuar na pagina?')) {
    overlay.style.display = 'none'
    setTimeout(blur, 30000)
  }
  else window.location.href = 'passwords-list.html'
}

const blur = function () {
  overlay.style.display = 'block'
  setTimeout(warning, 100)
}

//uso do setTimeout
setTimeout(blur, 5000)