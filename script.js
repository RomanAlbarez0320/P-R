// Script para generar corazones y flores flotantes
document.addEventListener('DOMContentLoaded', function() {
  const heartsContainer = document.querySelector('.hearts-background');
  const hearts = ['❤️', '💖', '💕', '💗', '💓'];
  const flowers = ['🌸', '🌺', '🌷', '💐', '🌹'];
  
  function createFloatingElement() {
    const element = document.createElement('div');
    const isHeart = Math.random() > 0.5;
    const symbols = isHeart ? hearts : flowers;
    const symbol = symbols[Math.floor(Math.random() * symbols.length)];
    
    element.className = isHeart ? 'heart' : 'flower';
    element.innerHTML = symbol;
    element.style.left = Math.random() * 100 + 'vw';
    element.style.animationDuration = (Math.random() * 10 + 10) + 's';
    element.style.fontSize = (Math.random() * 1 + 1.5) + 'rem';
    
    heartsContainer.appendChild(element);
    
    // Eliminar elemento después de que termine la animación
    setTimeout(() => {
      if (element.parentNode) {
        element.parentNode.removeChild(element);
      }
    }, 20000);
  }
  
  // Crear elementos flotantes cada 500ms
  setInterval(createFloatingElement, 500);
  
  // Crear algunos elementos iniciales
  for (let i = 0; i < 10; i++) {
    setTimeout(createFloatingElement, i * 200);
  }
});
