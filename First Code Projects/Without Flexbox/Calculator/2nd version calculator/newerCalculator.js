let result = document.getElementById("result");


function insert(num) {
	result.value = result.value + num;
}

function c() {
	result.value = "";
}

function equal() {
	var answer = result.value
	result.value = eval(answer);
	
}

// for integers (but useles)
const i = [ '+', '-'];
let myIndex = 1;

function integer() {
	result.value = result.value + i[myIndex++%i.length];
}