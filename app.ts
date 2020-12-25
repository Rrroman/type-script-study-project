type Combinable = number | string;
type ConversionDescriptor = 'as-number' | 'as-text';

enum TypeParameter {
  AS_TEXT = 'as-text',
  AS_NUMBER = 'as-number',
}

function combine(
  input1: Combinable,
  input2: Combinable,
  resultConversion: ConversionDescriptor,
) {
  let result;
  if (
    typeof input1 === 'number' &&
    typeof input2 === 'number'
    // || resultConversion === 'as-number'
  ) {
    result = +input1 + +input2;
  } else {
    result = `${input1.toString()} and ${input2.toString()}`;
  }
  // return result;

  if (resultConversion === 'as-number') {
    return +result;
  } else {
    return result.toString();
  }
}

const combineAges = combine(40, 18, 'as-number');
console.log(`Type is ${typeof combineAges} -> ${combineAges} `);
const combineAgesAsText = combine(40, 18, 'as-text');
console.log(`Type is ${typeof combineAgesAsText} -> ${combineAgesAsText}`);

const combineNames = combine('Roman', 'Jane', TypeParameter.AS_TEXT);
console.log(combineNames);
