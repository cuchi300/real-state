document.addEventListener('DOMContentLoaded', function() {
    iniciarApp();
})

function iniciarApp() {
    scrollNosotros();
    headerAnimation();
}

function headerAnimation() {
    const headerLogo = document.querySelector('.header__logo');

    headerLogo.classList.add('header__logo--mostrar');
  
}

function scrollNosotros() {
    const nosotrosImagen = document.querySelector('.nosotros__imagen');
    const nosotrosContenido = document.querySelector('.nosotros__contenido');

    nosotrosImagen.classList.add('nosotros__imagen--mostrar');
    nosotrosContenido.classList.add('nosotros__contenido--mostrar');


}