// Ripple effect for decorative buttons
// This script adds a ripple animation to any button with the class 'ripple'.
document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.mil-button.ripple').forEach(function(btn) {
    btn.addEventListener('click', function(e) {
      const circle = document.createElement('span');
      circle.classList.add('ripple-effect');
      const rect = btn.getBoundingClientRect();
      const size = Math.max(rect.width, rect.height);
      circle.style.width = circle.style.height = size + 'px';
      circle.style.left = (e.clientX - rect.left - size / 2) + 'px';
      circle.style.top = (e.clientY - rect.top - size / 2) + 'px';
      btn.appendChild(circle);
      circle.addEventListener('animationend', function() {
        circle.remove();
      });
    });
  });
});
