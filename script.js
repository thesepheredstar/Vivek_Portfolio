// Hero section fade in
gsap.from(".hero-title", { duration: 1, y: -50, opacity: 0, ease: "power2.out" });
gsap.from(".hero-subtitle", { duration: 1, y: 30, opacity: 0, delay: 0.5, ease: "power2.out" });

// Scroll-triggered reveals
gsap.utils.toArray("section").forEach(section => {
  gsap.to(section, {
    scrollTrigger: {
      trigger: section,
      start: "top 85%",
      toggleActions: "play none none none"
    },
    opacity: 1,
    y: 0,
    duration: 1.2,
    ease: "power3.out"
  });
});
