//this is always the starting player --- Player X
let startingPlayer = true;

//Player Settings
class Player {
	constructor(id, symbol) {
		this.id = id;
		this.symbol = symbol;
	}
}
//Each Player
var player = new Player();
var player1 = new Player(1, 'X');
var player2 = new Player(2, 'O');

//Start Game
class Game {
	constructor() {
		this.player1 = player1;
		this.player2 = player2;
	}

	//Change the header according to each turn
	gameHeader() {
		if (startingPlayer == true) {
			$('#turn').text(`Its Player ${player1.symbol}'s turn!`);
			console.log('X heading changer is working!');
		} else if (startingPlayer == false) {
			$('#turn').text(`Its Player ${player2.symbol}'s turn!`);
			console.log('O heading changer is working!');
		}
	}

	//What to run after each click to see if theres a 1) winner 2) tie or 3) Next turn
	winningLogic() {
		if (
			document.getElementById('b1').innerHTML == player1.symbol &&
			document.getElementById('b2').innerHTML == player1.symbol &&
			document.getElementById('b3').innerHTML == player1.symbol
		) {
			alert(`Player ${player1.symbol} is the Winner!`);
			console.log('There is a winner!');
			return true;
		} else if (
			document.getElementById('b1').innerHTML == player2.symbol &&
			document.getElementById('b2').innerHTML == player2.symbol &&
			document.getElementById('b3').innerHTML == player2.symbol
		) {
			alert(`Player ${player2.symbol} is the Winner!`);
			console.log('There is a winner!');
			return true;
		}

		if (
			document.getElementById('b1').innerHTML == player1.symbol &&
			document.getElementById('b4').innerHTML == player1.symbol &&
			document.getElementById('b7').innerHTML == player1.symbol
		) {
			alert(`Player ${player1.symbol} is the Winner!`);
			console.log('There is a winner!');
			return true;
		} else if (
			document.getElementById('b1').innerHTML == player2.symbol &&
			document.getElementById('b4').innerHTML == player2.symbol &&
			document.getElementById('b7').innerHTML == player2.symbol
		) {
			alert(`Player ${player2.symbol} is the Winner!`);
			console.log('There is a winner!');
			return true;
		}

		if (
			document.getElementById('b1').innerHTML == player1.symbol &&
			document.getElementById('b5').innerHTML == player1.symbol &&
			document.getElementById('b9').innerHTML == player1.symbol
		) {
			alert(`Player ${player1.symbol} is the Winner!`);
			console.log('There is a winner!');
			return true;
		} else if (
			document.getElementById('b1').innerHTML == player2.symbol &&
			document.getElementById('b5').innerHTML == player2.symbol &&
			document.getElementById('b9').innerHTML == player2.symbol
		) {
			alert(`Player ${player2.symbol} is the Winner!`);
			console.log('There is a winner!');
			return true;
		}

		if (
			document.getElementById('b3').innerHTML == player1.symbol &&
			document.getElementById('b5').innerHTML == player1.symbol &&
			document.getElementById('b7').innerHTML == player1.symbol
		) {
			alert(`Player ${player1.symbol} is the Winner!`);
			console.log('There is a winner!');
			return true;
		} else if (
			document.getElementById('b3').innerHTML == player2.symbol &&
			document.getElementById('b5').innerHTML == player2.symbol &&
			document.getElementById('b7').innerHTML == player2.symbol
		) {
			alert(`Player ${player2.symbol} is the Winner!`);
			console.log('There is a winner!');
			return true;
		}

		if (
			document.getElementById('b3').innerHTML == player1.symbol &&
			document.getElementById('b6').innerHTML == player1.symbol &&
			document.getElementById('b9').innerHTML == player1.symbol
		) {
			alert(`Player ${player1.symbol} is the Winner!`);
			console.log('There is a winner!');
			return true;
		} else if (
			document.getElementById('b3').innerHTML == player2.symbol &&
			document.getElementById('b6').innerHTML == player2.symbol &&
			document.getElementById('b9').innerHTML == player2.symbol
		) {
			alert(`Player ${player2.symbol} is the Winner!`);
			console.log('There is a winner!');
			return true;
		}

		if (
			document.getElementById('b2').innerHTML == player1.symbol &&
			document.getElementById('b5').innerHTML == player1.symbol &&
			document.getElementById('b8').innerHTML == player1.symbol
		) {
			alert(`Player ${player1.symbol} is the Winner!`);
			console.log('There is a winner!');
			return true;
		} else if (
			document.getElementById('b2').innerHTML == player2.symbol &&
			document.getElementById('b5').innerHTML == player2.symbol &&
			document.getElementById('b8').innerHTML == player2.symbol
		) {
			alert(`Player ${player2.symbol} is the Winner!`);
			console.log('There is a winner!');
			return true;
		}

		if (
			document.getElementById('b4').innerHTML == player1.symbol &&
			document.getElementById('b5').innerHTML == player1.symbol &&
			document.getElementById('b6').innerHTML == player1.symbol
		) {
			alert(`Player ${player1.symbol} is the Winner!`);
			console.log('There is a winner!');
			return true;
		} else if (
			document.getElementById('b4').innerHTML == player2.symbol &&
			document.getElementById('b5').innerHTML == player2.symbol &&
			document.getElementById('b6').innerHTML == player2.symbol
		) {
			alert(`Player ${player2.symbol} is the Winner!`);
			console.log('There is a winner!');
			return true;
		}

		if (
			document.getElementById('b7').innerHTML == player1.symbol &&
			document.getElementById('b8').innerHTML == player1.symbol &&
			document.getElementById('b9').innerHTML == player1.symbol
		) {
			alert(`Player ${player1.symbol} is the Winner!`);
			console.log('There is a winner!');
			return true;
		} else if (
			document.getElementById('b7').innerHTML == player2.symbol &&
			document.getElementById('b8').innerHTML == player2.symbol &&
			document.getElementById('b9').innerHTML == player2.symbol
		) {
			alert(`Player ${player2.symbol} is the Winner!`);
			console.log('There is a winner!');
			return true;
		}
	}
}
let newGame = new Game();
newGame.gameHeader();
newGame.winningLogic();

