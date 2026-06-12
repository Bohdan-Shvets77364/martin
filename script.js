// Реєструємо плагін для роботи зі скролом
gsap.registerPlugin(ScrollTrigger);

// Створюємо загальний таймлайн для розбору скелета
const tl = gsap.timeline({
    scrollTrigger: {
        trigger: ".hero-scroll",
        start: "top top", // Початок анімації, коли секція торкається верху екрана
        end: "bottom bottom", // Кінець, коли секція закінчується
        scrub: 1, // "1" робить анімацію плавною, вона слідує за твоїм скролом
    }
});

// Анімація: розкидаємо частини в різні боки
// Параметри: x та y - зсув у пікселях, rotation - обертання, opacity - прозорість
tl.to(".skull", { y: -300, x: -150, rotation: -30, opacity: 0, ease: "power1.inOut" }, 0)
  .to(".ribs", { scale: 1.5, opacity: 0, ease: "power1.inOut" }, 0)
  .to(".arms", { x: -500, y: 200, rotation: -60, opacity: 0, ease: "power1.inOut" }, 0)
  .to(".legs", { y: 500, x: 250, rotation: 40, opacity: 0, ease: "power1.inOut" }, 0);

// Анімація текстів (поява та зникнення під час скролу)
const steps = gsap.utils.toArray('.scroll-step');

steps.forEach((step, i) => {
    gsap.fromTo(step, 
        { opacity: 0, y: 100 }, // Стан до появи
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
    
    // Ховаємо текст, якщо це не останній блок
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
