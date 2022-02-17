

function Student(name,age,cgpa,lang){

        this.name = name;
        this.age = age;
        this.cgpa = cgpa;
        this.lang = lang;

        this.display = function(){
            console.log(this.name);
            console.log(this.age);
            console.log(this.cgpa);
            console.log(this.lang);
        }

}

var student1 = new Student("Alamin",23,3.2,["bangla","English"]);
var student2 = new Student("Abir",25,3.9,["banla","English"]);
var student3 = new Student("Shahin",24,3.5,["bangl","English"]);

student1.display();
student2.display();
student3.display();


// console.log(student1.name);
// console.log(student1.age);
// console.log(student1.cgpa);
// console.log(student1.lang);

