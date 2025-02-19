document.addEventListener('DOMContentLoaded', () => {
    const grid = document.querySelector('#game-board');
    const startButton = document.getElementById('start-game');
    let cardsChosen = [];
    let cardsChosenId = [];
    let cardsWon = [];

    const cardArray = [
        { name: 'card1', img: 'images/cat_meme.png' },
        { name: 'card1', img: 'images/cat_meme.png' },
        { name: 'card2', img: 'images/chill_guy.jpg' },
        { name: 'card2', img: 'images/chill_guy.jpg' },
        { name: 'card3', img: 'images/racoon.png' },
        { name: 'card3', img: 'images/racoon.png' },
        { name: 'card4', img: 'images/dog.jpg' },
        { name: 'card4', img: 'images/dog.jpg' },
        { name: 'card5', img: 'images/baby.png' },
        { name: 'card5', img: 'images/baby.png' },
    ];

    function shuffle(array) {
        array.sort(() => 0.5 - Math.random());
    }

    function createBoard() {
        shuffle(cardArray);
        grid.innerHTML = '';
        cardsWon = [];
        cardsChosen = [];
        cardsChosenId = [];

        cardArray.forEach((card, index) => {
            const cardElement = document.createElement('div');
            cardElement.classList.add('card');
            cardElement.setAttribute('data-id', index);
            cardElement.innerHTML = `<img src="${card.img}" alt="${card.name}" class="hidden">`;
            cardElement.addEventListener('click', flipCard);
            grid.appendChild(cardElement);
        });
    }

    function flipCard() {
        const cardId = this.getAttribute('data-id');
        if (!cardsChosenId.includes(cardId)) {
            cardsChosen.push(cardArray[cardId].name);
            cardsChosenId.push(cardId);
            this.querySelector('img').classList.remove('hidden');
            this.classList.add('flipped');

            if (cardsChosen.length === 2) {
                setTimeout(checkForMatch, 500);
            }
        }
    }

    function checkForMatch() {
        const cards = document.querySelectorAll('.card');
        const [firstCardId, secondCardId] = cardsChosenId;

        if (cardsChosen[0] === cardsChosen[1] && firstCardId !== secondCardId) {
            cards[firstCardId].classList.add('matched');
            cards[secondCardId].classList.add('matched');
            cards[firstCardId].removeEventListener('click', flipCard);
            cards[secondCardId].removeEventListener('click', flipCard);
            cardsWon.push(cardsChosen);
        } else {
            setTimeout(() => {
                if (!cards[firstCardId].classList.contains('matched')) {
                    cards[firstCardId].querySelector('img').classList.add('hidden');
                    cards[firstCardId].classList.remove('flipped');
                }
                if (!cards[secondCardId].classList.contains('matched')) {
                    cards[secondCardId].querySelector('img').classList.add('hidden');
                    cards[secondCardId].classList.remove('flipped');
                }
            }, 500);
        }

        cardsChosen = [];
        cardsChosenId = [];

        if (cardsWon.length === cardArray.length / 2) {
            setTimeout(showWinScreen, 600);
        }
    }

    function showWinScreen() {
        const popper = document.createElement('div');
        popper.classList.add('confetti');
        document.body.appendChild(popper);

        popper.innerHTML = `
            <div class="popup">
                <h2>🎉 Congratulations🎉</h2>
                <p>You matched all the cards!</p>
                <button id="play-again">Play Again</button>
            </div>
        `;

        document.getElementById('play-again').addEventListener('click', restartGame);
    }

    function restartGame() {
        document.querySelector('.confetti')?.remove();
        createBoard();
    }

    startButton.addEventListener('click', createBoard);
});
