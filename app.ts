function multiply(num1: number, num2: number) {
  return num1 * num2;
}

function printResultInConsoleOnly(num: number): void {
  console.log(`Result: ${num}`);
}

function multiplyAndHandle(
  n1: number,
  n2: number,
  callBack: (num: number) => void,
) {
  const result = n1 + n2;
  callBack(result);
}

multiplyAndHandle(5, 3, (result) => {
  console.log(`Call back result: ${result}`);
});

printResultInConsoleOnly(multiply(3, 5));

let combineValues: (a: number, b: number) => number;

combineValues = multiply;

// combineValues = printResultInConsoleOnly;
// combineValues = 5;

console.log(combineValues(8, 3));
