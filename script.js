// Script optimizado para móviles
document.addEventListener('DOMContentLoaded', function() {
  const heartsContainer = document.querySelector('.hearts-background');
  const hearts = ['❤️', '💖'];
  const flowers = ['🌸', '🌷'];
  
  function createFloatingElement() {
    // Menos elementos para mejor rendimiento en móvil
    if (Math.random() > 0.7) return;
    
    const element = document.createElement('div');
    const isHeart = Math.random() > 0.5;
    const symbols = isHeart ? hearts : flowers;
    const symbol = symbols[Math.floor(Math.random() * symbols.length)];
    
    element.className = isHeart ? 'heart' : 'flower';
    element.innerHTML = symbol;
    element.style.left = Math.random() * 100 + 'vw';
    element.style.animationDuration = (Math.random() * 8 + 12) + 's'; // Más lento
    element.style.fontSize = (Math.random() * 0.8 + 1) + 'rem'; // Más pequeño
    
    heartsContainer.appendChild(element);
    
    // Eliminar después de animación
    setTimeout(() => {
      if (element.parentNode) {
        element.parentNode.removeChild(element);
      }
    }, 20000);
  }
  
  // Menos frecuencia para mejor rendimiento
  setInterval(createFloatingElement, 800);
  
  // Pocos elementos iniciales
  for (let i = 0; i < 5; i++) {
    setTimeout(createFloatingElement, i * 300);
  }
});
