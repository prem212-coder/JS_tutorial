const calcAverage = (a,b,c )=> (a + b + c) / 3;

function checkWinner(avgDholphin,avgKoalas){
	const resultDholphin = calcAverage(33,44,71);
	const resultKoalas   = calcAverage(22,55,23);

	if (resultKoalas > resultKoalas) {
		const result = `Koalas win (${resultKoalas} vs ${resultDholphin})`;
		return result;
	}
	else{
		const result = `Dholphin win (${resultDholphin} vs ${resultKoalas})`;
		return result;
	}

};

console.log(checkWinner());