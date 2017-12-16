// All code should be written in this file.

//player one
var playerOneMoveOneType;
var playerOneMoveOneValue;
var playerOneMoveTwoType;
var playerOneMoveTwoValue;
var playerOneMoveThreeType;
var playerOneMoveThreeValue;

//player two
var playerTwoMoveOneType;
var playerTwoMoveOneValue;
var playerTwoMoveTwoType;
var playerTwoMoveTwoValue;
var playerTwoMoveThreeType;
var playerTwoMoveThreeValue;

var moveValueMin = 1;
var moveValueMax = 97;

//Game functions
function setPlayerMoves(player, moveOneType, moveOneValue, moveTwoType, moveTwoValue, moveThreeType, moveThreeValue) {
  if (!player || !moveOneType || !moveOneValue || !moveTwoType || !moveTwoValue || !moveThreeType || !moveThreeValue) {
    return;
  }
  if((player !== 'Player One') && (player !== 'Player Two')) {
    return;
  }
  if (moveOneType !== 'rock' && moveOneType !== 'paper' && moveOneType !== 'scissors') {
    return;
  }
  if (moveTwoType !== 'rock' && moveTwoType !== 'paper' && moveTwoType !== 'scissors') {
    return;
  }
  if (moveThreeType !== 'rock' && moveThreeType !== 'paper' && moveThreeType !== 'scissors') {
    return;
  }
  if ((moveOneValue + moveTwoValue + moveThreeValue) > 99) {
    return;
  }
  if (moveOneValue > 99 || moveTwoValue > 99 || moveThreeValue > 99) {
    return;
  }
  if (moveOneValue < 1 || moveTwoValue < 1 || moveThreeValue < 1) {
    return;
  }

  if (player = 'Player One') {
    if (moveOneType === 'rock') {
      playerOneMoveOneType = 'rock';
    } else if (moveOneType === 'paper') {
      playerOneMoveOneType = 'paper';
    } else if (moveOneType === 'scissors') {
      playerOneMoveOneType = 'scissors';
    }
  }

  if (player = 'Player One') {
    if (moveTwoType === 'rock') {
      playerOneMoveTwoType = 'rock';
    } else if (moveTwoType === 'paper') {
      playerOneMoveTwoType = 'paper';
    } else if (moveTwoType === 'scissors') {
      playerOneMoveTwoType = 'scissors';
    }
  }

  if (player = 'Player One') {
    if (moveThreeType === 'rock') {
      playerOneMoveThreeType = 'rock';
    } else if (moveThreeType === 'paper') {
      playerOneMoveThreeType = 'paper';
    } else if (moveThreeType === 'scissors') {
      playerOneMoveThreeType = 'scissors';
    }
  }

  if ( player === 'Player One' ) {
      if (moveOneValue >= 1 && moveOneValue <= 99) {
        playerOneMoveOneValue = moveOneValue;
      } else {return;}
      if (moveTwoValue >= 1 && moveTwoValue <= 99) {
        playerOneMoveTwoValue = moveTwoValue;
      } else {return;}
      if (moveThreeValue >= 1 && moveThreeValue <= 99) {
        playerOneMoveThreeValue = moveThreeValue;
      } else {return;}
  }

  if (player = 'Player Two') {
    if (moveOneType === "rock" || moveOneType === "paper" || moveOneType === "scissors") {
      playerTwoMoveOneType = moveOneType;
    } else { return; }
    if (moveTwoType === "rock" || moveTwoType === "paper" || moveTwoType === "scissors") {
      playerTwoMoveTwoType = moveTwoType;
    } else { return; }
    if (moveThreeType === "rock" || moveThreeType === "paper" || moveThreeType === "scissors") {
      playerTwoMoveThreeType = moveThreeType;
    } else { return; }
  }

    if ( player === 'Player Two' ) {
        if (moveOneValue >= 1 && moveOneValue <= 99) {
          playerTwoMoveOneValue = moveOneValue;
        } else {return;}
        if (moveTwoValue >= 1 && moveTwoValue <= 99) {
          playerTwoMoveTwoValue = moveTwoValue;
        } else {return;}
        if (moveThreeValue >= 1 && moveThreeValue <= 99) {
          playerTwoMoveThreeValue = moveThreeValue;
        } else {return;}
    }

} //end setPlayerMoves function