//Event Listeners
document.getElementById('b1').addEventListener('click', () => {
	console.log('b1 is working!');

	if (startingPlayer == true) {
		document.getElementById('b1').innerHTML = player1.symbol;
		startingPlayer = false;
	} else {
		document.getElementById('b1').innerHTML = player2.symbol;
		startingPlayer = true;
	}
	newGame.winningLogic();
	newGame.gameHeader();
});

document.getElementById('b2').addEventListener('click', () => {
	console.log('b2 is working!');
	if (startingPlayer == true) {
		document.getElementById('b2').innerHTML = player1.symbol;
		startingPlayer = false;
	} else {
		document.getElementById('b2').innerHTML = player2.symbol;
		startingPlayer = true;
	}
	newGame.winningLogic();
	newGame.gameHeader();
});

document.getElementById('b3').addEventListener('click', () => {
	console.log('b3 is working!');

	if (startingPlayer == true) {
		document.getElementById('b3').innerHTML = player1.symbol;
		startingPlayer = false;
	} else {
		document.getElementById('b3').innerHTML = player2.symbol;
		startingPlayer = true;
	}
	newGame.winningLogic();
	newGame.gameHeader();
});

document.getElementById('b4').addEventListener('click', () => {
	console.log('b4 is working!');
	if (startingPlayer == true) {
		document.getElementById('b4').innerHTML = player1.symbol;
		startingPlayer = false;
	} else {
		document.getElementById('b4').innerHTML = player2.symbol;
		startingPlayer = true;
	}
	newGame.winningLogic();
	newGame.gameHeader();
});

document.getElementById('b5').addEventListener('click', () => {
	console.log('b5 is working!');
	if (startingPlayer == true) {
		document.getElementById('b5').innerHTML = player1.symbol;
		startingPlayer = false;
	} else {
		document.getElementById('b5').innerHTML = player2.symbol;
		startingPlayer = true;
	}
	newGame.winningLogic();
	newGame.gameHeader();
});

document.getElementById('b6').addEventListener('click', () => {
	console.log('b6 is working!');
	if (startingPlayer == true) {
		document.getElementById('b6').innerHTML = player1.symbol;
		startingPlayer = false;
	} else {
		document.getElementById('b6').innerHTML = player2.symbol;
		startingPlayer = true;
	}
	newGame.winningLogic();
	newGame.gameHeader();
});

document.getElementById('b7').addEventListener('click', () => {
	console.log('b7 is working!');
	if (startingPlayer == true) {
		document.getElementById('b7').innerHTML = player1.symbol;
		startingPlayer = false;
	} else {
		document.getElementById('b7').innerHTML = player2.symbol;
		startingPlayer = true;
	}
	newGame.winningLogic();
	newGame.gameHeader();
});

document.getElementById('b8').addEventListener('click', () => {
	console.log('b8 is working!');
	if (startingPlayer == true) {
		document.getElementById('b8').innerHTML = player1.symbol;
		startingPlayer = false;
	} else {
		document.getElementById('b8').innerHTML = player2.symbol;
		startingPlayer = true;
	}
	newGame.winningLogic();
	newGame.gameHeader();
});

document.getElementById('b9').addEventListener('click', () => {
	console.log('b9 is working!');
	if (startingPlayer == true) {
		document.getElementById('b9').innerHTML = player1.symbol;
		startingPlayer = false;
	} else {
		document.getElementById('b9').innerHTML = player2.symbol;
		startingPlayer = true;
	}
	newGame.winningLogic();
	newGame.gameHeader();
});

//Reset Game
function resetGame() {
	document.getElementById('reset').addEventListener('click', () => {
		let resetCells = document.querySelectorAll('.box');
		for (let i = 0; i < resetCells.length; i++) {
			startingPlayer = true;
			newGame.gameHeader();
			resetCells[i].innerHTML = '';
		}
		console.log('Reset button is working!');
	});
}

resetGame();
