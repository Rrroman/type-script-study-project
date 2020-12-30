interface Aged {
  age: number;
}

// interface Greetable extends Aged, Named, Danceable // Can extend multiple interfaces just count them with coma ','
// Class can be inherit only from 1 class, can't extends on multiple classes
interface Greetable extends Aged {
  name: string;
  readonly dance: string;

  greet(phrase: string): void;
}

class Person implements Greetable {
  name: string;
  age: number;
  dance = 'Polka';
  favoriteNumber = 21;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  greet(phrase: string) {
    console.log(
      `${phrase} ${this.name}, my age is ${this.age}, favorite is ${this.favoriteNumber}, greeting you with ${this.dance} dance`,
    );
  }
}

const bob: Greetable = new Person('Bob', 42);
bob.greet('Hello there, i am');
// Read only property can't be changed because of interface Greetable.
// Hint: Person class haven't dance as readonly
// bob.dance = 'Break dance';
console.log(bob);
