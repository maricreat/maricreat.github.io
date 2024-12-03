document.addEventListener("DOMContentLoaded", () => {
    // Анимация заголовка
    gsap.to(".hero", { opacity: 1, duration: 1.5 });
    
    // Анимация секций
    gsap.from(".card", { 
        y: 50, 
        opacity: 0, 
        duration: 1, 
        stagger: 0.2 
    });

    gsap.from(".about, .contact", { 
        x: -100, 
        opacity: 0, 
        duration: 1, 
        scrollTrigger: {
            trigger: ".about, .contact",
            start: "top 80%"
        }
    });
});
 
