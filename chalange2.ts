/*
- make this code better


let person1 = {};
person1.name = "maria";
person1.age = 29;
person1.profession = "atriz"

let person2 = {}
person2.name = "roberto";
person2.age = 19;
person2.profession = "Padeiro";

let person3 = {
    name: "laura",
    age: "32",
    profession: "Atriz"
};

let person4 = {
    name = "carlos",
    age = 19,
    profession = "padeiro"
}

*/

enum Job {
    Actress,
    Baker
}

type Human = {
    name:string,
    age:number,
    profession:Job
}

let person1: Human ={
    name:'roberto',
    age:19,
    profession: Job.Baker
}

let person2: Human ={
    name:'laura',
    age:19,
    profession: Job.Actress
}
let person3: Human ={
    name:'maria',
    age:19,
    profession: Job.Actress
}
let person4: Human ={
    name:'carlos',
    age:19,
    profession: Job.Baker
}