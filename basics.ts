function add(
  adder: number,
  added: number,
  showResult: boolean,
  phrase: string,
) {
  const result = adder + added;
  if (showResult) {
    console.log(phrase + result);
  } else {
    return result;
  }
}

const number1 = 6;
const number2 = 4.3;
const printResult = true;
const resultPhrase = 'Result is: ';

add(number1, number2, printResult, resultPhrase);
