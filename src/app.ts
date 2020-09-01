interface Lengthy {
  length: number;
}

function countAndPrint<T extends Lengthy>(element: T): [T, string] {
  let description = " go no value";
  if (element.length === 1) {
    description = "Got 1 Element";
  } else if (element.length > 1) {
    description = "Got " + element.length + "elements.";
  }
  return [element, description];
}

console.log(countAndPrint("haha")[1]);

// Using the keyof
function extractAndConvert<T extends object, U extends keyof T>(
  obj: T,
  key: U
) {
  return "Value " + obj[key];
}

extractAndConvert({ name: "billi" }, "name");
