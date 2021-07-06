let btn = document.querySelector('.toggleBtn');
let menu = document.querySelector('.menu');
let btn_img = document.querySelector('.fa-bars');

btn.addEventListener('click', () => {
    menu.classList.toggle('active');

    if (menu.classList.contains('active')) {
        btn_img.classList.remove('fa-bars');
        btn_img.classList.add('fa-times');
    } else {
        btn_img.classList.add('fa-bars');
        btn_img.classList.remove('fa-times');
    }
});