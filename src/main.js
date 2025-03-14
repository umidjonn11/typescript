// //1 misol
// function swap<T>(a: T, b: T): [T, T] {
//   return [b, a];
// }let a = 1;
// let b = 2;
// [a, b] = swap(a, b);
// console.log(`a: ${a}, b: ${b}`);
// //2misol
function assertString(input) {
    if (typeof input !== "string") {
        throw new Error("Input is not a string");
    }
}
try {
    assertString(12);
    console.log("Input is a string");
}
catch (e) {
    console.error(e.message);
}
// Bank Account
var BankAccount = /** @class */ (function () {
    function BankAccount(initialBalance) {
        if (initialBalance === void 0) { initialBalance = 0; }
        this.balanace = initialBalance;
    }
    BankAccount.prototype.deposit = function (amount) {
        if (amount > 0) {
            this.balanace += amount;
            console.log("Balansingiz ".concat(amount, " sum ga oshirildi "));
        }
        else {
            console.log("Notogri deposit kirittiz");
        }
    };
    BankAccount.prototype.withdraw = function (amount) {
        if (this.balanace >= amount && amount > 0) {
            this.balanace -= amount;
            console.log("Kerakli summa yechildi");
        }
        else {
            console.log("Hisobingizda yetarli malag mavjud emas");
        }
    };
    BankAccount.prototype.getBalance = function () {
        return this.balanace;
    };
    return BankAccount;
}());
var myAccount = new BankAccount(100);
myAccount.deposit(50);
myAccount.withdraw(30);
console.log("Hisob holati: $".concat(myAccount.getBalance()));
//Person class
var Person = /** @class */ (function () {
    function Person(name) {
        this.name = name;
    }
    Person.prototype.sayhello = function () {
        console.log("Salom mening ismim ".concat(this.name));
    };
    return Person;
}());
var Student = new Person("Umid");
Student.sayhello();
//Class Employee
var Employee = /** @class */ (function () {
    function Employee(salary) {
        this.salary = salary;
    }
    Employee.prototype.showSalary = function () {
        return this.salary;
    };
    return Employee;
}());
var Developer = new Employee(1234);
console.log(Developer.showSalary());
var Car = /** @class */ (function () {
    function Car(brand, speed) {
        this.brand = brand;
        this.speed = speed;
    }
    Car.prototype.showInfo = function () {
        console.log("Brend: ".concat(this.brand, ", Tezlik: ").concat(this.speed, " km/h"));
    };
    return Car;
}());
var MyCar = new Car("Mercedes", 300);
MyCar.showInfo();
// function add(a:number,b:number): number {
//   return a + b;
// }
// console.log(add(5, 10)); // Expected output: 15
// let numbers:number[] = [1, 2, 3];
// numbers.push(4);
// console.log(numbers); // Expected output: [1, 2, 3, 4]
// interface Person {
//   name:string,
//   age:number,
// }
// const user: Person = { name: "John", age: 30 };
// console.log(user);
// function printPerson(person:Person):void {
//   console.log(`Name: ${person.name}, Age: ${person.age}`);
// }
// printPerson(user);
// function swap<T>(a:T,b:T ): [T, T] {
//   return [b, a];
// }
// function getLength(value: number | string): number {
//   if( typeof value!=="number"){
//     return value.length
//   }
//   return value.toString().length
// }
// console.log(getLength("Hello")); // Expected output: 5
// console.log(getLength(100)); // Expected output: 3 (as a string)
// type User = { name: string; email: string };
// type Admin = { role: "admin" };
// type AdminUser =User & Admin;
// const admin: AdminUser = { name: "Alice", email: "alice@mail.com", role: "admin" };
// console.log(admin);
// interface Product {
//   name: string;
//   price: number;
// }
// let newProduct:Partial<Product>= { name: "Laptop" }; // Should not throw an error
// console.log(newProduct);
// type User = { id: number; name: string; email: string };
// type UserName = Partial<User>;
// const user: UserName = { name: "Alice" };
// // example of interface
// interface User {
//   name: string;
//   age?: number;
// }
// const User1: User = {
//   name: "Umid",
// };
// //example of type
// type Person={
//     name:string,
//     age:number,
// }
// const Student:Person={
//     name:"Aziza",
//     age:18
// }
// class Car {
//   brand:string
//   year:number
//   constructor(brand:string,year:number) {
//     this.brand = brand;
//     this.year = year;
//   }
// }
// const myCar = new Car("Toyota", 2022);
// interface Todo {
//   id: number;
//   task: string;
//   completed: boolean;
// }
// const todos: Todo[] = [];
// let nextId = 1;
// function addTodo(task: string): void {
//   const newTodo: Todo = { id: nextId++, task, completed: false };
//   todos.push(newTodo);
//   console.log(`Added: "${task}"`);
// }
// function completeTodo(id: number): void {
//   const todo = todos.find((t) => t.id === id);
//   if (todo) {
//     todo.completed = true;
//     console.log(`Task "${todo.task}" marked as completed.`);
//   } else {
//     console.log(`Todo with ID ${id} not found.`);
//   }
// }
// function removeTodo(id: number): void {
//   const index = todos.findIndex((t) => t.id === id);
//   if (index !== -1) {
//     const removed = todos.splice(index, 1);
//     console.log(`Removed: "${removed[0].task}"`);
//   } else {
//     console.log(`Todo with ID ${id} not found.`);
//   }
// }
// // ✅ Test the functions
// addTodo("Learn TypeScript");
// addTodo("Practice coding");
// addTodo("Build a project");
// completeTodo(2);
// removeTodo(1);
// console.log("Todos:", todos);
// // example of a literal type
// type Direction = "left" | "right" | "up" | "down";
// let move: Direction;
// move = "left";  // ✅ Valid
// move = "down";  // ✅ Valid
// move = "backward"; // ❌ Error: Not part of Direction
// //exapmle of tuples
// let user: [string, number]; // A tuple with a string and a number
// user = ["Alice", 25];  // ✅ Valid
// user = [25, "Alice"];  // ❌ Error: Type mismatch
// console.log(user[0]); // Output: "Alice"
// console.log(user[1]); // Output: 25
// //example of unions
// let value: string | number; // Can be a string OR a number
// value = "Hello";  // ✅ Valid
// value = 42;       // ✅ Valid
// value = true;     // ❌ Error: Only string or number allowed
// //example of intersections
// interface Person {
//     name: string;
// }
// interface Employee {
//     employeeId: number;
// }
// type Worker = Person & Employee; // Merging both types
// const worker: Worker = {
//     name: "Alice",
//     employeeId: 101
// };
// console.log(worker.name);  // Output: Alice
// console.log(worker.employeeId); // Output: 101
// //example of type aliases
// type StringOrNumber = string | number;
// let value: StringOrNumber;
// value = "Hello";  // ✅ Valid
// value = 42;       // ✅ Valid
// //ENUMS
// enum Status {
//     Pending,   // 0
//     InProgress, // 1
//     Completed  // 2
// }
// let taskStatus: Status = Status.InProgress;
// console.log(taskStatus); // Output: 1
// //OPTINAL properties
// interface User {
//     name: string;
//     age?: number; // Optional property
// }
// const user1: User = { name: "Alice" }; // ✅ Valid (age is optional)
// const user2: User = { name: "Bob", age: 30 }; // ✅ Valid
// //READONLY
// interface Car {
//     readonly brand: string;
// }
// const myCar: Car = { brand: "Toyota" };
// myCar.brand = "Ford"; // ❌ Error: Cannot modify a readonly property
