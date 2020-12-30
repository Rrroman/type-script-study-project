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
