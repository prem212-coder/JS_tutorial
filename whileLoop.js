///////////////////////////////////////////////////////////////
// The while Loop
//////////////////////////////////////////////////////////////
/*
let rep = 1;
while (rep <= 10) {
    console.log(`Weight lifting repetition ${rep} 🏋`)

    rep++;
}
*/
////////////////////////////////////////////////////////
/*
LECTURE: The while Loop
1. Recreate the challenge from the lecture'Looping Arrays,Breaking and Continuing', but this time using a while loop (call the array 'percentages3')
2. Reflect on what solution you like better for this task : the for loop or the while loop?
*/
function percentagesOFWorld1(population) {
  return (population / 7900) * 100;
}

let population = [10, 1441, 332, 83];
let percentages3 = [];
let i = 0;
while (i < population.length) {
  let perc = percentagesOFWorld1(population[i]);
  percentages3.push(perc);

  i++;
}

console.log(percentages3);
