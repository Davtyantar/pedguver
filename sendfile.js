const TOKENN = "5719533702:AAFny3_kgbYAFkC4ks5WsqMkPrElJpEEjvQ";
const CHAT_IDF = "-1001831484281";
// const URI_API = `https://api.telegram.org/bot${ TOKEN }/sendMessage`;
const URI_AP = `https://api.telegram.org/bot${ TOKEN }/sendDocument`;

// const spanform = document.getElementById('spanform');


document.getElementById("job").addEventListener('submit', function file (e) {
    e.preventDefault();
    
    const formData = new FormData();
    formData.append('chat_id', CHAT_IDF);
    formData.append('document', this.document.files[0]);

    axios.post(URI_AP, formData, {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    })
    .then((res) => {
        // this.fio.value = "";
        // this.brtd.value = "";
        // this.email.value = "";
        // this.tel.value = "";
        // this.grad.value = "";
        // this.opit.value = "";
        // this.hobbie.value = "";
        // this.name.value = "";

    })
    .catch ((err) => {
        console.log(err);
    })
    .finally (() => {
        console.log('Конец');
    })

})