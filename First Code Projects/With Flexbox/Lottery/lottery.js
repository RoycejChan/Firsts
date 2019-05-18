/*window.setInterval(changeLotteryPrice, 10000);*/
/*604800000*/

let targetNumber = document.getElementById("target-number");
let userChoice = document.getElementById("user-choice");
let prizeNum = document.getElementById("prize");
let button = document.getElementById("roller");

const bodyFunction = () => {
	console.log("Youre wasting your time lmao");
	function gettargetNumber() {
		let target = Math.random() * 100;
		targetNumber.innerHTML = target;
	}

	function getPrizeNumber() {
		let prizeNumber = Math.floor(Math.random() * 100000000);
		prizeNum.innerHTML = "$" + prizeNumber;
	}	
	getPrizeNumber();
	gettargetNumber();
}

const roll = () => {
		let choice = Math.random() * 100;
		userChoice.innerHTML = choice;
}

if (targetNumber === userChoice) {
	document.write("CONGRATULATIONS, you jsut won, send a screenshot and send it to me.... if it saves")
}

/*
function simple() {
	console.log("Hello World!");
}

simple();

const easy = (fortnite) => {
	console.log("Hello me! and" + "" + fortnite);
}

easy("you");
*/