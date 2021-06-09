// open and close menu mobile
const btn_open_menu = document.querySelector('#btn-menu');
const site_navegation = document.querySelector('.site-navegation');

btn_open_menu.addEventListener('click', () =>{
    if (!btn_open_menu.classList.contains('btnMenuActive')){
        btn_open_menu.classList.add('btnMenuActive');
        site_navegation.style.display = 'block';
    }
    else{
        btn_open_menu.classList.remove('btnMenuActive');
        site_navegation.style.display = 'none';
    }
        
})