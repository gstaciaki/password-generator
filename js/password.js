const navButton = document.getElementById('nav-toggler-button')
const navCollapse = document.getElementById('navbarNav')


navButton.addEventListener('click', function () {
  navCollapse.classList.toggle('show')
})


const overlay = document.querySelector('.blur')

//overlay.style.display = 'block'

//overlay.style.display = 'none'

function warning() {
  alert('Por questoes de seguranca, bloqueamos a senha caso tenha deixado a pagina aberta')
  if (confirm('Deseja continuar na pagina?')) overlay.style.display = 'none'
  else window.location.href = 'passwords-list.html'
}

const blur = function () {
  overlay.style.display = 'block'
  setTimeout(warning, 100)
}

setTimeout(blur, 5000)