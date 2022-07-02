let dolphins = (97 + 112 + 101) / 3;
let koalas = (109 + 95 + 123) / 3;

if (dolphins > koalas && dolphins >= 100) {
  console.log(`Dolphins win this game ${dolphins}`);
} else if (koalas > dolphins && koalas >= 100) {
  console.log(`Koalas win this game ${koalas}`);
} else if (koalas == dolphins) {
  console.log(`No team wins the trophy`);
} else {
  console.log(
    `no one wins because they score below the 100 : dolphins = ${dolphins} koalas = ${koalas}`
  );
}
