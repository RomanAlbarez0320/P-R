document.addEventListener('DOMContentLoaded', () => {
    const starsContainer = document.querySelector('.stars');
    const heartsBackground = document.querySelector('.hearts-background');

    // Crea y anima las estrellas fugaces
    function createShootingStar() {
        const star = document.createElement('div');
        star.classList.add('shooting-star');
        star.style.left = `${Math.random() * 100}vw`;
        star.style.top = `${Math.random() * 80}vh`;
        star.style.animationDuration = `${Math.random() * 2 + 1}s`;
        star.style.width = `${Math.random() * 2 + 1}px`;
        star.style.height = `${Math.random() * 2 + 1}px`;
        starsContainer.appendChild(star);
        star.addEventListener('animationend', () => star.remove());
    }
    // Asegúrate de que este estilo esté en tu CSS si no lo tienes:
    /*
    .shooting-star {
        background: linear-gradient(to right, rgba(255, 255, 255, 0), var(--color-white));
        position: absolute;
        border-radius: 50%;
        animation: shoot 2s forwards ease-out;
        opacity: 0;
        filter: drop-shadow(0 0 5px var(--color-white));
    }
    @keyframes shoot {
        0% { transform: translateX(0) translateY(0) scale(0.5); opacity: 0; }
        10% { opacity: 1; }
        100% { transform: translateX(200px) translateY(200px) scale(1.2); opacity: 0; }
    }
    */
    setInterval(createShootingStar, 5000);

    // Crea y anima corazones y flores flotantes
    function createHeartOrFlower() {
        const element = document.createElement('div');
        element.style.left = `${Math.random() * 100}vw`;
        element.style.animationDuration = `${Math.random() * 8 + 7}s`;
        element.style.animationDelay = `-${Math.random() * 5}s`;
        element.style.fontSize = `${Math.random() * 1.5 + 1.5}rem`;

        if (Math.random() > 0.5) {
            element.classList.add('heart');
            element.textContent = "❤";
        } else {
            element.classList.add('flower');
            element.textContent = "❀";
        }
        heartsBackground.appendChild(element);
        element.addEventListener('animationend', () => element.remove());
    }
    
    // Generar elementos iniciales para que el fondo no esté vacío al cargar
    for (let i = 0; i < 20; i++) {
        createHeartOrFlower();
    }
    setInterval(createHeartOrFlower, 1000);
});