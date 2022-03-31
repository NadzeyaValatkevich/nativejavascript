const names = ['Bob', 'Ted', 'Alex', 'Fred', 100, 'игорь', 'Юра'];

// console.log(names.sort()); - мутирует наш [];
console.log(names);
console.log([...names.sort()]);

const numbers = [-1, 100, 0, -999, 33, 456, 321, 1111];
// console.log(numbers);
// console.log([...numbers.sort()]);

//для каждой пары чисел
const compareFunction = (a, b) => {
    if(a <= b) {
        return -1 // отрицат значен, если менять не надо
    } else {
        return 1 //положительное значен, если менять надо
    };


};

// console.log(numbers.sort(compareFunction));
// console.log(numbers.sort((a, b) => a - b));


const students = [
    {
        name: "bob",
        age: 22,
        isMarried: true,
        scores: 95
    },
    {
        name: "Bob",
        age: 22,
        isMarried: true,
        scores: 95
    },
    {
        name: "Alex",
        age: 23,
        isMarried: true,
        scores: 89
    },
    {
        name: "Helge",
        age: 21,
        isMarried: true,
        scores: 89
    },
    {
        name: "Nick",
        age: 20,
        isMarried: false,
        scores: 120
    },
    {
        name: "John",
        age: 19,
        isMarried: false,
        scores: 121
    },
    {
        name: "alex",
        age: 23,
        isMarried: true,
        scores: 89
    },
];

console.log([...students.sort((a, b) => a.name.toLowerCase() < b.name.toLowerCase() ? -1 : 1)]);

console.log([...students.sort((a,b) => a.age - b.age)]);

//сортировка пузырьком bubble.sort

console.log(numbers)

for (let i = 0; i < numbers.length - 1 ; i++) {
    for (let i = 0; i < numbers.length - 1 - j; i++) {
        if (numbers[i] > numbers[i + 1]) {
            let temp = numbers[i + 1];
            numbers[i + 1] = numbers[i];
            numbers[i] = temp;
        }
    }
}
console.log(numbers)

for (let i = 0; i < numbers.length - 1 ; i++) {
    for (let i = 0; i < numbers.length - 1 - j; i++) {
        if (numbers[i] > numbers[i + 1]) {
            [numbers[i + 1], numbers[i]] = [numbers[i], numbers[i + 1]]
        }
    }
}
