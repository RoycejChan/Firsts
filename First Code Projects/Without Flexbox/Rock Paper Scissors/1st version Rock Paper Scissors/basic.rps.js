let playerScore = 0;
let computerScore = 0;
const userScore = document.getElementById("pScore");
const compScore = document.getElementById("cScore");

function getCompChoice() {
	const choices = ['r','p','s'];
	const cpuChoice = Math.floor(Math.random() * 3)
	return choices[cpuChoice];
}
	
	function game(userChoice) {
		const pcChoice = getCompChoice();
			switch (userChoice + pcChoice) {
				case 'rs':
				case 'sp':
				case 'pr':
				win();
				break;
				case 'sr':
				case 'ps':
				case 'rp':
				lose();
				break;
				case 'ss':
				case 'rr':
				case 'pp':
				tie();
				break;
			}
}

function win() {
	playerScore++;
	document.getElementById("result").innerHTML = "You Won!";
	userScore.innerHTML = playerScore;
	compScore.innerHTML = computerScore;
}

function lose() {
	computerScore++;
	document.getElementById("result").innerHTML = "You Lost!";
	userScore.innerHTML = playerScore;
	compScore.innerHTML = computerScore;
}

function tie() {
	document.getElementById("result").innerHTML = "You Tied!";
	userScore.innerHTML = playerScore;
	compScore.innerHTML = computerScore;
}

function Rock() {
	console.log("You picked rock");
	game("r");
}
function Paper() {
	console.log("You picked Paper");
	game("p");
}
function Scissors() {
	console.log("You picked Scissors");
	game("s");
}
