const measureKelvin = function () {
  const measurment = {
    type: "temp",
    unit: "celsius",
    value: prompt("Degrees celsius:"),
  };

  const kelvin = measurment.value + 273;
  return kelvin;
};
console.log(measureKelvin());
