let overlay = document.querySelector('.header__overlay');
let showOverlay = document.querySelectorAll('.header__button');
showOverlay.forEach((showOverlay) => { 
    showOverlay.addEventListener('click' ,()=>{
        overlay.classList.toggle('overlay_show')});
});

// let showOverlay = document.getElementById('show_overlay');
// let hideOverlay = document.getElementById('hide_overlay');
// function Overlay(show_hide, overlay){
//     show_hide.addEventListener('click', ()=>{
//         overlay.classList.toggle('overlay_show');
//     });
// };
// Overlay(showOverlay, overlay);
// Overlay(hideOverlay, overlay);




let addFormElement = document.getElementById('add_form_elem');
let formElement = document.getElementById('form_elem');
let formLabel = document.getElementById('form_label');
let formElementCounter = 2;
addFormElement.addEventListener('click', ()=>{
    if(formElementCounter == 5){
        alert(`Количество участников должно не превышть ${formElementCounter}`);
    }
    else{
        let newFormElement = formElement.cloneNode(true);
        formElementCounter++;
        let form = addFormElement.parentNode;
        form.insertBefore(newFormElement, addFormElement); 
    }
})



//ajax for registration form
// function sendRequest(){

    
//     let form = document.getElementById('');
//     let formData = new FormData(form);
//     $.ajax({
//         type: "POST",
//         url: '',
//         data: formData,
//         dataType: 'html',
//         processData: false,
//         contentType: false,
//         success: function(){
            
//         },
//         erorr: function(){
//             alert('POST error');
//         }
//     })    
// }