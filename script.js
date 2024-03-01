// 1
let cities = document.querySelectorAll('li');
cities = JSON.stringify(cities);
console.log(cities);

//2 
let json = '["user1", "user2", "user3", "user4", "user5"]';
let pars = JSON.parse(json);
pars.push('user6');
pars = JSON.stringify(json)
console.log(pars)
// превратитть в масив и вернтть обратно

//3
let users = `[
    {
        "name": "user1",
        "age": 25,
        "salary": 1000
    },
    {
        "name": "user2",
        "age": 26,
        "salary": 2000
    },
    {
        "name": "user3",
        "age": 27, 
        "salary": 3000
    }
]`;
let arr = JSON.parse(users);

let newUser = {
        name: 'user4',
        age: 28,
        salary: 4000,
};
arr.push(newUser);
arr = JSON.stringify(users);
console.log(arr);

//4
let str = '["user1", "user2", "user3", "user4", "user5"]';

//5
localStorage.setItem('surName', ["Иванов","Петров","Сидоров"]);
let surName = localStorage.getItem('surName');

localStorage.setItem('name', ["Иван","Петр","Сидор"]);
let us = localStorage.getItem('name');

localStorage.setItem('patronymic', ["Иванович","Петрович","Сидорович"]);
let patronymic = localStorage.getItem('patronymic');