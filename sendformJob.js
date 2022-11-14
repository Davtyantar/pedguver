    let $fio = document.querySelector('input[name="fio"]');
    let $brtd = document.querySelector('input[name="brtd"]');
    let $tel= document.querySelector('input[name="tel"]');
    var checkedValue=''; 
    var inputElements = document.getElementsByClassName('custom_checkbox');
    function delNum(event) {
        if ("1234567890".indexOf(event.key) != -1)
        event.preventDefault();
        };
    function send (){
        let elem;
        for(var i=0; inputElements[i]; ++i){
            if(inputElements[i].checked){
                elem=1;
                checkedValue += inputElements[i].value + ' ';
            }
          }
        console.log(checkedValue);
          
        if(elem != 1){
            alert('Выберите профессию')
        }
        if($fio.value  == ''){
            $fio.classList.add('emptyInput');  
        };
        if($brtd.value == ''){
            $brtd.classList.add('emptyInput');
        };
        if ($tel.value==''){
            $tel.classList.add('emptyInput');
        };
        setTimeout(() => {
            $fio.classList.remove('emptyInput');
            $tel.classList.remove('emptyInput');
            $brtd.classList.remove('emptyInput');
        }, 5000);
    }
const TOKEN = "5719533702:AAFny3_kgbYAFkC4ks5WsqMkPrElJpEEjvQ";
const CHAT_ID = "-1001831484281";
const URI_API = `https://api.telegram.org/bot${ TOKEN }/sendMessage`;

var $a = ('input:checked');
const $spanform = document.getElementById('spanform');

document.getElementById("job").addEventListener('submit', function (e) {
    e.preventDefault();
    let message = `<b> Заявка на вакансию </b> \n`;
    message += `<b> ФИО: </b> ${this.fio.value} \n`;
    message += `<b> Дата рождения: </b> ${this.brtd.value}\n`;
    message += `<b> Электронная почта: </b> ${this.email.value}\n`;
    message += `<b> Контактный телефон : </b> ${this.tel.value}\n`;
    message += `<b> Образование: </b> ${this.grad.value} \n`;
    message += `<b> Жизненный опыт: </b> ${this.opit.value} \n`;
    message += `<b> Привычки/хобби: </b> ${this.hobbie.value} \n`;
    message += `<b> Что лучше всего получается делать </b> ${this.best.value} \n`;
    message += `<b> Претендует на вакансии(ю): </b> ${checkedValue} \n`;
    $spanform.style.display = 'block';
    
    setTimeout(() => {
        $spanform.style.display = 'none';
    }, 4000);

    axios.post(URI_API, {
        chat_id: CHAT_ID,
        parse_mode: 'html',
        text: message
    })
    .then((res) => {
        this.fio.value = "";
        this.brtd.value = "";
        this.email.value = "";
        this.tel.value = "";
        this.grad.value = "";
        this.opit.value = "";
        this.hobbie.value = "";
        this.name.value = "";

    })
    .catch ((err) => {
        console.log(err);
    })
    .finally (() => {
        console.log('Конец');
    })

})


