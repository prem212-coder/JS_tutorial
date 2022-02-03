let input_one = 12;
let input_two = 15;
let min = input_one < input_two ? input_one : input_two;
let gct = 0;
for (let i = 0; i <= grater; i++) {
  let a = input_one % i == 0;
  let b = input_two % i == 0;
  if (a && b) gct = i;
}
console.log(gct);
