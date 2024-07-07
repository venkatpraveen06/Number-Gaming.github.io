// Initialize variables
let secretNumber;
let guessCount = 0;
let bestScore = Infinity; // Start with infinity to ensure any guess count will be less

// Function to start/restart the game
function startGame() {
    secretNumber = Math.floor(Math.random() * 100) + 1;
    guessCount = 0;
    document.getElementById('guessInput').value = '';
    document.getElementById('feedback').textContent = '';
    updateScore();
}

// Function to check the player's guess
function checkGuess() {
    let playerGuess = parseInt(document.getElementById('guessInput').value);
    
    if (isNaN(playerGuess) || playerGuess < 1 || playerGuess > 100) {
        alert('Please enter a number between 1 and 100.');
        return;
    }

    guessCount++;

    if (playerGuess === secretNumber) {
        displayFeedback('correct');
        if (guessCount < bestScore) {
            bestScore = guessCount;
            updateScore();
        }
        document.body.style.backgroundColor = '#39ff14'; // Neon green
    } else if (playerGuess < secretNumber) {
        displayFeedback('low');
        document.body.style.backgroundColor = '#000'; // Black
    } else {
        displayFeedback('high');
        document.body.style.backgroundColor = '#ff0000'; // Red
    }
}

// Function to display feedback to the player
function displayFeedback(type) {
    let feedbackElement = document.getElementById('feedback');
    switch (type) {
        case 'low':
            feedbackElement.textContent = 'Too low';
            break;
        case 'high':
            feedbackElement.textContent = 'Too high';
            break;
        case 'correct':
            feedbackElement.textContent = 'You won!';
            break;
        default:
            break;
    }
}

// Function to update the best score display
function updateScore() {
    document.getElementById('bestScore').textContent = bestScore;
}

// Function to reset the game
function resetGame() {
    startGame();
    document.body.style.backgroundColor = '#000'; // Reset background color to black
}

// Initialize the game when the page loads
document.addEventListener('DOMContentLoaded', function() {
    startGame();
});