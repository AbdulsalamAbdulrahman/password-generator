// DOM elements
const resultEl = document.getElementById('result');
const lengthEl = document.getElementById('length');
const uppercaseEl = document.getElementById('uppercase');
const lowercaseEl = document.getElementById('lowercase');
const numbersEl = document.getElementById('numbers');
const symbolsEl = document.getElementById('symbols');
const generateEl = document.getElementById('generate');
const clipboardEl = document.getElementById('clipboard');

//Generator Functions

let getRandomLower = () => {
	return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

let getRandomUpper = () => {
	return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

let getRandomNumber = () => {
	return String.fromCharCode(Math.floor(Math.random() * 10)+ 48);
}

let getRandomSymbol = () => {
	const symbols = '!@#$%^&*()_+{}[]:";/';
	return symbols[Math.floor(Math.random() * symbols.length)];
}


const randomFunc = {
	lower: getRandomLower,
	upper: getRandomUpper,
	number: getRandomNumber,
	symbol: getRandomSymbol
};

//Events 

generateEl.addEventListener('click', () => {
	const length = lengthEl.value;

	console.log(length);
})





console.log(getRandomSymbol());