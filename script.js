const card = document.getElementById('card');
const letterWrap = document.getElementById('letterWrap');
const closeBtn = document.getElementById('closeBtn');

card.addEventListener('click', () => {
    card.classList.add('open');
    setTimeout(() => {
        letterWrap.classList.add('show');
    }, 400);
});

closeBtn.addEventListener('click', () => {
    letterWrap.classList.remove('show');
    setTimeout(() => {
        card.classList.remove('open');
    }, 350);
});

const balloonContainer = document.getElementById('balloon-container');

const colors = [
    'rgba(255, 255, 255, 0.6)', 
    'rgba(255, 184, 209, 0.7)',  
    'rgba(255, 207, 224, 0.7)', 
    'rgba(255, 227, 238, 0.7)'  
];

function createBalloons() {
    for (let i = 0; i < 15; i++) {
        const balloon = document.createElement('div');
        balloon.classList.add('balloon');
        const randomLeft = Math.floor(Math.random() * 80) + 10;
        balloon.style.left = randomLeft + 'vw';
        const randomDuration = Math.floor(Math.random() * 7) + 6;
        balloon.style.animationDuration = randomDuration + 's';
        const randomDelay = Math.floor(Math.random() * 5);
        balloon.style.animationDelay = randomDelay + 's';
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        balloon.style.backgroundColor = randomColor;
        balloonContainer.appendChild(balloon);
    }
}
createBalloons();


