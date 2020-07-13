class Department {
  private name: string;
  private employees: string[] = [];

  constructor(private readonly id: string, public n: string) {
    this.name = n;
    this.id = id;
  }

  describe(this: Department) {
    console.log(`Department: ${this.id} - ${this.name}`);
  }

  addEmployee(employee: string) {
    this.employees.push(employee);
  }

  printEmployeeInformation() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

const accounting = new Department("1", "Accounting");
console.log(accounting);

accounting.addEmployee("Billi");
accounting.addEmployee("Alexander");

accounting.printEmployeeInformation();

accounting.describe();
