function Logger(constructor: Function) {
  console.log('loading');
  console.log(`Using: --> ${constructor}`);
}
@Logger
class Human {
  name = 'Roman';
  constructor() {
    console.log(
      `Creating object with field -> ${Object.keys(this)} and value -> ${
        this.name
      }`,
    );
  }
}

const person = new Human();
