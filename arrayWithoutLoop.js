// Create a array 1 to 100 without useing loop.

let newnumber = [];

function countincrese(number) {
  //console.log(number);

  // increse the number value
  const increse = number + 1;

  if (increse < 102) {
    countincrese(increse);

    let result = number;
    newnumber.push(result);
  }
}
console.log("\u00B0C");
countincrese(1);
console.log(newnumber);
