// Задание 1
// Создайте массив styles с элементами 'jazz' и 'blues' 
// Добавьте к концу массива элемент 'rock-n-roll' с помощью соответствующего метода массивов
 // Найдите элемент 'blues' в массиве и замените его на 'classic' , используя код // Напишите функцию logItems(array), которая принимает массив в качестве аргумента
 // и выводит в консоль каждый его элемент в формате:
 // "<номер элемента> - <значение элемента>" .
 // Используйте цикл for для перебора элементов массива.
 // Нумерация элементов должна начинаться с 1 (а не с 0 ).
const styles = ['jazz', 'blues'];
styles.push('rock-n-roll');
const index = styles.indexOf('blues');
if (index !== -1) {
    styles[index] = 'classic';
}

function logItems(array) {
    for (let i = 0; i < array.length; i++) {
        console.log(`${i + 1} - ${array[i]}`);
    }
}
logItems(styles);

// Задание 2
// Напишите функцию checkLogin ( array) , которая
//  :
//  // Принимает массив логинов как аргумент.
//  // Запрашивает имя пользователя через prompt
//  . в массиве – выводит сообщение через alert: "Welcome, <name>!" // Если имя отсутствует – выводит сообщение: "User not found" . // const logins = [ "Peter" , "John" , "Igor" , "Sasha" ];

function checkLogin(array) {
    const name = prompt("Введите имя пользователя:");
    if (array.includes(name)) {
        alert(`Welcome, ${name}!`);
    } else {
        alert("User not found");
    }
}
const logins = ["Peter", "John", "Igor", "Sasha"];
checkLogin(logins);

// Задание 3
// Напишите функцию caclculateAverage(), 
// которая принимает произвольное количество 
// аргументов и возвращает их среднее значение. 
// Добавьте проверку, что аргументы – это числа.
function caclculateAverage(...args) {
    const numbers = args.filter(arg => typeof arg === 'number');
    if (numbers.length === 0) return "Нет чисел для расчета!";
    const sum = numbers.reduce((acc, num) => acc + num, 0);
    return sum / numbers.length;
}
console.log(caclculateAverage(1, 2, 3, "test", 4, 5));

// Задание 4
// // Напишите функцию, которая будет скучать соседние числа // и будет пушить их в новый массив. 
// вторым, затем второе – с третьим, // третье – с четвертым и так до конца. [33, 45, 39, 17, 25, 27, 29].
function sumAdjacent(arr) {
    const newArr = [];
    for (let i = 0; i < arr.length - 1; i++) {
        newArr.push(arr[i] + arr[i + 1]);
    }
    return newArr;
}
const someArr = [22, 11, 34, 5, 12, 13, 14, 15];
console.log(sumAdjacent(someArr));

// Задание 5
// Напишите функцию findSmallestNumber(numbers), 
// ищущее наименьшее число в массиве. 
// Добавьте проверку, что функция получает именно массив, и 
// если функция получает массив – верните из функции наименьшее число, 
// в противном случае – верните 'Sory, it is not an array!'. 

// const numbers = [2, 5, 35, 56, 12, 24, 7, 80, 3];

function findSmallestNumber(numbers) {
    if (!Array.isArray(numbers)) {
        return "Sorry, it is not an array!";
    }
    return Math.min(...numbers);
}
const numbers = [2, 5, 35, 56, 12, 24, 7, 80, 3];
console.log(findSmallestNumber(numbers));

// Задание 6
// Напишите функцию findLongestWord(string), которая 
 // принимает произвольную строку, состоящую только из слов, разделенных
 // пробелами (параметр string), и будет возвращать самое длинное слово в предложении. // Воспользуйтесь этим примером вызова функции для проверки ее работы:
 // console.log(findLongestWord( "London is the capital of Great Britain" )); // 'capital'

function findLongestWord(string) {
    const words = string.split(' ');
    return words.reduce((longest, current) => current.length > longest.length ? current : longest, "");
}
console.log(findLongestWord("London is the capital of Great Britain"));

// Задание 7
// Напишите скрипт, который для объекта user последовательно:
 // 1 - добавит поле mood со значением 'happy',
 // 2 - заменит hobby на 'skydiving',
 // 3 - заменит значение premium на false ,
 // 4 – выведет содержание объекта user в формате
 // '<ключ>:<значение>' используя Object.keys () и for . 

// const user = {
 //      name: "John" ,
 //      age: 20,
 //      hobby: "tenis" ,
 //      premium: true ,
 //    };

const user = {
    name: "John",
    age: 20,
    hobby: "tenis",
    premium: true,
};
user.mood = "happy";
user.hobby = "skydiving";
user.premium = false;

for (const key of Object.keys(user)) {
    console.log(`${key}: ${user[key]}`);
}

// Задание 8
// Есть объект, в котором хранятся зарплаты команды 
// Напишите код для добавления всех зарплат и 
// сохраните его результат в переменной sum. 
// Если объект salaries пуст, то результат должен быть 0 

// const salaries = { 
// Mango: 100, 
// Poly: 160, 
// Ajax: 1470, 
// };

const salaries = { 
    Mango: 100, 
    Poly: 160, 
    Ajax: 1470, 
};
const sum = Object.values(salaries).reduce((acc, salary) => acc + salary, 0);
console.log(sum);

// Задание 9
// Создайте объект calculator со следующими методами: 
// read(a, b) – принимает два аргумента и сохраняет их как свойства объекта, 
// sum() – возвращает сумму сохраненных значений (с проверкой на наличие свойств в об ), 
// mult() - преумножает сохранение значения и возвращает результат (с проверкой на наличие свойств в объекте), 
// вынесите проверку на наличие свойств в объекте в отдельный метод exist(). 

// Если указанные свойства в объекте отсутствуют (т.е. метод exist возвращает false), 
// методы sum и mult должны возвращать строку 'No such propeties'

const calculator = {
    read(a, b) {
        this.a = a;
        this.b = b;
    },
    exist() {
        return this.a !== undefined && this.b !== undefined;
    },
    sum() {
        return this.exist() ? this.a + this.b : "No such properties";
    },
    mult() {
        return this.exist() ? this.a * this.b : "No such properties";
    }
};
calculator.read(5, 10);
console.log(calculator.sum());
console.log(calculator.mult());

// // Задание 10
// // Напишите функцию calcTotalPrice (fruits, fruitName) ,
//  // которая принимает массив объектов (fruits) и строку с названием фрукта (fruitName) .
//  // Функция считает и возвращает общую стоимость фрукта
//  // с таким именем, ценой и количеством из объекта. // Обратите внимание, что в массиве может быть несколько объектов с одинаковым 
//  // названием фрукта
//       , это тоже надо
//  учесть .​     ​​​
//  ​/      { name: "Банан" , price: 125, quantity: 8 },
//  //      { name: "Груша" , price: 350, quantity: 2},
//  //      {name: "Виноград" , price: 440, quantity: 3},
//  //      {name: "Банан" , price: 125, quantity: 3},
//  //    ];
function calcTotalPrice(fruits, fruitName) {
    return fruits
        .filter(fruit => fruit.name === fruitName)
        .reduce((total, fruit) => total + fruit.price * fruit.quantity, 0);
}
const fruits = [
    { name: "Яблоко", price: 45, quantity: 7 },
    { name: "Апельсин", price: 60, quantity: 4 },
    { name: "Банан", price: 125, quantity: 8 },
    { name: "Груша", price: 350, quantity: 2 },
    { name: "Виноград", price: 440, quantity: 3 },
    { name: "Банан", price: 125, quantity: 3 },
];
console.log(calcTotalPrice(fruits, "Банан"));
