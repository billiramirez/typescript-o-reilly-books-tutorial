function Logger(logString: string) {
  console.log("LOGGER DECORATOR");
  return function (constructor: Function) {
    console.log(logString);
    console.log(constructor);
  };
}

function WithTemplate(template: string, hookId: string) {
  console.log("TEMPLATE DECORATOR");

  return function (constructor: any) {
    console.log("rendering template");

    const hookEl = document.getElementById(hookId);
    const p = new constructor();
    if (hookEl) {
      hookEl.innerHTML = template;
      hookEl.querySelector("h1")!.textContent = p.name;
    }
  };
}

// @Logger("Loggin - Person")
@Logger("Loggin")
@WithTemplate("<h1>My Person Object</>", "app")
class Person {
  name = "billi";
  constructor() {
    console.log("creating person object");
  }
}

const pers = new Person();
console.log(pers);
