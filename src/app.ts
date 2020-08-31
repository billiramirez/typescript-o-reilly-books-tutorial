type Admin = {
  name: string;
  privileges: string[];
};

type Employee = {
  name: string;
  startDate: Date;
};

type EvelevatedEmployee = Admin & Employee;

const e1: EvelevatedEmployee = {
  name: "Billi",
  privileges: ["create-server"],
  startDate: new Date(),
};

type Combinable = string | number;
type Numeric = number | boolean;

type Universal = Combinable & Numeric;

// This is using typeof
function add(a: number, b: number): number;
function add(a: string, b: string): string;
function add(a: string, b: number): string;
function add(a: number, b: string): string;
function add(a: Combinable, b: Combinable) {
  if (typeof a === "string" || typeof b === "string") {
    return a.toString() + b.toString();
  }

  return a + b;
}

type UnknowEmployee = Employee | Admin;

// This is using 'property' in object
function printEmployeeInformation(emp: UnknowEmployee) {
  console.log("Name: ", emp.name);
  if ("privileges" in emp) {
    console.log("Privilege ", emp.privileges);
  }
  if ("startDate" in emp) {
    console.log("Start Date ", emp.startDate);
  }
}

printEmployeeInformation(e1);

class Car {
  drive() {
    console.log("driving a car...");
  }
}
class Truck {
  drive() {
    console.log("Driving truck");
  }

  loadCargo(cargo: number) {
    console.log("loading cargo: ", cargo);
  }
}

type Vehicle = Car | Truck;

const v1 = new Car();
const v2 = new Truck();

// This is using instanceof
function useVehicle(vehicle: Vehicle) {
  vehicle.drive();
  if (vehicle instanceof Truck) {
    vehicle.loadCargo(2000);
  }
}

useVehicle(v1);
useVehicle(v2);

// Discriminated Unions
interface Bird {
  type: "bird";
  flyingSpeed: number;
}

interface Horse {
  type: "horse";
  runningSpeed: number;
}

type Animal = Bird | Horse;

function moveAnimal(animal: Animal) {
  let speed;
  switch (animal.type) {
    case "bird":
      speed = animal.flyingSpeed;
      break;

    case "horse":
      speed = animal.runningSpeed;
      break;
  }
  console.log("moving at speed: ", speed);
}

moveAnimal({ type: "bird", flyingSpeed: 10 });

// Type Cast V1
// const userInputElement = <HTMLInputElement>(
//   document.getElementById("user-input")!
// );

// Type Cast V2
const userInputElement = document.getElementById(
  "user-input"
)! as HTMLInputElement;

userInputElement.value = "Hi there!";

// INDEX Properties

interface ErrorContainer {
  [prop: string]: string;
}

const errorBag: ErrorContainer = {
  email: "You need to provide an email",
  username: "Must start with a capital character",
};

// Functions Overloads => Check the add function to get more details

const result = add(1, 5);
const helloMessage = add("Hi", " There");

// Optional Chaining

const fetchedUserData = {
  id: "u1",
  name: "Max",
  job: { title: "CEO", description: "My own company" },
};
console.log(fetchedUserData?.job?.title);
