function combine(
  input1: number | string,
  input2: number | string,
  resultConversion: string
) {
  let result;
  if (typeof input1 === "number" && typeof input2 === "number") {
    result = input1 + input2;
  } else {
    result = input1.toString() + input2.toString();
  }
  return result;
}

const combinedAges = combine("39", "30", "as-number");
console.log(combinedAges);

const combinedNames = combine("Max", "Anna", "as-string");
console.log(combinedNames);
