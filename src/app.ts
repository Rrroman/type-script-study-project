function Logger(logString: string) {
  return function (constructor: Function) {
    console.log(logString);
    console.log(`Using: --> ${constructor}`);
  };
}

function WithTemplate(template: string, hookElement: string) {
  return function (constructor: any) {
    const hookEl = document.querySelector(hookElement);
    const person = new constructor();
    if (hookEl) {
      hookEl.innerHTML = template;
      hookEl.querySelector('.title')!.textContent = person.name;
    }
  };
}

// @Logger('Loading Human Class...')
@WithTemplate(`<h1 class="title">Hello</h1>`, '.app')
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
