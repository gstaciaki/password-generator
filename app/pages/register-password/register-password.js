'use strict';

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
    if(!titleData.value || !emailData.value || !descriptionData.value) {
        alert('Existe campos vazios');
        return;
    }
    const newPassword = registerPassword(titleData.value, emailData.value, descriptionData.value);
    let passwords = JSON.parse(localStorage.getItem('passwords'));

    if(!passwords) passwords = [];
    passwords.push(newPassword) ;
    localStorage.setItem('passwords', JSON.stringify(passwords));

    window.location.href = '/app/pages/passwords-list/passwords-list.html';
});