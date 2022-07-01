

function cutPieces(fruit){
	return fruit * 4;
};


function fruitProcessor (apples,oranges){

	const applePieces   = cutPieces(apples);
	const orangesPieces = cutPieces(oranges);

	const juice = `jucice with ${applePieces} Pieces of apple and ${orangesPieces} pieces of oranges`;
	return juice;
};

console.log(fruitProcessor(2,3));
