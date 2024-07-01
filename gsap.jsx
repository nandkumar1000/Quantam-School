document.addEventListener('DOMContentLoaded', function() {
  gsap.from(".nav-item", {
    duration: 1,
    delay:0.9,
    opacity: 0,
    y: -50,
    stagger: 0.2,
    ease: "power2.out"
  });
});