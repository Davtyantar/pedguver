const TOKEN = "5546216189:AAEh8HKkjVy1-hUXBvclCHWpzjVwDAQQpIU";
const CHAT_ID = "-1001542443396";
const URI_API = `https://api.telegram.org/bot${ TOKEN }/sendMessage`;
const spanform = document.getElementById('spanform');

document.getElementById("tg").addEventListener('submit', function (e) {
    e.preventDefault();

    let message = `<b> Заявка с сайта! </b> \n`;
    message += `<b> Имя отправителя: </b> ${this.name.value} \n`;
    message += `<b> Номер телефона отправителя: </b> ${this.contact.value}\n`;
    message += `<b> Почта отправителя: </b> ${this.email.value}\n`;
    message += `<b> Выбранный персонал отправителя : </b> ${this.personal.value}\n`;
    message += `<b> Дополнительная информация от отправителя : </b> ${this.textarea.value}\n`;

    axios.post(URI_API, {
        chat_id: CHAT_ID,
        parse_mode: 'html',
        text: message
    })
    .then((res) => {
        this.name.value = "";
        this.contact.value = "";
        this.email.value = "";
        this.personal.value = "";
        this.textarea.value = "";
        spanform.style.display = 'block';
        var modal = document.querySelector(".modal2");
        setTimeout(() => {
            modal.classList.remove("show-modal");
            spanform.style.display = 'none';
        }, 4000);
    })
    .catch ((err) => {
        console.log(err);
    })
    .finally (() => {
        console.log('Конец');
    })

});


/// ВАЛИДАЦИЯ ФОРМЫ ЗАЯВКИ /// /// ВАЛИДАЦИЯ ФОРМЫ ЗАЯВКИ /// /// ВАЛИДАЦИЯ ФОРМЫ ЗАЯВКИ ///
/// ВАЛИДАЦИЯ ФОРМЫ ЗАЯВКИ /// /// ВАЛИДАЦИЯ ФОРМЫ ЗАЯВКИ /// /// ВАЛИДАЦИЯ ФОРМЫ ЗАЯВКИ ///
/// ВАЛИДАЦИЯ ФОРМЫ ЗАЯВКИ /// /// ВАЛИДАЦИЯ ФОРМЫ ЗАЯВКИ /// /// ВАЛИДАЦИЯ ФОРМЫ ЗАЯВКИ ///
/// ВАЛИДАЦИЯ ФОРМЫ ЗАЯВКИ /// /// ВАЛИДАЦИЯ ФОРМЫ ЗАЯВКИ /// /// ВАЛИДАЦИЯ ФОРМЫ ЗАЯВКИ ///
/// ВАЛИДАЦИЯ ФОРМЫ ЗАЯВКИ /// /// ВАЛИДАЦИЯ ФОРМЫ ЗАЯВКИ /// /// ВАЛИДАЦИЯ ФОРМЫ ЗАЯВКИ ///

let inputName = document.querySelector('#form-name');
let inputEmail = document.querySelector('#form-email');
let inputContact = document.querySelector('#form-contact');
let inputPersonal = document.querySelector('#form-personal');
let inputButton = document.querySelector('#form-button');

let spanName = document.querySelector('.namespan');
let spanEmail = document.querySelector('.emailspan');
let spanContact = document.querySelector('.contactspan');
let spanPersonal = document.querySelector('.personalspan');

let reg1 = /^(\+7|7|8)?[\s\-]?\(?[489][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/;
let reg2 = /[0-9]/;
let reg3 = /^[а-яА-ЯёЁa-zA-Z0-9]+$/;

inputName.onblur = function() {
    if (!reg3.test(inputName.value)  ) { 
        spanName.style.visibility='visible';
        // inputButton.style.display = 'none';
        return false;
    } else {
        spanName.style.visibility='hidden';
        // inputButton.style.display = 'block';
        return true;
    }
};

// inputEmail.onblur = function() {
//       if (!inputEmail.value.includes('@')) { 
//         spanEmail.style.visibility='visible';
//         return false;
//       } else {
//         spanEmail.style.visibility='hidden';
//         return true;
//       }
// };

inputContact.onblur = function() {
    if (!reg2.test(inputContact.value)) { 
        spanContact.style.visibility='visible';
        // inputButton.style.display = 'none';
        return false;
    } else if (!reg1.test(inputContact.value)) {
        spanContact.style.visibility='visible';
        // inputButton.style.display = 'none';
        return false;
    }
    else {
        spanContact.style.visibility='hidden';
        // inputButton.style.display = 'block';
        return true;
    }
};

inputPersonal.onblur = function() {
    if (inputPersonal.value === "") { 
        spanPersonal.style.visibility='visible';
        // inputButton.style.display = 'none';
        return false;
    } else {
        spanPersonal.style.visibility='hidden';
        // inputButton.style.display = 'block';
        return true;
    }
};


// let inputName = document.querySelector('#form-name');
// let inputEmail = document.querySelector('#form-email');
// let inputContact = document.querySelector('#form-contact');
// let inputPersonal = document.querySelector('#form-personal');
// let inputButton = document.querySelector('#form-button');

// let spanName = document.querySelector('.namespan');
// let spanEmail = document.querySelector('.emailspan');
// let spanContact = document.querySelector('.contactspan');
// let spanPersonal = document.querySelector('.personalspan');


// let reg1 = /^(\+7|7|8)?[\s\-]?\(?[489][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/;
// let reg2 = /[0-9]/;
// let reg3 = /^[а-яА-ЯёЁa-zA-Z0-9]+$/;

// //////////////////////

// inputName.onblur = function() {
//     if (!reg3.test(inputName.value)  ) { 
//         spanName.style.visibility='visible';
//         // inputButton.style.display = 'none';
//         return false;
//     } else {
//         spanName.style.visibility='hidden';
//         // inputButton.style.display = 'block';
//         return true;
//     }
// };

// // inputEmail.onblur = function() {
// //       if (!inputEmail.value.includes('@')) { 
// //         spanEmail.style.visibility='visible';
// //         return false;
// //       } else {
// //         spanEmail.style.visibility='hidden';
// //         return true;
// //       }
// // };

// inputContact.onblur = function() {
//     if (!reg2.test(inputContact.value)) { 
//         spanContact.style.visibility='visible';
//         // inputButton.style.display = 'none';
//         return false;
//     } else if (!reg1.test(inputContact.value)) {
//         spanContact.style.visibility='visible';
//         // inputButton.style.display = 'none';
//         return false;
//     }
//     else {
//         spanContact.style.visibility='hidden';
//         // inputButton.style.display = 'block';
//         return true;
//     }
// };

// inputPersonal.onblur = function() {
//     if (inputPersonal.value === "") { 
//         spanPersonal.style.visibility='visible';
//         // inputButton.style.display = 'none';
//         return false;
//     } else {
//         spanPersonal.style.visibility='hidden';
//         // inputButton.style.display = 'block';
//         return true;
//     }
// };











