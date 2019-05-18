let userScore = 0;
let compScore = 0;
const userScore_span = document.getElementById("userScore");
const compScore_span = document.getElementById("compScore");
const scoreBoard_div = document.querySelector("#scoreBoard");
const result_div = document.querySelector("#r");
const rock = document.getElementById("rock");
const scissors = document.getElementById("scissors");
const paper = document.getElementById("paper");

 function getCompChoice() {
  	const cpuChoices = ["r", "p", "s"]
  	const randomNumber = Math.floor(Math.random() * 3);
	return cpuChoices[randomNumber];   
   }

function win(userChoice, computerChoice) {
	userScore++;
	document.getElementById("r").innerHTML = "You won. But ur still a loser in real life";
	userScore_span.innerHTML = userScore;
	compScore_span.innerHTML = compScore;	
}

function lose(userChoice, computerChoice) {
	compScore++;
	document.getElementById("r").innerHTML = "You Lost. dummy!";
	compScore_span.innerHTML = compScore;
	userScore_span.innerHTML = userScore;
}

function tie(userChoice, computerChoice) {
	document.getElementById("r").innerHTML = "You TIED!? with a 50/50 chance, smh.";
	compScore_span.innerHTML = compScore;
	userScore_span.innerHTML = userScore;
}

function game(userChoice) {
	  	const computerChoice = getCompChoice();
		switch (userChoice + computerChoice) {
			case "pr":
			case "sp":
			case "rp":	
			win();
		break;
			case "rp":
			case "ps":
			case "sr":	
			lose();
		break;
			case "rr":
			case "pp":
			case "ss":	
			tie();
		break;
		}
	  } 
	  		   

function main() {
		rock.addEventListener('click', function() {
			game("r");
	})
		scissors.addEventListener('click', function() {
			game("s");
	})
		paper.addEventListener('click', function() {
			game("p");
	})
		}	
main();




