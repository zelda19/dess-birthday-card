const card = document.getElementById('card');
const letterWrap = document.getElementById('letter-wrap');
const closeBtn = documetn.getElementById('close-btn');

card.addEventListener('click', () => {
    letterWrap.classList.add('show');
});

closeBtn.addEventListener('click', () => {
    letterWrap.classList.remove('show');
});