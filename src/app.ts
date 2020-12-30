interface Greetable {
  name: string;
  age: number;

  greet(phrase: string): void;
}

class Person implements Greetable {
  name: string;
  age: number;
  favoriteNumber = 21;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  greet(phrase: string) {
    console.log(
      `${phrase} ${this.name}, my age is ${this.age}, favorite is ${this.favoriteNumber}`,
    );
  }
}

const bob: Greetable = new Person('Bob', 42);
bob.greet('Hello there, i am');
console.log(bob);
