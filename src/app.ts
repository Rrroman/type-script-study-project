// interface Admin {
type Admin = {
  name: string;
  hobbies: string[];
};

// interface Employee  {
type Employee = {
  name: string;
  workDay: Date;
};

// interface ElevatedEmployee extends Admin , Employee {};
type ElevatedEmployee = Admin & Employee;

const worker: ElevatedEmployee = {
  name: 'Richard',
  hobbies: ['swimming, skating'],
  workDay: new Date(),
};

type Combinable = string | number;
type Numeric = number | boolean;

// Hint type number must be used
type Universal = Combinable & Numeric;

function add(a: Combinable, b: Combinable) {
  if (typeof a === 'string' || typeof b === 'string') {
    return a.toString() + b.toString();
  }
  return a + b;
}

console.log(add(5, '6'));
console.log(add(5, 6));

type UnknownEmployee = Employee | Admin;

function printEmployeeInformation(emp: UnknownEmployee): void {
  if ('name' in emp) {
    console.log(`Name ${emp.name}`);
  }
  if ('hobbies' in emp) {
    console.log(`Hobbies ${emp.hobbies}`);
  }
  if ('workDay' in emp) {
    console.log(`Work begin ${emp.workDay.toLocaleString()}`);
  }
}

printEmployeeInformation(worker);
printEmployeeInformation({ name: 'Robin', workDay: new Date() });

class Car {
  drive() {
    console.log('Driving car');
  }
}
class Truck {
  drive() {
    console.log('Driving truck');
  }

  cargo(weight: number) {
    console.log(`Driving truck with cargo weight: ${weight}`);
  }
}

type Vehicle = Car | Truck;

const smallCar = new Car();
const bigCar = new Truck();

function drivingCar(vehicle: Vehicle) {
  if (vehicle instanceof Car) {
    vehicle.drive;
  }
  if (vehicle instanceof Truck) {
    vehicle.drive();
    vehicle.cargo(1000);
  }
}
drivingCar(smallCar);
drivingCar(bigCar);
