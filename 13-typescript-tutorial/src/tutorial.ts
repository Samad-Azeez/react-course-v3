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
const john: { id: number; name: string; isActive: boolean } = {
  id: 1,
  name: 'john',
  isActive: true,
};
const susan: { id: number; name: string; isActive: boolean } = {
  id: 1,
  name: 'susan',
  isActive: false,
};

function createUser(user: { id: number; name: string; isActive: boolean }): {
  id: number;
  name: string;
  isActive: boolean;
} {
  console.log(`Hello there ${user.name.toUpperCase()} !!!`);

  return user;
}
