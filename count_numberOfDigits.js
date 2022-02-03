let n = 123,
  count = 0;

while (n != 0) {
  n = parseInt(n / 10);

  count++;
}
console.log(count);
