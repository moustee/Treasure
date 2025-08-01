// Treasure Island Game Decision Tree

function startGame() {
    const firstPrompt = prompt("Welcome to Treasure Island! Would you like to go left or right?");
    
    if (firstPrompt.toLowerCase() === "left") {
        goLeft();
    } else if (firstPrompt.toLowerCase() === "right") {
        goRight();
    } else {
        alert("Please choose left or right.");
        startGame(); // Restart the game if input is invalid
    }
}

function goLeft() {
    const secondPrompt = prompt("You've come to a river. Do you want to swim or wait?");
    
    if (secondPrompt.toLowerCase() === "swim") {
        alert("You've been attacked by a crocodile. Game over!");
    } else if (secondPrompt.toLowerCase() === "wait") {
        alert("You safely cross the river and find the treasure! You win!");
    } else {
        alert("Please choose swim or wait.");
        goLeft(); // Restart this step if input is invalid
    }
}

function goRight() {
    const secondPrompt = prompt("You've encountered a bear. Do you want to fight or run?");
    
    if (secondPrompt.toLowerCase() === "fight") {
        alert("The bear overpowers you. Game over!");
    } else if (secondPrompt.toLowerCase() === "run") {
        alert("You run away safely and find a hidden treasure! You win!");
    } else {
        alert("Please choose fight or run.");
        goRight(); // Restart this step if input is invalid
    }
}

// Start the game
startGame();