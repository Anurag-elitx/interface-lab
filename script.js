document.addEventListener('DOMContentLoaded', () => {
  // Intersection Observer for fade-in animations
  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.15
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  const elementsToAnimate = document.querySelectorAll('.fade-in-up');
  elementsToAnimate.forEach(el => observer.observe(el));

  // Add parallax effect to collage images in hero section
  const collageItems = document.querySelectorAll('.collage-item');
  document.addEventListener('mousemove', (e) => {
    const x = e.clientX / window.innerWidth;
    const y = e.clientY / window.innerHeight;
    
    collageItems.forEach((item, index) => {
      const speed = (index + 1) * 15;
      const xOffset = (x - 0.5) * speed;
      const yOffset = (y - 0.5) * speed;
      item.style.transform = `translate(${xOffset}px, ${yOffset}px)`;
    });
  });
});
