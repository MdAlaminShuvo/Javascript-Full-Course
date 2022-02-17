// import { text, setText } from "./myModule.js"; 
// console.log(text);
// setText("goodbye from es6");

// console.log(text);


class Student {
    constructor (id,name){
        this.id = id;
        this.name = name;
    }
    set StudentName(name){
        this.name = name;
    }
    get StudentInfo(){
        return this.id + " " + this.name;
    }
}

let s1 = new Student(101,"Anis");
// console.log(s1.id)
// console.log(s1.name)

// s1.StudentName = "lalala";
// console.log(s1.name);
console.log(s1.StudentInfo);