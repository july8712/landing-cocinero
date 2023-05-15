const menuBtn = document.querySelector(".menu-btn");
const menuLateral = document.querySelector(".menu-lateral");
const menu = document.querySelector(".menu");
let menuOpen = false;

menuBtn.addEventListener('click', () => {
    if(!menuOpen){
        menuBtn.classList.add('open');
        menu.classList.add('corrido');
        menuLateral.classList.remove('cerrado');
        menuOpen = true;
    }else{
        menuBtn.classList.remove('open');
        menu.classList.remove('corrido');
        menuLateral.classList.add('cerrado');
        menuOpen = false;
    }
})