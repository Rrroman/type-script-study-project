// type addNumbers = (number1: number, number2: number) => number;
// Interface can be used to functions, just like type.
// Below is example of syntax looking like self invoking function.
interface addNumbers {
  (number1: number, number2: number): number;
}

const add: addNumbers = (a, b) => {
  return a + b;
};

console.log(add(3, 5));
interface Aged {
  age?: number;
}

// interface Greetable extends Aged, Named, Danceable
// Can extend multiple interfaces just count them with coma ','
// Class can be inherit only from 1 class, can't extends on multiple classes
interface Greetable extends Aged {
  name: string;
  readonly dance: string;

  greet(phrase?: string): void;
}

class Person implements Greetable {
  name: string;
  age?: number;
  dance = 'Polka';
  favoriteNumber = 21;
  constructor(name: string, age?: number) {
    this.name = name;
    this.age = age;
  }

  greet(phrase: string) {
    if (phrase && this.age) {
      console.log(
        `${phrase} ${this.name}, my age is ${this.age}, favorite is ${this.favoriteNumber}, greeting you with ${this.dance} dance`,
      );
    } else if (phrase) {
      console.log(
        `${phrase} ${this.name}, My age is Secret, favorite is ${this.favoriteNumber}, greeting you with ${this.dance} dance`,
      );
    } else {
      console.log('Good day Sir!');
    }
  }
}

const bob: Greetable = new Person('Bob');
bob.greet('Hello there, i am');
bob.greet();
// Read only property can't be changed because of interface Greetable.
// Hint: Person class haven't dance as readonly
// bob.dance = 'Break dance';
console.log(bob);
