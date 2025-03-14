// //1 misol
function swap<T>(a: T, b: T): [T, T] {
  return [b, a];
}let a = 1;
let b = 2;
[a, b] = swap(a, b);
console.log(`a: ${a}, b: ${b}`);

// //2misol
function assertString(input: unknown): void {
  if (typeof input !== "string") {
    throw new Error("Input is not a string");
  }
}
try {
  assertString(12);
  console.log("Input is a string");
} catch (e) {
  console.error(e.message);
}

// Bank Account
class BankAccount {
  private balanace: number;
  constructor(initialBalance: number = 0) {
    this.balanace = initialBalance;
  }

  deposit(amount: number): void {
    if (amount > 0) {
      this.balanace += amount;
      console.log(`Balansingiz ${amount} sum ga oshirildi `);
    } else {
      console.log("Notogri deposit kirittiz");
    }
  }

  withdraw(amount: number) {
    if (this.balanace >= amount && amount > 0) {
      this.balanace -= amount;
      console.log(`Kerakli summa yechildi`);
    } else {
      console.log("Hisobingizda yetarli malag mavjud emas");
    }
  }

  getBalance(): number {
    return this.balanace;
  }
}
const myAccount = new BankAccount(100);
myAccount.deposit(50);
myAccount.withdraw(30);
console.log(`Hisob holati: $${myAccount.getBalance()}`);

//Person class
class Person {
  public name: string;
  constructor(name: string) {
    this.name = name;
  }

  sayhello(): void {
    console.log(`Salom mening ismim ${this.name}`);
  }
}

const Student = new Person("Umid");
Student.sayhello();

//Class Employee
class Employee {
  protected salary: number;
  constructor(salary: number) {
    this.salary = salary;
  }

  showSalary(): number {
    return this.salary;
  }
}

const Developer = new Employee(1234);
console.log(Developer.showSalary());

//Vehicle Interface
interface Vehicle {
  brand: string;
  speed: number;
}
class Car implements Vehicle {
  brand: string;
  speed: number;

  constructor(brand: string, speed: number) {
    this.brand = brand;
    this.speed = speed;
  }

  showInfo(): void {
    console.log(`Brend: ${this.brand}, Tezlik: ${this.speed} km/h`);
  }
}
const MyCar = new Car("Mercedes", 300);
MyCar.showInfo();

