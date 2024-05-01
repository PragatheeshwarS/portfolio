const animateOnScroll = document.querySelector('.animate-on-scroll');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    console.log(entries)
    if (entry.isIntersecting) {
      animateOnScroll.classList.add('animate');
      observer.unobserve(entry.target);
    }
  });
}, { rootMargin: '-100px' });

observer.observe(animateOnScroll);
