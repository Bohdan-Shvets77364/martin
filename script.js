// Ініціалізація анімацій AOS
AOS.init({
    once: true, // Анімація програється лише один раз при скролі
    offset: 100, // Запуск анімації трохи раніше/пізніше появи елемента
});

// Зміна стилю навігації при скролі (робить її тоншою і додає тінь)
window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});
