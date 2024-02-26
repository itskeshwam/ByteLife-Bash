const numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];
const cards = numbers.concat(numbers); // Duplicate numbers to create pairs

let flippedCards = [];
let matchedCards = [];

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function createCard(number) {
    const card = document.createElement('div');
    card.classList.add('memory-card');

    const innerCard = document.createElement('div');
    innerCard.classList.add('inner-card');

    const frontFace = document.createElement('div');
    frontFace.classList.add('front-face');

    const backFace = document.createElement('div');
    backFace.classList.add('back-face');
    backFace.textContent = number;

    innerCard.appendChild(frontFace);
    innerCard.appendChild(backFace);

    card.appendChild(innerCard);

    card.addEventListener('click', flipCard);

    return card;
}

function flipCard() {
    if (flippedCards.length < 2 && !flippedCards.includes(this) && !matchedCards.includes(this)) {
        this.querySelector('.inner-card').style.transform = 'rotateY(180deg)';
        flippedCards.push(this);
        if (flippedCards.length === 2) {
            checkMatch();
        }
    }
}

function checkMatch() {
    const firstCard = flippedCards[0];
    const secondCard = flippedCards[1];
    
    const firstCardValue = firstCard.querySelector('.back-face').textContent;
    const secondCardValue = secondCard.querySelector('.back-face').textContent;

    if (firstCardValue === secondCardValue) {
        flippedCards.forEach(card => card.classList.add('matched'));
        matchedCards = matchedCards.concat(flippedCards);
        if (matchedCards.length === cards.length) {
            setTimeout(() => alert('Congratulations! You won!'), 500);
        }
    } else {
        setTimeout(() => {
            firstCard.querySelector('.inner-card').style.transform = 'rotateY(0deg)';
            secondCard.querySelector('.inner-card').style.transform = 'rotateY(0deg)';
        }, 1000);
    }

    flippedCards = [];
}

function initializeGame() {
    const shuffledCards = shuffle(cards);
    const gameBoard = document.getElementById('game-board');

    shuffledCards.forEach(number => {
        const card = createCard(number);
        gameBoard.appendChild(card);
    });
}

initializeGame();
