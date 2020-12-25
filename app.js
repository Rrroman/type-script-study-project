function multiply(num1, num2) {
    return num1 * num2;
}
function printResultInConsoleOnly(num) {
    console.log("Result: " + num);
}
function multiplyAndHandle(n1, n2, callBack) {
    var result = n1 + n2;
    callBack(result);
}
multiplyAndHandle(5, 3, function (result) {
    console.log("Call back result: " + result);
});
printResultInConsoleOnly(multiply(3, 5));
var combineValues;
combineValues = multiply;
// combineValues = printResultInConsoleOnly;
// combineValues = 5;
console.log(combineValues(8, 3));
