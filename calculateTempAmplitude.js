const temperatures = [3, -2, -6, -1, "error", 9, 13, 17, 15, 14, 9, 5];

//PROBLEM 2:
//Function should now recive 2 arrays of temps

// 1) Understanding the problem
// - With 2 arrays, should we implement functionlity twice ? NO! just marge two arrays

// 2) Breaking up into sub-problems
// - How to marge 2 arrays

const calcTempAmplitude = function (t1, t2) {
  const temp = t1.concat(t2);
  console.log(temp);

  let max = temp[0];
  let min = temp[0];
  for (let i = 0; i < temp.length; i++) {
    const curTemp = temp[i];
    if (typeof curTemp !== "number") continue;

    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  console.log(max);
  console.log(min);
  return max - min;
};

const amplitude = calcTempAmplitude([3, 5, 1], [9, 0, 5]);
console.log(amplitude);
