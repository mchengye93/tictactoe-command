var prompt = require('prompt');
 

console.log("Welcome to Tic Tac Toe!");


var tictactoe = ['0','1','2','3','4','5','6','7','8'];

//Print board

var printBoard = (arr) => {
    for (var i = 0; i < arr.length; i+=3) {
    
        console.log(arr[i] + '|' + arr[i+1] + '|' + arr[i+2]);
        if(i < 6) {
            console.log('------');
        }
        
    }
    
}


const checkColumns = (board)=> {
    
    if (tictactoe[0] === tictactoe[3] === tictactoe[6]) {
        return tictactoe[0];
    }

    if (tictactoe[1] === tictactoe[4] === tictactoe[7]) {
        return tictactoe[1];
    }

    if (tictactoe[2] === tictactoe[5] === tictactoe[8]) {
        return tictactoe[2];
    }

    return false;

}

const checkRows = (board) => {
    if (tictactoe[0] === tictactoe[1] === tictactoe[2]) {
        return tictactoe[0];
    }

    if (tictactoe[3] === tictactoe[4] === tictactoe[5]) {
        return tictactoe[3];
    }

    if (tictactoe[6] === tictactoe[7] === tictactoe[8]) {
        return tictactoe[6];
    }
    return false;
}



const checkWinner = (tictactoe) => {
    //check columns
    if (checkColumns(tictactoe)) {
        return checkColumns(tictactoe);
    }

    if(checkRows(tictactoe)) {
        return checkRows(tictactoe);
    }
    return false;

};

var winner = '';

while( winner === '') {

printBoard(tictactoe);
//Start the prompt
var x = true;
var player= 'X';

if (!checkWinner(tictactoe)) {
    prompt.start();

    //
    // Get two properties from the user: username and email
    //
    prompt.get(['Position'], function (err, result) {
      //
      // Log the results.
      //
      console.log('Command-line input received:');
      console.log('  Position: ' + result.Position);
    
    });
}


}
//Update board as player put an input




