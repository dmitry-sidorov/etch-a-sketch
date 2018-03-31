let area = prompt('Enter area:');
let squareSide = 960 / area;
let container = document.querySelector('.container');
function createSquare() {
	let square = document.createElement('div');
	square.style.border = '1px solid red';
	square.style.height = squareSide +'px';
	square.style.width = squareSide +'px';
	square.style.float = 'left';
	square.style.boxSizing = 'border-box';
	return square;
}
for (let i = 0; i < area**2; i++) {
	container.appendChild(createSquare());
}
	