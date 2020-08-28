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
