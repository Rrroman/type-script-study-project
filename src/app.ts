// const names: Array<string> = ['Bob'];

// console.log(names[0].split(''));

// const promise: Promise<number> = new Promise((resolve) => {
//   setTimeout(() => {
//     resolve(42);
//   }, 1000);
// });

// promise
//   .then((data): string => {
//     return data.toString();
//   })
//   .then((res) => console.log(res.split('')));

// function merge<T extends string | number, U extends object>(obj1: T, obj2: U) {
function merge<T extends object, U extends object>(obj1: T, obj2: U) {
  return Object.assign(obj1, obj2);
}

const merged = merge({ name: 'Roman', greet: 'Hello' }, { age: 31 });

console.log(merged.name);

interface Lengthy {
  length: number;
}

function printLengthOfElements<T extends Lengthy>(element: T): [T, string] {
  let result = 'No elements';
  if (element.length === 1) {
    result = `We got ${element.length} element`;
  } else if (element.length > 1) {
    result = `We have ${element.length} elements`;
  }
  return [element, result];
}

console.log(printLengthOfElements([]));
console.log(printLengthOfElements(['Hi this is big string']));
console.log(printLengthOfElements(['Lol', 'crab']));

function extractAndConvert<T extends object, U extends keyof T>(
  obj: T,
  key: U,
) {
  return `Value is ${obj[key]}`;
}

console.log(extractAndConvert({ age: 42, name: 'Kenny' }, 'name'));

// class DataList<T> {
class DataList<T extends string | number | boolean> {
  private data: T[] = [];

  addItem(item: T) {
    this.data.push(item);
  }

  deleteItem(item: T) {
    this.data.splice(this.data.indexOf(item), 1);
  }

  getItem() {
    return [...this.data];
  }
}

const textList = new DataList<string>();
textList.addItem('Roman');
textList.addItem('Robert');
textList.deleteItem('Robert');
console.log(...textList.getItem());

const numberList = new DataList<number>();
numberList.addItem(2);
numberList.addItem(3);
numberList.addItem(4);
console.log(...numberList.getItem());

// we can constrain obj or extend logic
// const objList = new DataList<object>();
// objList.addItem({ name: 'Roman' });
// objList.addItem({ name: 'Bonny' });

// // Roman not deleting, but last item deleting -1 idx.
// objList.deleteItem({ name: 'Roman' });
// // objList.deleteItem({ name: 'Bonny' });
// console.log(...objList.getItem());
