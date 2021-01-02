function Logger(logString: string) {
  console.log('Logger factory');
  return function (constructor: Function) {
    console.log('Logging...');
    console.log(logString);
    console.log(`Using: --> ${constructor}`);
  };
}

function WithTemplate(template: string, hookElement: string) {
  console.log('Template factory');
  return function (constructor: any) {
    console.log('Rendering template');
    const hookEl = document.querySelector(hookElement);
    const person = new constructor();
    if (hookEl) {
      hookEl.innerHTML = template;
      hookEl.querySelector('.title')!.textContent = person.name;
    }
  };
}

@Logger('Loading Human Class...')
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

function Log(target: any, propertyName: string | Symbol) {
  console.log('Property decorator!');
  console.log(target, propertyName);
}

class Product {
  @Log
  title: string;
  private price: number;

  set setPrice(val: number) {
    if (val > 0) {
      this.price = val;
    } else {
      throw new Error('Price should be positive number!');
    }
  }

  constructor(myTitle: string, myPrice: number) {
    this.title = myTitle;
    this.price = myPrice;
  }

  getPriceWithTax(tax: number) {
    return this.price * (1 + tax);
  }
}
