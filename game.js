const letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
let word;

function getLetterButtons() {
    const containerLetters = document.getElementById('lettersContainer');
    letters.forEach(letter => {
        const button = document.createElement('button');
        button.textContent = letter;
        button.id = letter;
        button.classList.add('letterButton');
        button.addEventListener('click', () => handleLetterButtonClick(letter));
        containerLetters.appendChild(button);
    });
}

function getAttemps() {
    const containerAttempts = document.getElementById('attemptsContainer');
    let maxAttempts = 5;
    for (let i = 0; i < maxAttempts; i++) {
        const heartImg = document.createElement('img');
        heartImg.src = './img//heart.png';
        heartImg.alt = 'live';
        containerAttempts.appendChild(heartImg);
    }
}


async function getRandomWord() {
    try {
        const response = await fetch('https://random-word-api.herokuapp.com/word');
        const data = await response.json();
        return data[0];
    } catch (error) {
        console.log('Error fetching random word:', error);
        return null;
    }
}

async function createUnderlines() {
    word = await getRandomWord();
    while (word && (word.length < 5 || word.length > 7)) {
        word = await getRandomWord();
    }

    console.log('Random word:', word);
    const letters = word.split('')
    const wordContainer = document.getElementById('wordContainer');

    letters.forEach(letter => {
        const img = document.createElement('img');
        img.src = "./img/underline.png";
        img.classList.add('letterPlaceholder');
        wordContainer.appendChild(img);
    })
}

function handleLetterButtonClick(letter) {
    const placeholders = document.getElementsByClassName('letterPlaceholder');
    for (let i = 0; i < word.length; i++) {
        if (word[i].toUpperCase() === letter) {
            // const letterText = document.createTextNode(letter);
            // placeholders[i].parentNode.replaceChild(letterText, placeholders[i]); 
            // letterText.parentElement.classList.add('revealed-letter');
        }
    }
    document.getElementById(letter).disabled = true;
}

function clickReturnButton() {
    document.getElementById('returnButton').addEventListener('click', () => {
        window.location.href = './index.html';
    });
}

async function startGame() {
    getAttemps();
    clickReturnButton();
    getRandomWord();
    await createUnderlines();
    getLetterButtons();
    handleLetterButtonClick();
}

startGame();
