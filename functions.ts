/**
 * This function add two numbers
 *
 * @param   {number}  n1  Number 1
 * @param   {number}  n2  Number 2
 *
 * @return  {number}      The value of adding n1 + n2
 */
function add(n1: number, n2: number): number {
  return n1 + n2;
}

/**
 * This function only logs the number passed parameter
 *
 * @param   {number}  num  Number passed as parameter
 *
 * @return  {void}         Does not return anything
 */
function printResult(num: number): void {
  console.log("Result: " + num);
}

/**
 * This function adds 2 values and execute a callback function
 *
 * @param   {number}  n1  Number 1
 * @param   {number}  n2  Number 2
 * @param   {number}  cb  The callback function
 *
 * @return  {[type]}      This could return any value
 */
function addAndHandle(n1: number, n2: number, cb: (num: number) => void) {
  const result = n1 + n2;
  cb(result);
}

printResult(add(1, 2));

let combineValues: (a: number, b: number) => number; // Let's be more specific

combineValues = add;
// combineValues = 3;
/**
 * 👆🏻 This will trigger an error since it was defined as a Function Type
 */

addAndHandle(1, 2, (result) => {
  console.log(result);
});
