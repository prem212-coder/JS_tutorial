let num_one = 12;
let num_two = 15;
let a, b;

if (num_one > num_two) {
  a = num_one;
  b = num_two;
} else {
  b = num_one;
  a = num_two;
}

while (b > 0) {
  let temp = b;
  b = a % temp;
  a = b;
  console.log(a);
}

//console.log(a);
