//////////////////////////////////////////
//       TIP CALCULATOR
/////////////////////////////////////////

const calcuTip = function (bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}

let bill = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
let total = [];
let tips = [];

for (let i = 0; i < bill.length; i++) {
    let result = calcuTip(bill[i]);
    tips.push(result);
    let result2 = (bill[i] + tips[i]);
    total.push(result2);
}
console.log('The bill: ', bill, 'The Tips: ', tips, 'The total amount of bills and tips: ', total);

const calcAverage = function (arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        // sum = sum + arr[i];
        sum += arr[i];
    }
    return sum / arr.length;
}

console.log(calcAverage([2, 4, 7]));
console.log(calcAverage(total));
console.log(calcAverage(tips));