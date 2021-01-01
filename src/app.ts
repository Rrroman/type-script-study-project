function Logger(logString: string) {
  return function (constructor: Function) {
    console.log(logString);
    console.log(`Using: --> ${constructor}`);
  };
}
@Logger('Loading Human Class...')
class Human {
  name = 'Roman';
  constructor() {
    console.log(
      `Creating ${JSON.stringify(this)} with field -> ${Object.keys(
        this,
      )} and value -> ${this.name}`,
    );
  }
}

const person = new Human();
