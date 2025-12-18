// Import GSAP (using ESM from npm)
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

document.addEventListener('DOMContentLoaded', () => {

    // --- 1. HERO ANIMATIONS ---

    // a. Staggered Word Animation for Title
    const heroWords = document.querySelectorAll('.hero-title .word');
    gsap.from(heroWords, {
        y: 60,
        opacity: 0,
        duration: 1.2,
        stagger: 0.15,
        ease: "power3.out",
        delay: 0.3
    });

    // b. Subtitle and Button entrance
    gsap.from([".hero-subtitle", ".btn-primary"], {
        y: 40,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
        delay: 0.8
    });

    // --- 2. BENEFITS SEQUENTIAL REVEAL ---
    const benefitCards = document.querySelectorAll('.benefit-card');

    benefitCards.forEach((card, index) => {
        ScrollTrigger.create({
            trigger: card,
            start: "top 85%",
            onEnter: () => {
                setTimeout(() => {
                    card.classList.add('revealed');
                }, index * 200); // 200ms stagger between cards
            },
            once: true
        });
    });

    // --- 3. BLOCK A - PARALLAX & SCALE ---
    const blockAImg = document.querySelector('.block-a .story-img');
    if (blockAImg) {
        // Parallax effect
        gsap.to(blockAImg, {
            y: -80,
            ease: "none",
            scrollTrigger: {
                trigger: ".block-a",
                start: "top bottom",
                end: "bottom top",
                scrub: 1.5
            }
        });

        // Scale-up on entry
        ScrollTrigger.create({
            trigger: blockAImg,
            start: "top 80%",
            onEnter: () => blockAImg.classList.add('scale-in'),
            once: true
        });
    }

    // Block A text reveal
    gsap.from(".block-a .story-title, .block-a .story-desc", {
        x: -50,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
            trigger: ".block-a",
            start: "top 70%",
            once: true
        }
    });

    // --- 4. BLOCK B - BANNER TITLE REVEAL ---
    const bannerTitle = document.querySelector('.banner-title');
    if (bannerTitle) {
        ScrollTrigger.create({
            trigger: ".block-b",
            start: "top 60%",
            onEnter: () => bannerTitle.classList.add('revealed'),
            once: true
        });
    }

    // --- 5. BLOCK C - LUXURY FINISH ---
    const blockCImg = document.querySelector('.block-c .story-img');
    if (blockCImg) {
        // Parallax effect
        gsap.to(blockCImg, {
            y: -60,
            ease: "none",
            scrollTrigger: {
                trigger: ".block-c",
                start: "top bottom",
                end: "bottom top",
                scrub: 1.5
            }
        });

        // Scale-up with glow on entry
        ScrollTrigger.create({
            trigger: blockCImg,
            start: "top 80%",
            onEnter: () => blockCImg.classList.add('scale-in'),
            once: true
        });
    }

    // Block C text reveal
    gsap.from(".block-c .story-title, .block-c .story-desc", {
        x: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
            trigger: ".block-c",
            start: "top 70%",
            once: true
        }
    });

    // --- 6. NAVBAR SCROLL EFFECT ---
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

    // --- 7. FOOTER REVEAL ---
    gsap.from(".footer-content > *", {
        y: 30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
            trigger: "footer",
            start: "top 90%",
            once: true
        }
    });

});
