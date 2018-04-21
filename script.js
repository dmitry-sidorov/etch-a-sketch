//prompt('Enter side length of the area:');
let defaultSquareAmount = 24;
main(defaultSquareAmount);
//let sideByDefault = true;

let btnClear = document.querySelector('.clear');
let btnRainbow = document.querySelector('.rainbow');
btnClear.addEventListener('click', (e) => {
	let currentSquareAmount = prompt('Enter square amount per side:');
	main(currentSquareAmount);
});

function main(squareAmount) {
	let currentsideLength = 960 / squareAmount;
	createArea(currentsideLength);
	let container = document.querySelector('.container');
	
	function createArea(sideLength) {
		for (let i = 0; i < sideLength**2; i++) {
			container.appendChild(createSquare(i, sideLength));
		}
	}
	container.addEventListener('mouseover', (e) => {
		let squareOverMouseId = e.target.getAttribute('id');
		let squareToPaint = document.getElementById(squareOverMouseId);
		squareToPaint.style.backgroundColor = randomColor();
	});

	function createSquare(id, sideLength) {
		let square = document.createElement('div');
		square.setAttribute('class', 'square');
		square.setAttribute('id', id);
		square.style.border = '1px solid red';
		square.style.height = sideLength +'px';
		square.style.width = sideLength +'px';
		square.style.float = 'left';
		square.style.boxSizing = 'border-box';
		return square;
	}

	function randomColor() {
		let color = "#";
		for (let i = 0; i < 6; i++) {
			color += randomNumber();
		}
		return color;
	}

	function getRandomArbitrary(min, max) {
		return Math.random() * (max - min) + min;
	}
	
	function randomNumber() {
		let num = Math.round(getRandomArbitrary (1,15));
		switch (num) {
			case 10: return 'A';
			break;
			case 11: return 'B';
			break;
			case 12: return 'C';
			break;
			case 13: return 'D';
			break;
			case 14: return 'E';
			break;
			case 15: return 'F';
			break;
			default: return num;
		}
	}
}