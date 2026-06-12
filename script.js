// --- 1. ПРЕЛОАДЕР ---
window.addEventListener('load', function() {
    const preloader = document.getElementById('preloader');
    preloader.style.opacity = '0';
    setTimeout(() => {
        preloader.style.display = 'none';
    }, 600);
});

// --- 2. ЗМІНА НАВІГАЦІЇ ПРИ СКРОЛІ ---
window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// --- 3. ІНІЦІАЛІЗАЦІЯ AOS (Анімація блоків при скролі) ---
AOS.init({
    once: true,
    offset: 100,
});

// --- 4. GSAP: АНІМАЦІЯ РОЗБОРУ СКЕЛЕТА ТА ТЕКСТІВ ---
gsap.registerPlugin(ScrollTrigger);

// Таймлайн для скелета
const tl = gsap.timeline({
    scrollTrigger: {
        trigger: ".hero-scroll",
        start: "top top", 
        end: "bottom bottom", 
        scrub: 1, 
    }
});

// Розлітання частин
tl.to(".skull", { y: -300, x: -150, rotation: -30, opacity: 0, ease: "power1.inOut" }, 0)
  .to(".ribs", { scale: 1.5, opacity: 0, ease: "power1.inOut" }, 0)
  .to(".arms", { x: -500, y: 200, rotation: -60, opacity: 0, ease: "power1.inOut" }, 0)
  .to(".legs", { y: 500, x: 250, rotation: 40, opacity: 0, ease: "power1.inOut" }, 0);

// Анімація кроків тексту
const steps = gsap.utils.toArray('.scroll-step');

steps.forEach((step, i) => {
    gsap.fromTo(step, 
        { opacity: 0, y: 100 },
        {
            opacity: 1,
            y: 0,
            scrollTrigger: {
                trigger: step,
                start: "top center",
                end: "center center",
                scrub: true
            }
        }
    );
    
    if(i !== steps.length - 1) {
        gsap.to(step, {
            opacity: 0,
            y: -100,
            scrollTrigger: {
                trigger: step,
                start: "center center",
                end: "bottom center",
                scrub: true
            }
        });
    }
});
