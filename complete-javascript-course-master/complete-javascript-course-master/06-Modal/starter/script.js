'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');//querySelector choose only the first (.show modal) class
// console.log(btnsOpenModal);

const openModal = function () {
    // console.log('button clicked');
    modal.classList.remove('hidden');// .modal ka (display:none) remove ho jaayega aise
    overlay.classList.remove('hidden');//  .overlay ka (display:none) remove ho jaayega aise



}


for (let i = 0; i < btnsOpenModal.length; i++) {
    btnsOpenModal[i].addEventListener('click', openModal);

}



const closeModal = function () {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
}


btnCloseModal.addEventListener('click', closeModal);//we r not calling the fxn we want closemodal function happens only when click event occurs
overlay.addEventListener('click', closeModal);




document.addEventListener('keydown', function (e) {
    // console.log(e);
    // console.log(e.key);

    if (e.key === `Escape`) {
        // console.log('ESC was pressed');
        if (!modal.classList.contains('hidden')) {// ! => it means does not contain hidden class  (NOTE-> includes array kay liye hota hai and contains se we r checking whether class hidden is present or not)
            closeModal();
        }
    }


    // ------------OR----------
    // if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    //     closeModal();
    // };
})





