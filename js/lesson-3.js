// Задание 1
// Дан массив чисел [ 1 , 2 , 3 , 4 , 5 ]. Создайте новый массив, содержащий
// квадраты каждого элемента входного массива.
// Ожидаемый результат: [ 1 , 4 , 9 , 16 , 25 ].

// const numbers = [[1, 2, 3, 4, 5]]

const numbers1 = [1, 2, 3, 4, 5];
const squares = numbers1.map(num => num * num);
console.log(squares); // [1, 4, 9, 16, 25]

// Задание 2
// Дан массив объектов. Создайте новый массив, содержащий все значения 
// из массивов values ​​каждого объекта, сохраненных в одном массиве. 
// Ожидаемый результат: [1, 2, 3, 4, 5, 6, 7, 8, 9].

// const data = [ 
// { id: 1, values: [1, 2, 3] }, 
// { id: 2, values: [4, 5, 6] }, 
// { id: 3, values: [7, 8, 9] }, 
// ];

const data = [ 
  { id: 1, values: [1, 2, 3] }, 
  { id: 2, values: [4, 5, 6] }, 
  { id: 3, values: [7, 8, 9] }, 
];
const mergedValues = data.flatMap(obj => obj.values);
console.log(mergedValues); // [1, 2, 3, 4, 5, 6, 7, 8, 9]

// Задание 3
// Дан массив объектов. 
 // Проверьте, есть ли хотя бы один объект в возрасте менее 20 лет. 
 // Ожидаемый результат: true .

// const people = [
 //   { name: 'John', age: 27 },
 //   { name: 'Jane', age: 31 },
 //   { name: 'Bob', age: 19 },
 // ];

const people = [
  { name: 'John', age: 27 },
  { name: 'Jane', age: 31 },
  { name: 'Bob', age: 19 },
];
const hasYoungPerson = people.some(person => person.age < 20);
console.log(hasYoungPerson); // true

// Задание 4
// Дан массив чисел [2, 4, 6, 8, 10]. 
 // Проверьте, есть ли каждый элемент массива четным. Ожидаемый результат: true .

// const numbers = [2, 4, 6, 8, 10];

const numbers2 = [2, 4, 6, 8, 10];
const allEven = numbers2.every(num => num % 2 === 0);
console.log(allEven); // true

// Задание 5
// Найдите первое нечетное число

// const numbers = [2, 1, 6, 8, 9, 10, 12];

const numbers3 = [2, 1, 6, 8, 9, 10, 12];
const firstOdd = numbers3.find(num => num % 2 !== 0);
console.log(firstOdd); // 1

// Задание 6
// Отсортируйте массив чисел [ 4 , 2 , 5 , 1 , 3 ]
// в порядке возрастания. Ожидаемый результат: [ 1 , 2 , 3 , 4 , 5 ].

// const numbersArray = [ 4 , 2 , 5 , 1 , 3 ];

const numbersArray = [4, 2, 5, 1, 3];
numbersArray.sort((a, b) => a - b);
console.log(numbersArray); // [1, 2, 3, 4, 5]

// Задание 7
// Отсортируйте массив строк [ "banana" , "orange" , "apple" , "pear" ]
 //   в порядке алфавита. 
 // Ожидаемый результат: [ "apple" , "banana" , "orange" , "pear" ].

// const stringArray = [ 'banana' , 'orange' , 'apple' , 'pear' ];

const stringArray = ['banana', 'orange', 'apple', 'pear'];
stringArray.sort();
console.log(stringArray); // ["apple", "banana", "orange", "pear"]

// Задание 8
// Отсортируйте массив объектов по возрасту в порядке возрастания.
// Ожидаемый результат: [{name: "Bob", age: 19}, {name: "John", age: 27}, {name: "Jane", age: 31}].

//const users = [
// { name: ' John ', age: 27 },
// { name: ' Jan e', age: 31 },
// { name: ' Bob ', age: 19 },
// ];

