const hero = document.getElementById('hero');
const letters = Array.from(document.querySelectorAll('.letter'));

const clamp = (value, min, max) => Math.min(Math.max(value, min), max);

window.addEventListener('pointermove', (event) => {
  const x = event.clientX / window.innerWidth - 0.5;
  const y = event.clientY / window.innerHeight - 0.5;

  hero.style.transform = `translate3d(${x * 10}px, ${y * 10}px, 0)`;

  letters.forEach((letter, index) => {
    const depth = index - (letters.length - 1) / 2;
    const rotateX = clamp(y * -10 + depth * 0.25, -8, 8);
    const rotateY = clamp(x * 14 + depth * 0.7, -12, 12);
    const shiftX = x * (10 + index * 1.5);
    const shiftY = y * (8 + index);

    letter.style.transform = `translate3d(${shiftX}px, ${shiftY}px, 0) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  });
});

window.addEventListener('pointerleave', () => {
  hero.style.transform = 'translate3d(0, 0, 0)';
  letters.forEach((letter) => {
    letter.style.transform = '';
  });
});
