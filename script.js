// Selección de elementos del DOM
const htmlElement = document.documentElement;
const menuButton = document.getElementById('menuButton');
const mobileMenu = document.getElementById('mobile-menu');

menuButton.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
});

function highlightActiveLink(linksSelector, basePath) {
    let currentPath = window.location.pathname.replace(basePath, '').split('/').pop() || 'index.html';

    document.querySelectorAll(linksSelector).forEach(link => {
        const linkHref = link.getAttribute('href');
        if (
            linkHref.endsWith(currentPath) ||
            (currentPath === 'index.html' && (linkHref === '/' || linkHref.endsWith('index.html')))
        ) {
            link.classList.add('bg-gradient-to-r', 'from-blue-600', 'to-blue-700', 'text-white', 'scale-105', 'shadow-lg');
        }
    });
}

const basePath = '/avances-instituto-eureka/';

document.addEventListener('DOMContentLoaded', () => {
    highlightActiveLink('.nav-link', basePath);    // Enlaces para la navegación principal
    highlightActiveLink('.mobile-link', basePath); // Enlaces para el menú móvil
});

// Formulario de contacto 
const contactForm = document.getElementById('contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        // Aquí normalmente enviarías los datos a un servidor
        console.log('Formulario enviado:', { name, email, message });
        alert('Gracias por tu mensaje. Te contactaremos pronto.');
        contactForm.reset();
    });
}
