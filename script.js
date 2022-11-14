window.onscroll = function() {myFunction()};
function myFunction() {
    if (document.body.scrollTop > 1 || document.documentElement.scrollTop > 50) {
        document.getElementById("menu").className = "menuScrollBgColor";
    } else {
        document.getElementById("menu").className = "";
    }
}

let visiblebtn = document.querySelector('#visiblebtn');

visiblebtn.addEventListener('click', showDivs);
let myDiv = true;
function showDivs () {
    let isShow0 = document.querySelector('.novisibleblocks0');
    let isShow1 = document.querySelector('.novisibleblocks1');
    let isShow2 = document.querySelector('.novisibleblocks2');
    let isShow3 = document.querySelector('.novisibleblocks3');
    let isShow4 = document.querySelector('.novisibleblocks4');
    let isShow5 = document.querySelector('.novisibleblocks5');
    let isShow6 = document.querySelector('.novisibleblocks6');
    let isShow7 = document.querySelector('.novisibleblocks7');
    
        if (myDiv) {
            isShow0.style.display='block';
            isShow1.style.display='block';
            isShow2.style.display='block';
            isShow3.style.display='block';
            isShow4.style.display='block';
            isShow5.style.display='block';
            isShow6.style.display='block';
            isShow7.style.display='block';
            visiblebtn.textContent='Скрыть весь список функционала';
            myDiv=false;
        }
        else {
            isShow0.style.display='none';
            isShow1.style.display='none';
            isShow2.style.display='none';
            isShow3.style.display='none';
            isShow4.style.display='none';
            isShow5.style.display='none';
            isShow6.style.display='none';
            isShow7.style.display='none';
            visiblebtn.textContent='Открыть весь список функционала';
            myDiv=true;
        }
    }

    var modal = document.querySelector(".modal2");
    var trigger = document.querySelector(".trigger");
    var closeButton = document.querySelector(".close-button");
    var modalButtonForm1 = document.querySelector(".modal-button-form1");
    var modalButtonForm2 = document.querySelector(".modal-button-form2");
    var modalButtonForm3 = document.querySelector(".modal-button-form3");
    var modalButtonForm4 = document.querySelector(".modal-button-form4");
    var modalButtonForm5 = document.querySelector(".modal-button-form5");
    var modalButtonForm6 = document.querySelector(".modal-button-form6");
    var modalButtonForm7 = document.querySelector(".modal-button-form7");
    var modalButtonForm8 = document.querySelector(".modal-button-form8");
    var modalButtonForm9 = document.querySelector(".modal-button-form9");
    var modalButtonForm10 = document.querySelector(".modal-button-form10");
    var modalButtonForm11 = document.querySelector(".modal-button-form11");
    var modalButtonForm12 = document.querySelector(".modal-button-form12");

    function toggleModal() {
        modal.classList.toggle("show-modal");
    }

    function windowOnClick(event) {
        if (event.target === modal) {
            toggleModal();
        }
    }

    trigger.addEventListener("click", toggleModal);
    closeButton.addEventListener("click", toggleModal);
    window.addEventListener("click", windowOnClick);
    ////////////////////////////
    
    modalButtonForm1.addEventListener("click", toggleModal);
    modalButtonForm2.addEventListener("click", toggleModal);
    modalButtonForm3.addEventListener("click", toggleModal);
    modalButtonForm4.addEventListener("click", toggleModal);
    modalButtonForm5.addEventListener("click", toggleModal);
    modalButtonForm6.addEventListener("click", toggleModal);
    modalButtonForm7.addEventListener("click", toggleModal);
    modalButtonForm8.addEventListener("click", toggleModal);
    modalButtonForm9.addEventListener("click", toggleModal);
    modalButtonForm10.addEventListener("click", toggleModal);
    modalButtonForm11.addEventListener("click", toggleModal);
    modalButtonForm12.addEventListener("click", toggleModal);



