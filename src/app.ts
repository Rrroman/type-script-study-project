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
