//  Code: TypeScript Tutorial
let name: string = 'samad';
name = name.toUpperCase();

let age: number = 20;
age = parseInt(age.toFixed(2));

//  Boolean Type in TypeScript
let requestStatus: 'pending' | 'success' | 'error' = 'pending';
requestStatus = 'error';

// Array Type in TypeScript
let temperature: number[] = [20, 30, 40];
temperature.push(50);

let mixedArray: (string | number)[] = ['samad', 20];

// Object Type in TypeScript
let car: { brand: string; model: string; year: number } = {
  brand: 'Toyota',
  model: 'Corolla',
  year: 2020,
};

let book = { title: 'book', cost: 20 };
let pen = { title: 'pen', cost: 10 };
let notebook = { title: 'notebook' };

let items: { readonly title: string; cost?: number }[] = [book, pen, notebook];

let bike: { brand: string; year: number } = { brand: 'Honda', year: 2020 };

let laptop: { brand: string; year: number } = { brand: 'Dell', year: 2020 };

// Function Types in TypeScript
function sayHi(name: string) {
  console.log(`Hello ${name.toUpperCase()}`);
}

sayHi('samad');

function calculateDiscount(price: number): number {
  return price * 0.9;
}
const finalPrice = calculateDiscount(200);

// function example
const names: string[] = ['samad', 'ali', 'ahmed'];

function checkName(name: string): boolean {
  return names.includes(name);
}

console.log(checkName('samad'));

// Optional Parameters in TypeScript
function calculatePrice(price: number, discount?: number): number {
  return price - (discount || 0);
}

let priceAfterDiscount = calculatePrice(100, 20);

// Default Parameters in TypeScript
function calculateScore(
  initialScore: number,
  penaltyPoints: number = 0
): number {
  return initialScore - penaltyPoints;
}

let scoreAfterPenalty = calculateScore(100, 20);
let scoreWithoutPenalty = calculateScore(300);

// Rest Parameters in TypeScript
function sum(name: string, ...numbers: number[]): string {
  const doubled = numbers.map((num: number) => num * 2);
  console.log(doubled);

  //  the reduce method is used to sum all the numbers in the array and return the total
  let total = numbers.reduce((previous, current) => {
    return previous + current;
  }, 0);

  return `${name} your total is ${total}`;
}

let result = sum('samad', 20, 30, 40, 50);
console.log(result);

// void type in TypeScript
function logMessage(message: string): void {
  console.log(message);
}

logMessage('Hello typescript');

// Union Types in TypeScript and type guards
function processInput(value: string | number) {
  if (typeof value === 'string') {
    console.log(value.toUpperCase());
  } else {
    console.log(value * 2);
  }
}

processInput('samad');

// alternative way to define object as parameter in TypeScript
function createStudent(student: { id: number; name: string }): void {
  console.log(`Welcome ${student.name.toUpperCase()} !!!`);
}

createStudent({ id: 1, name: 'samad' });

//  challenge to create a function that takes a string or number and returns the square of the number or reverse the string
function processData(
  input: string | number,
  config: { reverse: boolean } = { reverse: false }
): string | number {
  if (typeof input === 'number') {
    return input * input;
  } else {
    return config.reverse
      ? input.toUpperCase().split('').reverse().join('')
      : input.toUpperCase();
  }
}

console.log(processData(10));
console.log(processData('samad'));
console.log(processData('samad', { reverse: true }));

//  type aliases in TypeScript
type Users = { id: number; name: string; isActive: boolean };

const john: Users = {
  id: 1,
  name: 'john',
  isActive: true,
};
const susan: Users = {
  id: 1,
  name: 'susan',
  isActive: false,
};

function createUser(user: Users): Users {
  console.log(`Hello there ${user.name.toUpperCase()} !!!`);

  return user;
}

// type aliases with union types
type StringOrNumber = string | number;

let value: StringOrNumber;
value = 'samad';
value = 20;

// type aliases with literal types
type Theme = 'light' | 'dark';

let theme: Theme = 'light';

function setTheme(theme: Theme): void {
  console.log(`Theme set to ${theme}`);
}

setTheme('dark');

type Employee = { id: number; name: string; department: string };
type Managing = { id: number; name: string; employees: Employee[] };
type Staff = Employee | Managing;

// type aliases can be used to define complex types
function printStaffDetails(staff: Staff): void {
  if ('employees' in staff) {
    console.log(
      `Managing ${staff.name} has ${staff.employees.length} employees`
    );
  } else {
    console.log(
      `Employee ${staff.name}, works in the ${staff.department} department`
    );
  }
}

const alice: Employee = { id: 1, name: 'alice', department: 'Sales' };
const steve: Employee = { id: 2, name: 'Steve', department: 'HR' };

