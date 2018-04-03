let area = 36; //prompt('Enter side length of the area:');
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
	squareToPaint.style.backgroundColor = 'black';
	});