function getRoundWinner(number) {
  if (number != 1 && number !== 2 && number !== 3) {
    return null;
  }
  if (number === 1) {
    if (!playerOneMoveOneType || !playerOneMoveOneValue ||
    !playerTwoMoveOneType || !playerTwoMoveOneValue) {
     return null;
   }
 }
 if (number === 2) {
   if (!playerOneMoveTwoType || !playerOneMoveTwoValue ||
   !playerTwoMoveTwoType || !playerTwoMoveTwoValue) {
    return null;
  }
}
  if (number === 3) {
    if (!playerOneMoveThreeType || !playerOneMoveThreeValue ||
    !playerTwoMoveThreeType || !playerTwoMoveThreeValue) {
     return null;
   }
 }
 //round 1
  if (number === 1) {
    if(playerOneMoveOneType === playerTwoMoveOneType && playerOneMoveOneValue === playerTwoMoveOneValue) {
      return "Tie";
    } else if (playerOneMoveOneType === playerTwoMoveOneType) {
     if (playerOneMoveOneValue > playerTwoMoveOneValue) {
       return "Player One";
     } else if (playerOneMoveOneValue < playerTwoMoveOneValue) {
       return "Player Two";
     }
   } else if (playerOneMoveOneType === 'rock' && playerTwoMoveOneType === 'scissors') {
     return 'Player One';
   } else if (playerOneMoveOneType === 'rock' && playerTwoMoveOneType === 'paper') {
     return 'Player Two';
   } else if (playerOneMoveOneType === 'paper' && playerTwoMoveOneType === 'rock') {
     return "Player One";
   } else if (playerOneMoveOneType === 'paper' && playerTwoMoveOneType === 'scissors') {
     return "Player Two";
   } else if (playerOneMoveOneType === 'scissors' && playerTwoMoveOneType === 'paper') {
     return "Player One";
   } else if (playerOneMoveOneType === 'scissors' && playerTwoMoveOneType === 'rock') {
     return "Player Two";
   }
 } //end round 1
 //round 2
 if (number === 2) {
   if(playerOneMoveTwoType === playerTwoMoveTwoType && playerOneMoveTwoValue === playerTwoMoveTwoValue) {
     return "Tie";
   } else if (playerOneMoveTwoType === playerTwoMoveTwoType) {
    if (playerOneMoveTwoValue > playerTwoMoveTwoValue) {
      return "Player One";
    } else if (playerOneMoveTwoValue < playerTwoMoveTwoValue) {
      return "Player Two";
    }
  } else if (playerOneMoveTwoType === 'rock' && playerTwoMoveTwoType === 'scissors') {
    return "Player One";
  } else if (playerOneMoveTwoType === 'rock' && playerTwoMoveTwoType === 'paper') {
    return "Player Two";
  } else if (playerOneMoveTwoType === 'paper' && playerTwoMoveTwoType === 'rock') {
    return "Player One";
  } else if (playerOneMoveTwoType === 'paper' && playerTwoMoveTwoType === 'scissors') {
    return "Player Two";
  } else if (playerOneMoveTwoType === 'scissors' && playerTwoMoveTwoType === 'paper') {
    return "Player One";
  } else if (playerOneMoveTwoType === 'scissors' && playerTwoMoveTwoType === 'rock') {
    return "Player Two";
  }
} //end round 2
//round 3
if (number === 3) {
  if(playerOneMoveThreeType === playerTwoMoveThreeType && playerOneMoveThreeValue === playerTwoMoveThreeValue) {
    return "Tie";
  } else if (playerOneMoveThreeType === playerTwoMoveThreeType) {
   if (playerOneMoveThreeValue > playerTwoMoveThreeValue) {
     return "Player One";
   } else if (playerOneMoveThreeValue < playerTwoMoveThreeValue) {
     return "Player Two";
   }
 } else if (playerOneMoveThreeType === 'rock' && playerTwoMoveThreeType === 'scissors') {
   return "Player One";
 } else if (playerOneMoveThreeType === 'rock' && playerTwoMoveThreeType === 'paper') {
   return "Player Two";
 } else if (playerOneMoveThreeType === 'paper' && playerTwoMoveThreeType === 'rock') {
   return "Player One";
 } else if (playerOneMoveThreeType === 'paper' && playerTwoMoveThreeType === 'scissors') {
   return "Player Two";
 } else if (playerOneMoveThreeType === 'scissors' && playerTwoMoveThreeType === 'paper') {
   return "Player One";
 } else if (playerOneMoveThreeType === 'scissors' && playerTwoMoveThreeType === 'rock') {
   return "Player Two";
 }
} //end round 3
} //end getRoundWinner function

function getGameWinner() {
  if (
   !playerOneMoveOneType || !playerOneMoveOneValue ||
   !playerOneMoveTwoType || !playerOneMoveTwoValue ||
   !playerOneMoveThreeType || !playerOneMoveThreeValue ||
   !playerTwoMoveOneType || !playerTwoMoveOneValue ||
   !playerTwoMoveTwoType || !playerTwoMoveTwoValue ||
   !playerTwoMoveThreeType || !playerTwoMoveThreeValue
 ) { return null; }
  let playerOneWinCount = 0;
  let playerTwoWinCount = 0;
//Round One
  if (getRoundWinner(1) === 'Player One') {
    playerOneWinCount++;
  } else if (getRoundWinner(1) === 'Player Two') {
    playerTwoWinCount++;
  }
//Round Two
  if (getRoundWinner(2) === 'Player One') {
    playerOneWinCount++;
  } else if (getRoundWinner(2) === 'Player Two') {
    playerTwoWinCount++;
  }
//Round Three
  if (getRoundWinner(3) === 'Player One') {
    playerOneWinCount++;
  } else if (getRoundWinner(3) === 'Player Two') {
    playerTwoWinCount++;
  }
  if (playerOneWinCount === playerTwoWinCount) {
    return "Tie";
  } else if (playerOneWinCount > playerTwoWinCount) {
    return "Player One";
  } else if (playerOneWinCount < playerTwoWinCount) {
    return "Player Two";
  }
} //end getGameWinner function

function getComputerChoice() {
  let ranNum = Math.floor(Math.random() * 3);
  switch (ranNum) {
    case 0:
      return 'rock';
    case 1:
      return 'paper';
    case 2:
      return 'scissors';
   }
} //end getComputerChoice function

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}

function setComputerMoves() {
  playerTwoMoveOneType = getComputerChoice();
  playerTwoMoveTwoType = getComputerChoice();
  playerTwoMoveThreeType = getComputerChoice();
  playerTwoMoveOneValue = getRandomInt(1, 100);
  playerTwoMoveTwoValue = getRandomInt(1, (100 - playerTwoMoveOneValue));
  playerTwoMoveThreeValue = (99 - (playerTwoMoveOneValue + playerTwoMoveTwoValue));
}
