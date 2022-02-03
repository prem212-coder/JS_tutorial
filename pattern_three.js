for (let i = 0; i <= 15; i++) {
  let star = "";
  for (let j = 15; j >= i; j--) {
    star = star + "  ";
  }
  for (j = 0; j <= i; j++) {
    star = star + "* ";
  }
  for (j = 0; j <= i; j++) {
    star = star + "* ";
  }
  for (j = 15; j >= i; j--) {
    star = star + "  ";
  }

  console.log(star);
}

for (let l = 1; l <= 15; l++) {
  let star_two = "";

  for (let m = 0; m <= l; m++) {
    star_two = star_two + "  ";
  }
  for (let m = 15; m >= l; m--) {
    star_two = star_two + "* ";
  }
  for (let m = 15; m >= l; m--) {
    star_two = star_two + "* ";
  }
  for (let m = 0; m <= l; m++) {
    star_two = star_two + "  ";
  }

  console.log(star_two);
}
