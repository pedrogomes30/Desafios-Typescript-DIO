"use strict";
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
var Job;
(function (Job) {
    Job[Job["Actress"] = 0] = "Actress";
    Job[Job["Baker"] = 1] = "Baker";
})(Job || (Job = {}));
let person1 = {
    name: 'roberto',
    age: 19,
    profession: Job.Baker
};
let person2 = {
    name: 'laura',
    age: 19,
    profession: Job.Actress
};
let person3 = {
    name: 'maria',
    age: 19,
    profession: Job.Actress
};
let person4 = {
    name: 'carlos',
    age: 19,
    profession: Job.Baker
};
