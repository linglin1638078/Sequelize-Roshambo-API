const gamePlay = (playerGesture) => {
    // create array of 3 options -"rock", "paper", or "scissors"
    //Scissors beats paper
    //Paper beats Rock
    //Rock beats Scissors
    const option = ['rock', 'paper', 'scissors'];

    //create a random number between 0-2 index
    let randomIndex = Math.floor(Math.random() * 3);
    console.log(randomIndex);
    let computerGesture = option[randomIndex];
    console.log(computerGesture);

    let result = " ";

    if (playerGesture === computerGesture) {
        result = 'tie';
    }
    
    if (playerGesture === 'rock') {
        if (computerGesture === 'scissors') {
            result = 'human';
        }
        else {
            result = 'computer';
        }
    }

    if (playerGesture === 'paper') {
        if (computerGesture === 'rock') {
            result = 'human';
        }
        else {
            result = 'computer';
        }
    }

    if (playerGesture === 'scissors') {
        if (computerGesture === 'paper') {
            result = 'human';
        }
        else {
            result = 'computer';
        }
    }

    console.log(result);
    return result;



}

module.exports =  gamePlay;