/*
let i, j;

for (i = 1; i <= 5; i++) {
  let star = "";
  for (j = 1; j <= i; j++) {
    star = star + "*";
  }
  console.log(star);
}


// let i, l, k;

for (let i = 1; i <= 5; i++) {
  let star = "";

  for (let j = 5; j > i; j--) {
    star = star + "-";
  }
  for (let k = 1; k <= i; k++) {
    star = star + "*";
  }
  console.log(star);
}

*/

for (let i = 1; i <= 5; i++) {
  let star = " ";
  for (let j = 0; j < i; j++) {
    star = star + " ";
  }
  for (let k = 5; k >= i; k--) {
    star = star + "*";
  }
  console.log(star);
}
