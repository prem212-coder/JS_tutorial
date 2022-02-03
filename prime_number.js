let n = 13;

for (let i = 2; i <= n - 1; i++) {
  i % n == 0
    ? console.log(`I it's not a prime number ${i}`)
    : console.log(`It's a prime ${n}`);
}
