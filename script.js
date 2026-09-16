const card = document.getElementById('card');
const letterWrap = document.getElementById('letterWrap');
const closeBtn = document.getElementById('closeBtn');

card.addEventListener('click', () => {
    letterWrap.classList.add('show');
});

closeBtn.addEventListener('click', () => {
    letterWrap.classList.remove('show');
});