const navButton = document.getElementById('nav-toggler-button');
const navCollapse = document.getElementById('navbarNav');


navButton.addEventListener('click', function () {
    navCollapse.classList.toggle('show');
});


//funcao anonima com argumento
const registerPassword = function (title, email, description) {

    //funcao aninhada
    function generatePassword() {
        let pass = ''
        const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'

        for (let i = 0; i < 30; i++) {
            pass += chars[Math.floor((Math.random() * 62) + 1)]
        }

        return pass
    }

    //anonima com retorno
    return {
        password_title: title,
        password_email: email,
        password_description: description,
        pass: generatePassword()
    }
}

const titleData = document.getElementById('input-title-id')
const emailData = document.getElementById('input-email-id')
const descriptionData = document.getElementById('textarea-description-id')

const generateButton = document.getElementById('generate-button')

generateButton.addEventListener('click', () => {
    registerPassword(titleData.value, emailData.value, descriptionData.value)
})