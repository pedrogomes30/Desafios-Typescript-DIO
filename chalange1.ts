/*
turn this code into a correct typescript code
    let employee = {};
    employee.code = 10;
    employee.name = "Jhon";
*/
 
//answer1 
//this way, set attribute type inside of object on sets attribute
const employee1 = {
    code:10,
    name:"Jhon"
}

//answer2
//this way, set attribute type before set attribute data
const employee2 :{code:number,name:string}= {
    code:10,
    name: "Jhon"
}

//answer3
//on this way, create a interface emplyee
interface employee3{
    code:number,
    name:string
};

//answer4
//use interface as class
const employee4 = {} as employee3;
employee4.code = 10;
employee4.name = "Jhon"


const employee5: employee3 = {
    code:10,
    name:"Jhon"
}