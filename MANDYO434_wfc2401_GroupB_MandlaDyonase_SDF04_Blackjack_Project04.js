'use strict'; // 'use strict' enables strict mode, which catches common coding errors and "unsafe" actions
//I'm currently having a problem to debugg on devtools and I also try to use node.js to debugg on the terminal

// Declaring and assigning variables
let firstCard = getRandomCard(); // Get a random card for the first card
let secondCard = getRandomCard(); // Get a random card for the second card
let cards = []; // Array to store the cards
let hasBlackJack = false; // Variable to track if the player has blackjack
let isAlive = true; // Variable to track if the player is still in the game
let sum = 0; // Variable to store the sum of the cards
let message = ""; // Variable to store the game message

// Getting HTML elements by id attribute
let messageEl = document.getElementById('message-el'); // Element to display game messages
let sumEl = document.querySelector('#sum-el'); // Element to display the sum of the cards
let cardsEl = document.querySelector('#cards-el'); // Element to display the cards

// Player object to store player information
let player = {
    playerName: "Man",
    chips: 145
}

let playerEl = document.getElementById('player-el"'); // Element to display player information

// Display the player's name and chips
playerEl.textContent = player.playerName + ": $" + player.chips;

// Function to get a random card
function getRandomCard() {
    let randomNumber = Math.floor(Math.random() * 13) + 1; // Generate a random number between 1 and 13

    if (randomNumber > 10) {
        return 10; // If the number is greater than 10, return 10
    } else if (randomNumber === 1) {
        return 11; // If the number is 1, return 11
    } else {
        return randomNumber; // Otherwise, return the number
    }
}

// Function to start the game
function startGame() {
    // Get new random cards for the first and second cards
    let firstCard = getRandomCard();
    let secondCard = getRandomCard();
    cards = [firstCard, secondCard]; // Set the cards array with the new cards
    sum = firstCard + secondCard; // Calculate the sum of the new cards
    isAlive = true; // Set isAlive to true

    renderGame(); // Invoke a render function to display the initial game state
}

// Function to render the game
function renderGame() {
    // Clear the cards before rendering
    cardsEl.textContent = "Cards: ";

    // Render all the cards
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " "; // Display each card in the cardsEl element
    }

    sumEl.textContent = "Sum: " + sum; // Display the sum of the cards in the sumEl element

    // Check the game state and display the appropriate message
    if (sum < 21) {
        message = "You want to draw another card";
        messageEl.textContent = message; // Display the message in the messageEl element
    } else if (sum === 21) {
        message = "You got blackjack!";
        messageEl.textContent = message; // Display the message in the messageEl element
        hasBlackJack = true; // Set hasBlackJack to true
    } else {
        message = "You are out of the game!";
        messageEl.textContent = message; // Display the message in the messageEl element
        isAlive = false; // Set isAlive to false
    }
}

// Function to add a new card
function newCard() {
    if (isAlive === true && hasBlackJack === false) {
        let card = getRandomCard(); // Get a new random card
        cards.push(card); // Add the new card to the cards array
        sum += card; // Add the new card to the sum
        renderGame(); // Update the game state to display the new card and sum
    }
}