// let students = [
//     {
//         name: "Bob",
//         age: 22,
//         isMarried: true,
//         scores: 85
//     },
//     {
//         name: "Alex",
//         age: 21,
//         isMarried: true,
//         scores: 89
//     },
//     {
//         name: "Nick",
//         age: 20,
//         isMarried: false,
//         scores: 120
//     },{
//         name: "John",
//         age: 19,
//         isMarried: false,
//         scores: 100
//     }
// ];
//
// const names = [];
// for (let i = 0; i < students.length ; i++) {
//     const name = students[i].name;
//     names[i] = name;
// };
// console.log(names);
//
//
//
// const trueStudents = [];
// for (let i = 0; i < students.length; i++) {
//     const trueStudent = {...students[i], isStudents:true};
//     trueStudents[i] = trueStudent
// };
// console.log(trueStudents);
//
//
// function myMap(arr, callback) {
//     const resultArray = [];
//     for (let i = 0; i < arr.length; i++) {
//         const newData = callback(arr[i]);
//         resultArray[i] = newData;
//     }
//     return resultArray;
// };
// console.log(myMap(students, s => s.name));
// console.log(myMap(students, s => ({...students[s], isStudents:true})));
//
// const getTrueStudent = (s) => {
//     return {...s, isStudent: true}
// }
//
// console.log(students.map(s => s.name))
// // console.log(students.map(s => ({...s, isStudents:true})));
// console.log(students.map(getTrueStudent));
//
// function myFilter(arr, callback) {
//     const resultArray = [];
//     for (let i = 0; i < arr.length; i++) {
//         if(callback(arr[i]) === true) {
//             resultArray.push(arr[i])
//         }
//
//     }
//     return resultArray;
// };
//
// console.log(myFilter(students, s => s.scores >= 100));
// console.log(students.filter(s => s.scores >= 100));
//
// function myFind(arr, callback) {
//     for (let i = 0; i < arr.length; i++) {
//         if (callback(arr[i])) {
//             return arr[i]
//         }
//     }
// };
//
// console.log(myFind(students, s => s.name === 'Sasha'))


//new lesson JSNative

const sm = document.getElementById('small');

const onClickHandler1 = () => alert('Hello friend!')
const onClickHandler2 = () => alert('Bye friend!')
const onClickHandler3 = (e) => console.dir(e);
const onClickHandler4 = (e) => console.dir(e.target);
//
//1 вариант

// sm.onclick = onClickHandler1; // set
// sm.onclick = null;

//2 вариант

// sm.addEventListener('click', onClickHandler1);
// sm.addEventListener('click', onClickHandler2);
// sm.removeEventListener('click', onClickHandler3);
// sm.addEventListener('click', onClickHandler3);
//
// const md = document.getElementById('medium');
// const bg = document.getElementById('gig');
//
// sm.addEventListener('click', onClickHandler4)
// md.addEventListener('click', onClickHandler4)
// bg.addEventListener('click', onClickHandler4)


const superHandler = (e) => {
    if(e.target.tagName === 'BUTTON') {
        alert(e.target.id)
    }
}

sm.addEventListener('click', superHandler)



///sm.addEventListener("click", superHandler)
// const a = document.getElementById("a")
// a.addEventListener("click", (e) => {
//     e.preventDefault()
//     alert("e.preventDefault()")
// })
