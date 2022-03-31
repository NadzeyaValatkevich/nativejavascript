const students = [
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
        scores: 90,
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
    },
    {
        name: "Helen",
        age: 20,
        isMarried: false,
        scores: 110
    },
    {
        name: "Ann",
        age: 20,
        isMarried: false,
        scores: 105
    },
];

const user = {
    name: "Bob",
    age: 23,
    friends: ["Alex", "Nick", "John"]
}

//1. Создайте поверхностную копию объекта user
let copyUser = {...user};

//Проверка:
//- что должно быть в консоли?
console.log(user===copyUser);

//что должно быть в консоли?

console.log(user.friends===copyUser.friends);

//2. Полная (глубокая) копия объекта user
let deepCopyUser = {...user, friends: [...user.friends]};

//Проверка:
//что должно быть в консоли?
console.log(user===deepCopyUser);

//что должно быть в консоли?
console.log(user.friends===deepCopyUser.friends);

//3. Поверхностная копия массива students
let copyStudents = [...students];

//Проверка:
//что должно быть в консоли?
console.log(students === copyStudents);

//что должно быть в консоли?
console.log(students[0] === copyStudents[0]);

//4*. Полная (глубокая) копия массива students (map)
let deepCopyStudents = students.map(elem => ({...elem}));

//Проверка:
//что должно быть в консоли?

console.log(students === deepCopyStudents);

//что должно быть в консоли?
console.log(students[0] === deepCopyStudents[0]);

// NB!!! Далее все преобразования выполняем не модифицируя исходный массив students
// Вывод результатов - в консоль

//5. Отсортируйте копию массива deepCopyStudents по алфавиту (sort)
let sortedByName = [...deepCopyStudents.sort((a, b) => a.name < b.name ? -1 : 1)];
console.log(sortedByName);

//5a. Отсортируйте deepCopyStudents по успеваемости(лучший идёт первым)(sort)
let sortedByScores = deepCopyStudents.sort((a, b) => a.scores < b.scores ? 1 : -1);
console.log(sortedByScores);

//6. Сформируйте массив студентов, у которых 100 и более баллов (filter)
let  bestStudents = students.filter(elem => elem.scores >= 100);
console.log(bestStudents);

//6a. Получите массив ("вырежьте") из трёх лучших студентов из массива deepCopyStudents (splice)
//https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
let newDeepCopyStudents2 = deepCopyStudents.map(elem => ({...elem}));
let topStudents = newDeepCopyStudents2.splice(0, 3);
console.log(topStudents)
console.log(newDeepCopyStudents2)

//6b. Объедините массивы deepCopyStudents и topStudents так,
//чтоб сохранился порядок сортировки (spread-оператор || concat)
let newDeepCopyStudents = topStudents.concat(newDeepCopyStudents2);
console.log(newDeepCopyStudents)


//7. Сформируйте массив холостых студентов (filter)
let notMarriedStudents = students.filter(elem => elem.isMarried === false);
console.log(notMarriedStudents)

//8. Сформируйте массив имён студентов (map)
let studentsNames = students.map(elem => elem.name);
console.log(studentsNames)

//8a. Сформируйте строку из имён студентов, разделённых
// - пробелом (join)
// - запятой (join)
let nameWithSpace = studentsNames.join(' ');
console.log(nameWithSpace)
let namesWithComma = studentsNames.join(',');
console.log(namesWithComma)

//9. Добавьте всем студентам свойство "isStudent" со значением true (map)

let trueStudents = students.map(elem => ({...elem, isStudent: true}));
console.log(trueStudents)

//10. Nick женился. Выполните соответствующие преобразование массива students (map)
let studentsWithMarriedNick = students.map(elem => elem.name === 'Nick' ? {...elem,isMarried:true} : {...elem});
console.log(studentsWithMarriedNick);

//11. Найдите студента по имени Ann (find)
let ann = students.find(elem => elem.name === 'Ann');
console.log(ann)

//12. Найдите студента с самым высоким баллом (reduce)
// - c помощью reduce
// - *не испльзуя методы массивов и Math.max()*
let bestStudent = students.reduce((accum, item) =>
{item.scores > accum.scores ? accum = item : accum});
console.log(bestStudent);

function highBall() {
    let ball = students[0];
    for (let i of students) {
        if (i.scores > ball.scores) {
            ball = i;
        } continue;
    }
    return ball
};
console.log(highBall());

//13. Найдите сумму баллов всех студентов (reduce);
let scoresSum = students.reduce((accum, item) => accum + item.scores, 0);
console.log(scoresSum);
// И поднимаем руку!!!!

// 14. Д.З.:
// Напишите функцию addFriends, которая принимает параметром массив students
// и добавляет в каждому студенту свойство "friends",
// значением которого является массив имён всех остальных студентов из массива students,
// за исключением собственного имени студента. Т.е. в друзьях у Боба Боба быть не должно.

const addFriends = (students) => {
    let arrayFriends = students.map(elem => ({...elem, friends: students.filter(el => el.name !== elem.name ? el.name : "" )}));
    return arrayFriends;
}
console.log(addFriends(students));