const bob: Managing = { id: 1, name: 'bob', employees: [alice, steve] };

printStaffDetails(alice);
printStaffDetails(bob);

// type aliases with intersection types
type Books = { id: number; name: string; price: number };
type DiscountedBook = Books & { discount: number };

const book1: Books = { id: 1, name: 'how to cook a dragon', price: 15 };
const book2: Books = { id: 2, name: 'how to train your dragon', price: 20 };

const discountedBook: DiscountedBook = {
  id: 3,
  name: 'shadow slave',
  price: 31,
  discount: 0.15,
};

// type aliases with interfaces

interface Book {
  readonly isbn: number;
  title: string;
  author: string;
  genre?: string;
  //   method
  printAuthor(): void;
  printTitle(message: string): string;
}

const deepWork: Book = {
  isbn: 123,
  title: 'Deep Work',
  author: 'Cal Newport',
  genre: 'Self-help',
  printAuthor() {
    console.log(this.author);
  },
  printTitle(message) {
    return `${message} ${this.title}`;
  },
};

deepWork.printAuthor();
console.log(deepWork.printTitle('Book Title:'));

//interface challenge

interface Computer {
  readonly id: number;
  brand: string;
  ram: number;
  storage?: number;
  upgradeRam(amount: number): number;
}

const laptop1: Computer = {
  id: 1,
  brand: 'Dell',
  ram: 8,
  upgradeRam(amount) {
    this.ram += amount;
    return this.ram;
  },
};

console.log(laptop1.upgradeRam(4));
console.log(laptop1);

// advanced interface in TypeScript\
// interface Person {
//   name: string;
//   getDetails(): string;
// }

// interface DogOwner {
//   dogName: string;
//   getDogDetails(): string;
// }

// interface Person {
//   age: number;
// }

// const person: Person = {
//   name: 'samad',
//   age: 20,
//   getDetails() {
//     return `Person: ${this.name}, Age: ${this.age}`;
//   },
// };

// // interface inheritance in TypeScript using extends keyword
// interface Employees extends Person {
//   employeeId: number;
// }

// const employee: Employees = {
//   employeeId: 1,
//   name: 'jane',
//   age: 30,
//   getDetails() {
//     return `Employee: ${this.name}, Age: ${this.age}, ID: ${this.employeeId}`;
//   },
// };

// console.log(employee.getDetails());

// // interface inheritance with multiple interfaces
// interface Managers extends Person, DogOwner {
//   managePeople(): void;
// }

// const manager: Managers = {
//   name: 'john',
//   age: 40,
//   dogName: 'buddy',
//   getDetails() {
//     return `Employee: ${this.name}, Age: ${this.age} }`;
//   },
//   getDogDetails() {
//     return `Dog: ${this.dogName}`;
//   },
//   managePeople() {
//     console.log('Managing people');
//   },
// };

// challenge
interface Person {
  name: string;
}

interface DogOwner extends Person {
  dogName: string;
}

interface Manager extends Person {
  managePeople(): void;
  delegateTasks(): void;
}

function getEmployee(): Person | DogOwner | Manager {
  const random = Math.random();

  if (random < 0.33) {
    return { name: 'samad' };
  } else if (random < 0.66) {
    return { name: 'samad', dogName: 'buddy' };
  } else {
    return {
      name: 'samad',
      managePeople: () => console.log('Managing people...'),
      delegateTasks: () => console.log('Delegating tasks...'),
    };
  }
}

const employee: Person | DogOwner | Manager = getEmployee();

console.log(employee);

function isManager(obj: Person | DogOwner | Manager): obj is Manager {
  return 'managePeople' in obj;
}

if (isManager(employee)) {
  employee.delegateTasks();
}

// enum in typescript
enum ServerResponseStatus {
  Success = 200,
  Error = 'Error',
}

console.log(ServerResponseStatus);

interface ServerResponse {
  result: ServerResponseStatus;
  data: string[];
}

function getServerResponse(): ServerResponse {
  return {
    result: ServerResponseStatus.Success,
    data: ['first item', 'second item'],
  };
}

const response: ServerResponse = getServerResponse();
console.log(response);

// enum challenge

enum UserRole {
  Admin,
  Manager,
  Employee,
}

type User = {
  id: number;
  name: string;
  role: UserRole;
  contact: readonly [email: string, phone: string];
};

function createUsers(userObj: User): User {
  return userObj;
}

const result_2: User = createUsers({
  id: 1,
  name: 'John Doe',
  role: UserRole.Admin,
  contact: ['john.doe@example.com', '123-456-7890'],
});

console.log(result_2);
