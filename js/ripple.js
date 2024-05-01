const ripple = document.querySelector('.ripple');

document.addEventListener('click', function(e) {
  const circle = document.createElement('span');
  circle.classList.add('ripple-circle');
  circle.style.top = e.clientY + window.pageYOffset + 'px';
  circle.style.left = e.clientX + window.pageXOffset + 'px';
  ripple.appendChild(circle);

  setTimeout(() => {
    circle.remove();
  }, 1000);
});
