var TypeParameter;
(function (TypeParameter) {
    TypeParameter["AS_TEXT"] = "as-text";
    TypeParameter["AS_NUMBER"] = "as-number";
})(TypeParameter || (TypeParameter = {}));
function combine(input1, input2, resultConversion) {
    var result;
    if (typeof input1 === 'number' &&
        typeof input2 === 'number'
    // || resultConversion === 'as-number'
    ) {
        result = +input1 + +input2;
    }
    else {
        result = input1.toString() + input2.toString();
    }
    // return result;
    if (resultConversion === 'as-number') {
        return +result;
    }
    else {
        return result.toString();
    }
}
var combineAges = combine(40, 18, TypeParameter.AS_NUMBER);
console.log("Type is " + typeof combineAges + " -> " + combineAges + " ");
console.log(combineAges);
var combineAgesAsText = combine(40, 18, TypeParameter.AS_TEXT);
console.log("Type is " + typeof combineAgesAsText + " -> " + combineAgesAsText);
var combineNames = combine('Roman', 'Jane', 'as-text');
console.log(combineNames);
