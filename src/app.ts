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

// Generic Classes

class DataStorage<T extends string | number | boolean> {
  private data: T[] = [];

  addItem(item: T) {
    this.data.push(item);
  }

  removeItem(item: T) {
    this.data.splice(this.data.indexOf(item), 1);
  }

  getItems() {
    return [...this.data];
  }
}

const textStorage = new DataStorage<string>();
textStorage.addItem("Billi");
textStorage.addItem("Ramirez");
textStorage.removeItem("Billi");
console.log(textStorage.getItems());

const numberStorage = new DataStorage<number>();
