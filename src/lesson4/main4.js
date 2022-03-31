const todolistID_1 = v1() //'53jf-65hg';
const todolistID_2 = '46jf-01jk';

const todolist = [
    {
        id: '53jf-65hg',
        title: 'What to learn',
        filter: 'all'
    },

    {
        id: '46jf-01jk',
        title: 'What to buy',
        filter: 'all'
    }
];

const tasks = {
    [todolistID_1]: [//'53jf-65hg'
        {title: 'HTML', isDone: true},
        {title: 'CSS', isDone: true},
        {title: 'React', isDone: false},
    ],
    [todolistID_2]: [//'46jf-01jk'
        {title: 'Water', isDone: true},
        {title: 'Bread', isDone: true},
        {title: 'Monitor', isDone: false},
    ]
}


const propName = 'age'
const a = {
    'name': 'Ted',
    // propName: 25 // свойство age не получим, а будет свойство propName
    [propName]: 25, //а здесь будет свойство age
    [10 + 5]: 'hey!!!' // будет свойство '15'
}

//найдем 3-й объект у tasks

console.log(tasks[todolistID_1][2]) //или
console.log(tasks['53jf-65hg'].find(t=> t.title === 'React'));

//method reduce
let students = [
    {
        name: "Bob",
        age: 22,
        isMarried: true,
        scores: 85
    },
    {
        name: "Alex",
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
        scores: 100
    }
];


const arr = [1, 2, 3, 4, 5]

console.log(arr.reduce((sum, el) => sum + el, 0));
console.log(arr.reduce((max, el) => max > el ? max : el, 0));

//найдем sum баллов students
console.log(students.reduce((acc, st) => acc + st.scores , 0));

//хотим получить строку
console.log(students.reduce((acc, st) => {
    acc = acc + '' + st.name;
    return acc
}, ''));

//неженатые студенты
//вместо filter
console.log(students.reduce((acc, el) => {
    if(!el.isMarried) {
        acc.push(el);
    }
    return acc;
}, []));

//вместо map



// надо получить {'Bob': 85, 'Alex':98}

console.log(students.reduce((acc, el) => {
    acc[el.name] = el.scores; // в свойство name записываем значение
    return acc;
}, {}));