const users = [
  { name: 'John', age: 27 },
  { name: 'Jane', age: 31 },
  { name: 'Bob', age: 19 },
];
users.sort((a, b) => a.age - b.age);
console.log(users);

// Задание 9
// Дан массив объектов .
// Создайте новый массив, содержащий только объекты , в которых
//возраст более 20 лет.
// Ожидаемый результат: [{ name : "John", age: 27 }, { name : "Jane", age: 31 }]

//const user = [
// { name : 'John' , age: 27 },
// { name : 'Jane' , age: 31 },
// { name : 'Bob' , age: 19 },
// ]

const filteredUsers = users.filter(user => user.age > 20);
console.log(filteredUsers);

// Задание 10
// Дан массив чисел [1, 2, 3, 4, 5]. 
// Используйте метод для вычисления суммы элементов массива.

// const numbers = [1, 2, 3, 4, 5];

const numbers4 = [1, 2, 3, 4, 5];
const sum = numbers4.reduce((acc, num) => acc + num, 0);
console.log(sum); // 15

// Задание 11
 // Создай класс для калькулятора, который имеет следующие методы: 
 // - метод number, приобретающий исходное значение для следующих операций 
 // - метод getResult, возвращающий финальный результат всех операций, проведенных с числом 
 // - методы add, substruct, divide, multiply 
 // Объект класса может проводить последовательные операции в виде цепочки
 


class Calculator {
  constructor() {
    this.result = 0;
  }
  number(value) {
    this.result = value;
    return this;
  }
  add(value) {
    this.result += value;
    return this;
  }
  subtract(value) {
    this.result -= value;
    return this;
  }
  multiply(value) {
    this.result *= value;
    return this;
  }
  divide(value) {
    if (value !== 0) this.result /= value;
    return this;
  }
  getResult() {
    return this.result;
  }
}
const calc = new Calculator();
console.log(calc.number(10).add(5).subtract(2).multiply(3).divide(2).getResult()); // 19.5

// Задание 12
 // Напиши класс Client, который создает объект со свойствами login email.
  // Объяви частные свойства #login #email, доступ к которым сделай 
 // через геттер и сеттер login email
 

class Client {
  #login;
  #email;

  constructor(login, email) {
    this.#login = login;
    this.#email = email;
  }
  get login() {
    return this.#login;
  }
  set login(value) {
    this.#login = value;
  }
  get email() {
    return this.#email;
  }
  set email(value) {
    this.#email = value;
  }
}
const client = new Client('user123', 'user@example.com');
console.log(client.login);
console.log(client.email);

// Задание 13
  // Подражание в классах!
   // Создайте класс `Person`, содержащий следующие свойства: 
  // - `name` - имя человека ; 
  // - `age` - возраст человека ; 
  // - `gender` - пол человека ;
  // – `email` – электронная почта человека.
  
  // ##### Кроме того, класс `Person` должен иметь метод `getDetails()`,
  // возвращающий объект с именем, возрастом, полом
  //и электронной почтой человека.
  
  //
  // Затем создайте класс `Employee`, который расширяет класс `Person` и содержит следующие свойства: 
  // - salary - зарплата сотрудника ;
  // – department – ​​отдел, в котором работает сотрудник.
  // ##### Кроме того, класс `Employee` должен иметь метод `getEmployeeDetails()`, возвращающий объект с идентификатором сотрудника, зарплатой и отделом, в котором работает сотрудник.

class Person {
  constructor(name, age, gender, email) {
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.email = email;
  }
  getDetails() {
    return { name: this.name, age: this.age, gender: this.gender, email: this.email };
  }
}
class Employee extends Person {
  constructor(name, age, gender, email, salary, department) {
    super(name, age, gender, email);
    this.salary = salary;
    this.department = department;
  }
  getEmployeeDetails() {
    return { ...this.getDetails(), salary: this.salary, department: this.department };
  }
}
const employee = new Employee('Alice', 30, 'Female', 'alice@example.com', 50000, 'HR');
console.log(employee.getEmployeeDetails());
