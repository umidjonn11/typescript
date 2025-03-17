// // //1 misol
// function swap<T>(a: T, b: T): [T, T] {
//   return [b, a];
// }
// let a = 1;
// let b = 2;
// [a, b] = swap(a, b);
// console.log(`a: ${a}, b: ${b}`);
function printCarProperty(car, key) {
    console.log("".concat(key, ":").concat(car[key]));
}
var car = {
    make: "cge",
    model: "malibu",
    year: 2026,
};
printCarProperty(car, 'year');
