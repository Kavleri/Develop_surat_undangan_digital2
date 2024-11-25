document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Pesanan Anda telah dikirim! Kami akan segera menghubungi Anda.');
});

document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const name = form.name.value;
        const email = form.email.value;
        const package = form.package.value;
        const details = form.details.value;

        alert(`Pesanan berhasil!\nNama: ${name}\nEmail: ${email}\nPaket: ${package}\nDetail: ${details}`);

        form.reset();
    });
});

function toggleMenu() {
    document.querySelector('.navbar-menu').classList.toggle('active');
}


window.addEventListener('scroll', function() {
    if (window.scrollY > 50) { 
        logoContainer.classList.add('show');
    } else {
        logoContainer.classList.remove('show');
    }
});

logoContainer.addEventListener('mouseover', function() {
    logoContainer.classList.add('show');
});

logoContainer.addEventListener('mouseout', function() {
    if (window.scrollY <= 50) {
        logoContainer.classList.remove('show');
    }
});

const logoContainer = document.querySelector('.logo-container');
const logoSection = document.getElementById('logo-section');

window.addEventListener('scroll', () => {
    const sectionRect = logoSection.getBoundingClientRect();
    const isInViewport = sectionRect.top < window.innerHeight && sectionRect.bottom >= 0;

    if (isInViewport) {
        logoContainer.classList.add('active');
    } else {
        logoContainer.classList.remove('active');
    }
});