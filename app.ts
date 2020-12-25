enum TypeParameter {
  AS_TEXT = 'as-text',
  AS_NUMBER = 'as-number',
}

function combine(
  input1: number | string,
  input2: number | string,
  resultConversion: TypeParameter.AS_TEXT | TypeParameter.AS_NUMBER,
  // resultConversion: 'as-text' | 'as-number',
) {
  let result;
  if (
    typeof input1 === 'number' &&
    typeof input2 === 'number'
    // || resultConversion === 'as-number'
  ) {
    result = +input1 + +input2;
  } else {
    result = input1.toString() + input2.toString();
  }
  // return result;

  if (resultConversion === 'as-number') {
    return +result;
  } else {
    return result.toString();
  }
}

const combineAges = combine(40, 18, TypeParameter.AS_NUMBER);
console.log(`Type is ${typeof combineAges} -> ${combineAges} `);
console.log(combineAges);
const combineAgesAsText = combine(40, 18, TypeParameter.AS_TEXT);
console.log(`Type is ${typeof combineAgesAsText} -> ${combineAgesAsText}`);

const combineNames = combine('Roman', 'Jane', TypeParameter.AS_TEXT);
console.log(combineNames);
