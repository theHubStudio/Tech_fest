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
