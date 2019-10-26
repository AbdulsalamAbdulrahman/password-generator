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
const getRandomLower = () => {
	return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

const getRandomUpper = () => {
	return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

const getRandomNumber = () => {
	return String.fromCharCode(Math.floor(Math.random() * 10)+ 48);
}

const getRandomSymbol = () => {
	const symbols = '!@#$%^&*()_+{}[]:";/';
	return symbols[Math.floor(Math.random() * symbols.length)];
}


const randomFunc = {
	lower: getRandomLower,
	upper: getRandomUpper,
	number: getRandomNumber,
	symbol: getRandomSymbol
};


//generate events listener
generateEl.addEventListener('click', () => {
	const length = +lengthEl.value;
	const hasLower = lowercaseEl.checked;
	const hasUpper = uppercaseEl.checked;
	const hasNumber = numbersEl.checked;
	const hasSymbol = symbolsEl.checked;


	resultEl.innerText = generatePassword(hasLower, hasUpper, hasNumber, hasSymbol, length);
});

//generate password func

let generatePassword = (lower, upper, number, symbol, length) => {
	//1. Init pw var
	//2. Filter out unchecked types
	//3. Loop over length and call a generator func for each type 
	//4. Add final pw to the pw var and return

	let generatedPassword = '';

	const typesCount = lower + upper + number + symbol;

	//console.log('typesCount: ', typesCount);

	const typesArray = [{lower}, {upper}, {number}, {symbol}].filter(item => Object.values(item)[0]);

	// console.log('typesArray: ', typesArray);

	if (typesCount === 0) {
		return '';
}
	for (let i = 0 ; i < length;  i += typesCount) {
		typesArray.forEach(type => {
			const funcName = Object.keys(type)[0];
			// console.log('funcName: ', funcName)

			generatedPassword += randomFunc[funcName]();
		});
	}
// console.log(generatedPassword.slice(0, length));
	const finalPassword = generatedPassword.slice(0, length);

	return finalPassword;
}

// copy password to the clipboard

clipboardEl.addEventListener('click', () => {
	const textarea = document.createElement('textarea');
	const password = resultEl.innerText;

	if(!password) {
		return;
	}

	textarea.value = password;
	document.body.appendChild(textarea);
	textarea.select();
	document.execCommand('copy');
	textarea.remove();
	alert('password copied to clipboard');


})

