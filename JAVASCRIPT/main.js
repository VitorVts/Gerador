



const modo = document.getElementById('mode__icon');

    modo.addEventListener("click",() => {
    const form = document.getElementById("body__form");
    const tittle = document.getElementById("titulo__principalh1")
    
    if(modo.classList.contains('fa-toggle-off')){
       modo.classList.remove('fa-toggle-off');
       modo.classList.add('fa-toggle-on') ;

       form.classList.add('dark');
       tittle.classList.add('dark');
       return;
    }
    modo.classList.add('fa-toggle-off');
    modo.classList.remove('fa-toggle-on');
    form.classList.remove("dark");
    tittle.classList.remove('dark');
});