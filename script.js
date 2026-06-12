// --- 1. ПРЕЛОАДЕР ---
window.addEventListener('load', function() {
    const preloader = document.getElementById('preloader');
    preloader.style.opacity = '0';
    setTimeout(() => {
        preloader.style.display = 'none';
        // Запускаємо анімацію тексту ТІЛЬКИ після зникнення прелоадера
        playHeroAnimation();
    }, 600);
});

// --- 2. КАСТОМНИЙ КУРСОР ---
const cursorDot = document.getElementById("cursor-dot");
const cursorOutline = document.getElementById("cursor-outline");
const hoverTargets = document.querySelectorAll("a, .hover-target");

window.addEventListener("mousemove", function (e) {
    const posX = e.clientX;
    const posY = e.clientY;

    // Крапка рухається миттєво
    cursorDot.style.left = `${posX}px`;
    cursorDot.style.top = `${posY}px`;

    // Кільце рухається з плавною затримкою (завдяки GSAP)
    gsap.to(cursorOutline, {
        x: posX,
        y: posY,
        duration: 0.15,
        ease: "power2.out"
    });
});

// Анімація курсора при наведенні на клікабельні елементи
hoverTargets.forEach(target => {
    target.addEventListener("mouseenter", () => {
        cursorOutline.classList.add("cursor-hover");
    });
    target.addEventListener("mouseleave", () => {
        cursorOutline.classList.remove("cursor-hover");
    });
});

// --- 3. ЗМІНА НАВІГАЦІЇ ПРИ СКРОЛІ ---
window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// --- 4. ІНІЦІАЛІЗАЦІЯ AOS (Анімація при скролі вниз) ---
AOS.init({
    once: true,
    offset: 100,
});

// --- 5. GSAP: ПЛАВНА ПОЯВА ТЕКСТУ НА ГОЛОВНОМУ ЕКРАНІ ---
function playHeroAnimation() {
    const tl = gsap.timeline();
    
    tl.fromTo(".gsap-title", 
        { y: 50, opacity: 0 }, 
        { y: 0, opacity: 1, duration: 1, ease: "power3.out" }
    )
    .fromTo(".gsap-text", 
        { y: 30, opacity: 0 }, 
        { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" }, 
        "-=0.5" // Починається трохи раніше, ніж закінчиться попередня
    )
    .fromTo(".gsap-btn-container", 
        { y: 20, opacity: 0 }, 
        { y: 0, opacity: 1, duration: 0.5, ease: "power3.out" }, 
        "-=0.3"
    );
}
