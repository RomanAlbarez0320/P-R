document.addEventListener('DOMContentLoaded', () => {
    const starsContainer = document.querySelector('.stars');
    const heartsBackground = document.querySelector('.hearts-background');

    // Estrellas fugaces
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
    setInterval(createShootingStar, 5000);

    // Corazones y flores
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
    for (let i = 0; i < 20; i++) createHeartOrFlower();
    setInterval(createHeartOrFlower, 1000);
});
