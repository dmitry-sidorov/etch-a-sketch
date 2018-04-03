let area = 16; //prompt('Enter side length of the area:');
let squareSide = 960 / area;
let container = document.querySelector('.container');
function createSquare(id) {
	let square = document.createElement('div');
	square.setAttribute('class', 'square');
	square.setAttribute('id', id);
	square.style.border = '1px solid red';
	square.style.height = squareSide +'px';
	square.style.width = squareSide +'px';
	square.style.float = 'left';
	square.style.boxSizing = 'border-box';
	return square;
}
for (let i = 0; i < area**2; i++) {
	container.appendChild(createSquare(i));
}
container.addEventListener('mouseover', (e) => {
	let squareOverMouseId = e.target.getAttribute('id');
	let squareToPaint = document.getElementById(squareOverMouseId);
	squareToPaint.style.backgroundColor = randomColor();
	});

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