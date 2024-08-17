document.addEventListener('DOMContentLoaded', () => {
    const starContainer = document.querySelector('.stars');
    const starCount = 100; // Total number of stars

    for (let i = 0; i < starCount; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        
        // Randomize position
        const x = Math.random() * window.innerWidth;
        const y = Math.random() * window.innerHeight;
        star.style.left = `${x}px`;
        star.style.top = `${y}px`;

        // Randomize size
        const size = Math.random() * 10 + 8; // Random size between 8px and 18px
        star.style.width = `${size}px`;
        star.style.height = `${size}px`;

        starContainer.appendChild(star);

        // Add shooting effect on mouse hover
        star.addEventListener('mouseover', () => {
            star.classList.add('shooting');
        });

        star.addEventListener('animationend', () => {
            star.classList.remove('shooting');
        });
    }
});
