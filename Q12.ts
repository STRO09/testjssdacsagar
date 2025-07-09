//  Create a Course class with a parameterized constructor that takes courseName, courseCode, and instructor as parameters and assigns them to class attributes.
 
class Course {
    courseName: String
     courseCode: number 
     instructor:String 

     constructor(name:String, code: number, ins: string){
        this.courseName= name;
        this.courseCode=code;
        this.instructor=ins;
     }
}


const co =new Course("Full stack dev",45,"Ajay sir");
console.log(co.courseCode);
console.log(co.courseName);
console.log(co.instructor);
