function Logger(constructor: Function) {
  console.log("loggin");
  console.log(constructor);
}

@Logger
class Person {
  name = "billi";

  constructor() {
    console.log("creating person object");
  }
}

const pers = new Person();
console.log(pers);
