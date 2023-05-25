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
  else window.location.href = '../passwords-list/passwords-list.html'
}

const blur = function () {
  overlay.style.display = 'block'
  setTimeout(warning, 100)
}

//uso do setTimeout
setTimeout(blur, 5000)

window.onload = () => {
  let param = new URLSearchParams(window.location.search)
  let passInfo
  param = param.get('id')

  JSON.parse(localStorage.getItem('passwords')).forEach(password => {
    if(password.id == param) passInfo = password
  })

  document.getElementById('password-title').textContent = passInfo.title
  document.getElementById('password-email').textContent = passInfo.email
  document.getElementById('password-content').textContent = passInfo.pass
  document.getElementById('password-description').textContent = passInfo.description
}