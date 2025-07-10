const counter = document.getElementById('counter');
const duration = 5000;

function animateCounter(start) {
  function update(now) {
    const progress = Math.min((now - start) / duration, 1);
    counter.textContent = `${Math.round(progress * 100)}%`;

    if (progress < 1) {
      requestAnimationFrame(update);
    }
  }
  requestAnimationFrame(update);
}
document.querySelector('.loading_bar').addEventListener('animationiteration', () => {
  animateCounter(performance.now());
});
animateCounter(performance.now());
