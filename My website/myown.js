const toTop = document.querySelector('.icon');

window.addEventListener('scroll', () => {
    if(window.pageYOffset > 100){
        toTop.classList.add('active');
    }
    else{
        toTop.classList.remove('active')
    }


})

const menu = document.querySelector('#bar');
const list = document.querySelector('ul');

menu.addEventListener('click', () => {
    list.style.left = '100px';
})

const closeMenu = document.querySelector('#close');
closeMenu.addEventListener('click', () => {
    list.style.left = '-800px';
})