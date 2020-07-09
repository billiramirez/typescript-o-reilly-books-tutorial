function add(n1: number, n2: number): number {
  return n1 + n2;
}

function printResult(num: number): void {
  console.log("Result: " + num);
}

printResult(add(1, 2));

let combineValues: (a: number, b: number) => number; // Let's be more specific

combineValues = add;
// combineValues = 3;
/**
 * 👆🏻 This will trigger an error since it was defined as a Function Type
 */
