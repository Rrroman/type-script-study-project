const names: Array<string> = ['Bob'];

console.log(names[0].split(''));

const promise: Promise<number> = new Promise((resolve) => {
  setTimeout(() => {
    resolve(42);
  }, 1000);
});

promise
  .then((data): string => {
    return data.toString();
  })
  .then((res) => console.log(res.split('')));
