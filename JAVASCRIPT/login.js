const mode = document.getElementById('mode__icon');

const form = document.getElementById('login__form');

const container = document.getElementById('container');

const icon = document.getElementById('user__icon');

const icon_password = document.getElementById('password__icon');

mode.addEventListener('click',() =>{
    if(mode.classList.contains('fa-moon')){
        mode.classList.remove('fa-moon');
        mode.classList.add('fa-sun');
        container.classList.add('dark')
        form.classList.add('dark');
        icon.classList.add('dark')
        icon_password.classList.add('dark')
        return;
    }
    mode.classList.remove('fa-sun');
        mode.classList.add('fa-moon');
        form.classList.remove('dark');
        container.classList.remove('dark');
        icon.classList.remove('dark');
        icon_password.classList.remove('dark');
} );