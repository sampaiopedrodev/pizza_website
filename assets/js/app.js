// open and close menu mobile
const btnOpenMenu = document.querySelector('#btn-menu');
// const site_navegation = document.querySelector('.site-navegation');

btnOpenMenu.addEventListener('click', () =>{
    if (!btnOpenMenu.classList.contains('btnMenuActive')){
        btnOpenMenu.classList.add('btnMenuActive');
    }
    else{
        btnOpenMenu.classList.remove('btnMenuActive');
    }
        
})