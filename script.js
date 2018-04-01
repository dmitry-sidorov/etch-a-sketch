let area = 16; //prompt('Enter area:');
let squareSide = 960 / area;
let container = document.querySelector('.container');
function createSquare() {
	let square = document.createElement('div');
	square.setAttribute('class', 'square');
	square.style.border = '1px solid red';
	square.style.height = squareSide +'px';
	square.style.width = squareSide +'px';
	square.style.float = 'left';
	square.style.boxSizing = 'border-box';
	return square;
}
for (let i = 0; i < area**2; i++) {
	let squareCreated = createSquare();
	squareCreated.setAttribute('id', i);
	container.appendChild(squareCreated);
}

/*
let squares = document.getElementsByClassName("square");
[].forEach.call(squares, (item) => {
	item.addEventListener('mouseover', (e) => {
		let id = e.target.getAttribute('id');
	});

		let squarePaint = item.getElementsById(id);
		squarePaint.setAttribute('style', 'background-color:black')

	
});

for (let j = 0; j < squares.length; j++) {
	squares[j].addEventListener('mousemove', (e) => {
		squares[j].setAttribute ('style','background-color: black');
	}); */

container.addEventListener('mouseover', (e) => {
	let squareOverMouse = e.target.getElementsById();
	squareOverMouse.setAttribute('style', 'background-color: black');
});


