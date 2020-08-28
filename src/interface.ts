// Interface as a function type

interface AddFn {
  (a: number, b: number): number;
}

let addFromInterface: AddFn;

addFromInterface = (n1: number, n2: number) => {
  return n1 + n2;
};

interface Person {
  name: string;
  age: number;
  greet(phrase: string): void;
}

let user1: Person;

user1 = {
  name: "Billi",
  age: 34,
  greet(phrase: string) {
    console.log(phrase);
  },
};
