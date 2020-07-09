function addInBasicModule(
  n1: number,
  n2: number,
  showResult: boolean,
  phrase: string
) {
  if (showResult) {
    console.log(`${phrase} ${n1 + n2}`);
  }
  return n1 + n2;
}

const number1 = 5;
const number2 = 4.4;
const printResults = true;
const resultPhrase = "Result is: ";

addInBasicModule(number1, number2, printResults, resultPhrase);
