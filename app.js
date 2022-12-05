'use strict';

const newGameBtn = document.getElementById('new-game');
const rollBtn = document.getElementById('roll');
const newhold = document.getElementById('hold');
const dice = document.getElementById('dice')
const currentScoreElmPlayerOne = document.querySelector('.current-score.player-1')
const currentScoreElmPlayerTwo = document.querySelector('.current-score.player-2')
const scoreElemPlayerOne = document.querySelector('.score.player-1')
const scoreElemPlayerTwo = document.querySelector('.score.player-2')
const playerOne = document.querySelector('.player-1')
const playerTwo = document.querySelector('.player-2')



newGameBtn.addEventListener('click', newGame)
rollBtn.addEventListener('click', roll)
newhold.addEventListener('click', hold)

let activePlayer = 1;
// console.log("activePlayer is: " + activePlayer)

let currentScorePlayerOne = Number(currentScoreElmPlayerOne.innerText) // 0 as a start;
// console.log("currentScorePlayerOne begining: " + currentScorePlayerOne)

let currentScorePlayerTwo = Number(currentScoreElmPlayerTwo.innerText) // 0 as a start;
// console.log("currentScorePlayerTwo begining: " + currentScorePlayerTwo)

let scorePlayerOne = Number(scoreElemPlayerOne.innerText)
// console.log("scorePlayerOne begning: " + scorePlayerOne)

let scorePlayerTwo = Number(scoreElemPlayerTwo.innerText)
// console.log("scorePlayerTwo begning: " + scorePlayerTwo)

playerOne.classList.add('current-player')

function newGame() {
    console.log("--- new Game ----")
    // player 1 starts
    activePlayer = 1;
    console.log("activePlayer is: " + activePlayer)

    // background color of player 1 is white, player 2 is transperent 
    playerTwo.classList.remove('current-player')
    playerOne.classList.add('current-player')


    // player 1 and 2 's scores are 0
    scorePlayerOne = 0;
    scorePlayerTwo = 0;
    scoreElemPlayerOne.innerText = scorePlayerOne
    scoreElemPlayerTwo.innerText = scorePlayerTwo


    // current is 0 in both
    currentScorePlayerOne = 0;
    currentScorePlayerTwo = 0;
    currentScoreElmPlayerOne.innerText = currentScorePlayerOne;
    currentScoreElmPlayerTwo.innerText = currentScorePlayerTwo;

    // dice is hidden
    dice.style.visibility = "hidden";

    // roll btn is anabled 
    rollBtn.disabled = false;

}

function roll() {
    console.log("--- roll dice ----")
    
    console.log("activePlayer is: " + activePlayer)

    // role a random number and show it in the dice
    const randomNum = Number(Math.floor((Math.random() * 5) + 1))
    dice.style.visibility = "visible"
    dice.innerText = randomNum

    // if dice is 1 switch player  
    if (randomNum === 1) {
        switchPlayer();

    } // if not number in the dice is added to current score to the active player
    else {
        if(activePlayer === 1) {
            console.log("randomNum after roll: " + randomNum)
            currentScorePlayerOne += randomNum
            currentScoreElmPlayerOne.innerText = currentScorePlayerOne
        
            console.log("currentScore after roll: " + currentScorePlayerOne)
            console.log("score: " + scorePlayerOne)
        } else {
            console.log("randomNum after roll: " + randomNum)
            currentScorePlayerTwo += randomNum
            currentScoreElmPlayerTwo.innerText = currentScorePlayerTwo
        
            console.log("currentScore after roll: " + currentScorePlayerTwo)
            console.log("score: " + scorePlayerTwo)
        }
    }  
}


function hold() {
    console.log("---- hold ----")

    if(activePlayer === 1) {
        // current number is added to player score
        scorePlayerOne += currentScorePlayerOne
        console.log("score after hold: " + scorePlayerOne)
        console.log("currentScorePlayerOne after hold: " + currentScorePlayerOne)
        scoreElemPlayerOne.innerText = scorePlayerOne;
    
        // current score is set to 0
        currentScorePlayerOne = 0;
        currentScoreElmPlayerOne.innerText = currentScorePlayerOne;


    } else {
        scorePlayerTwo += currentScorePlayerTwo
        console.log("score after hold: " + scorePlayerTwo)
        console.log("currentScorePlayerTwo after hold: " + currentScorePlayerTwo)
        scoreElemPlayerTwo.innerText = scorePlayerTwo;
    
        // current score is set to 0
        currentScorePlayerTwo = 0;
        currentScoreElmPlayerTwo.innerText = currentScorePlayerTwo;
    }

    // score >= 100 active player wins
           if (scorePlayerOne >= 100 || scorePlayerTwo >= 100) {
            console.log("player wins!")
            dice.style.visibility = "visible";
            dice.style.textAlign = "center";
            dice.innerText = `Player ${activePlayer} wins!`

            // roll dice btn inactive
            rollBtn.disabled = true;

        } else {
            // dice is disappear
            dice.style.visibility = "hidden";

            // switch player:
            switchPlayer();
        }
}


function switchPlayer() {
    console.log("---- switch player ----")
    // current scores are 0
    currentScorePlayerOne = 0;
    currentScorePlayerTwo = 0;
    currentScoreElmPlayerOne.innerText = currentScorePlayerOne;
    currentScoreElmPlayerTwo.innerText = currentScorePlayerTwo;

    // switch player:
    console.log("activePlayer is: " + activePlayer)
    activePlayer === 1 ? activePlayer = 2 : activePlayer = 1
    console.log("activePlayer is: " + activePlayer)
    

    // background color of active player is white
    if(activePlayer === 2) {
        playerOne.classList.remove('current-player')
        playerTwo.classList.add('current-player')
    } else {
        playerTwo.classList.remove('current-player')
        playerOne.classList.add('current-player')
    }
    

}

