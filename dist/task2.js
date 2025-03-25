"use strict";
// Task2
/* Implement a TypeScript function processData() that takes a param parameter that can be a string, a number, a boolean, or an array of numbers.
Depending on the type of the input parameter param, the function must perform various operations and return the appropriate value:
//   -    If the parameter is a string, return the uppercase version of the parameter.
//   -    If the parameter is a number, square it.
//   -    If the parameter is boolean, return its negation.
//   -    If the parameter is an array of numbers, return the array with the square of each number.
   -    If the parameter is an empty array, return "Empty array: []". */
// Example of usage:
//   console.log(processData("text data")); // "TEXT DATA"
//   console.log(processData(3)); // 9
//   console.log(processData(false)); // true
//   console.log(processData([1, 2, 3, 4])); // [1, 4, 9, 16]
//   console.log(processData([])); // Empty array: [] 
function processData(value) {
    switch (typeof value) {
        case "string":
            return value.toUpperCase();
        case "number":
            return value * value;
        case "boolean":
            return !value;
        case "object":
            if (value != null && value instanceof Array)
                return value.length === 0 ? [] : value.map(num => num * num);
            break;
    }
    const notSupportedType = value;
    throw new Error("Unsupported type: " + value);
}
console.log(processData("text data")); // "TEXT DATA"
console.log(processData(3)); // 9
console.log(processData(false)); // true
console.log(processData([1, 2, 3, 4])); // [1, 4, 9, 16]
console.log(processData([])); // Empty array: [] 
