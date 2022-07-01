function fruitProccessor(apples, oranges){
	console.log(apples, oranges);
	const juice =`jucice with ${apples} apples and ${oranges} oranges.`;
    return juice;
}

	const appleJuice = fruitProccessor(5,0);
	console.log(appleJuice);

	const appleOrangeJuice = fruitProccessor(2, 4);  
	console.log(appleOrangeJuice);