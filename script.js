// Import GSAP (using ESM from npm)
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

document.addEventListener('DOMContentLoaded', () => {

    // --- 1. HERO ANIMATIONS (Entrance) ---
    const heroTimeline = gsap.timeline();

    // a. Scale Up (Jar)
    heroTimeline.from(".hero-card", {
        scale: 0.95,
        duration: 1.5,
        ease: "power3.out",
        clearProps: "all"
    })
        // b. Staggered Slide Up (Text)
        .from([".hero-title", ".hero-subtitle", ".btn-primary"], {
            y: 30,
            opacity: 0,
            duration: 1,
            stagger: 0.2,
            ease: "power3.out"
        }, "-=1.0");

    // c. Continuous Floating (Bobbing) - Loop
    gsap.to(".floating-anim", {
        y: -15,
        rotation: 2,
        duration: 4,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1
    });

    // --- 2. STORYTELLING SUBTLE SCROLL (Visual Only) ---
    // Moving the images slightly faster than scroll for depth, but NO HIDING
    gsap.utils.toArray(".story-img").forEach(img => {
        gsap.to(img, {
            y: -50,
            ease: "none",
            scrollTrigger: {
                trigger: img.closest(".story-block"),
                start: "top bottom",
                end: "bottom top",
                scrub: true
            }
        });
    });

    // --- 3. NAVBAR SCROLL EFFECT ---
    const navbar = document.getElementById('navbar');
    ScrollTrigger.create({
        start: 50,
        onUpdate: (self) => {
            if (self.direction === 1 && self.scroll() > 50) {
                navbar.classList.add('scrolled');
            } else if (self.scroll() < 50) {
                navbar.classList.remove('scrolled');
            }
        }
    });

});
