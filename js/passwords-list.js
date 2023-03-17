const navButton = document.getElementById('nav-toggler-button')
const navCollapse = document.getElementById('navbarNav')


navButton.addEventListener('click', function () {
  navCollapse.classList.toggle('show')
})

//funcao com nome
function createBlock(title_content, email_content) {
  //acesso DOM via querySelector
  let main_div = document.querySelector('.main')
  let new_div = document.createElement('div')
  let new_link = document.createElement('a')

  new_link.setAttribute('href', 'password.html')

  new_link.classList.add('block-link')
  new_div.classList.add('block')

  let title = document.createElement('h1')
  title.textContent = title_content

  let email = document.createElement('p')
  email.textContent = email_content

  new_div.appendChild(title)
  new_div.appendChild(email)

  new_link.appendChild(new_div)
  main_div.appendChild(new_link)
}

const passwords = [
  {
    title: 'Netflix',
    email: 'exemplo@netflix.com'
  },
  {
    title: 'Amazon',
    email: 'exemplo@amazon.com'
  }
]

//evento de carregamento de pag onload
window.onload = () => {
  //laço foreach
  passwords.forEach(element => {
    createBlock(element.title, element.email)
  })
}
