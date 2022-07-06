document.addEventListener('DOMContentLoaded', function() {
    iniciarApp();
})

function iniciarApp() {
    scrollImagenes();
    headerAnimation();
    scrollDestacada();
}

function scrollImagenes() {
    const imagenes = document.querySelectorAll('.propiedad__imagen');

    
    window.addEventListener('scroll', () => {

        const scroll = this.scrollY / -20;

        imagenes.forEach((imagen) => {
            imagen.style.backgroundPositionY = `${scroll}px`;
        })
    })
}

function headerAnimation() {
    const headerLogo = document.querySelector('.header__logo');
    const headerHeading = document.querySelector('.header__heading');
    const headerTexto = document.querySelector('.header__texto');
    const headerImagen = document.querySelector('.header__imagen');

    headerLogo.classList.add('header__logo--mostrar');
    headerHeading.classList.add('header__heading--mostrar');
    headerTexto.classList.add('header__texto--mostrar');
    headerImagen.classList.add('header__imagen--mostrar');
}

function scrollDestacada() {
    document.addEventListener('scroll', function() {
        const destacada = document.querySelector('.destacada');
        const destacadaHeading = document.querySelector('.destacada__heading');
        const destacadaTexto = document.querySelector('.destacada__texto');
        const destacadaPrecio = document.querySelector('.destacada__precio');
        const destacadaEnlace = document.querySelector('.destacada__enlace');

        if(destacada.getBoundingClientRect().top < 400){
            setTimeout(() => {
                destacadaHeading.classList.add('destacada__heading--mostrar');
                destacadaTexto.classList.add('destacada__texto--mostrar');
                destacadaPrecio.classList.add('destacada__precio--mostrar');
            }, 1000);

            setTimeout(() => {
                destacadaEnlace.classList.add('destacada__enlace--mostrar');
            }, 1800);
        }
    })
}
