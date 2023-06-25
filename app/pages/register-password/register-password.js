'use strict';

if (!localStorage.getItem('loged')) window.location.href = '/index.html';

const url = 'http://localhost:3000/passwords'
const navButton = document.getElementById('nav-toggler-button');
const navCollapse = document.getElementById('navbarNav');


navButton.addEventListener('click', function () {
    navCollapse.classList.toggle('show');
});


//funcao anonima com argumento
const registerPassword = function (title, email, description) {

    //funcao aninhada
    function generatePassword() {
        let pass = '';
        const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';

        for (let i = 0; i < 20; i++) {
            pass += chars[Math.floor((Math.random() * 62) + 1)];
        }

        return pass;
    }

    //anonima com retorno
    return {
        title: title,
        email: email,
        description: description,
        pass: generatePassword(),
        id: `${btoa(title)}${btoa(email)}`
    };
};

const titleData = document.getElementById('input-title-id');
const emailData = document.getElementById('input-email-id');
const descriptionData = document.getElementById('textarea-description-id');

const generateButton = document.getElementById('generate-button');

generateButton.addEventListener('click', () => {
    if (!titleData.value || !emailData.value || !descriptionData.value) {
        alert('Existe campos vazios');
        return;
    }
    const title = titleData.value.slice(0, 1).slice(0, 1).toUpperCase() + titleData.value.slice(1)
    const newPassword = registerPassword(title, emailData.value, descriptionData.value);

    $.ajax({
        url: url,
        type: 'POST',
        contentType: 'application/json',
        data: JSON.stringify(newPassword),
        success: function () {
            window.location.href = '/app/pages/passwords-list/passwords-list.html';
        },
        error: function (error) {
            alert('Erro ao cadastrar senha. Erro: ' + error);
        }
    });
});