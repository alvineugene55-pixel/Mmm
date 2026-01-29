// Scroll reveal
const reveal = document.querySelectorAll('.reveal');
window.addEventListener('scroll', () => {
  const triggerBottom = window.innerHeight / 1.2;
  reveal.forEach(el => {
    const boxTop = el.getBoundingClientRect().top;
    if(boxTop < triggerBottom){ el.classList.add('active'); }
  });
});

// Counter animation
const counters = document.querySelectorAll('.counter');
counters.forEach(counter => {
  const updateCount = () => {
    const target = +counter.getAttribute('data-target');
    const count = +counter.innerText;
    const increment = target / 200;
    if(count < target){ counter.innerText = Math.ceil(count + increment); setTimeout(updateCount,10); } 
    else { counter.innerText = target; }
  };
  updateCount();
});
