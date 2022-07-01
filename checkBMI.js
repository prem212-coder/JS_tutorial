let markWeight = 78;
let markHeight = 1.69;

let johnWeight = 92;
let johnHeight = 1.88;

let jhonBMI = markWeight / markHeight ** 2;
let markBMI = johnWeight / johnHeight ** 2;

console.log(`Who has higher BMI`);

if (jhonBMI > markBMI) {
  console.log(`Jhon's BMI ${jhonBMI} higher than Mark's! ${markBMI}`);
} else {
  console.log(`Mark's ${markBMI} BMI higher than Jhon's ${jhonBMI}`);
}
