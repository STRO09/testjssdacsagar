// . Define an abstract class Person with abstract methods getDetails() and getRole(). Create two derived classes Student and Teacher that implement these methods to return their respective details and roles.

abstract class Person {
    abstract getDetails(); 
    abstract getRole();
}

class Student1 extends Person {
    name:String 
    role:String = "Student"

    constructor(name:String) {
        super();
        this.name=name;
    }
    getDetails() {
        console.log(this.name+" is a "+this.role);
        }
    getRole() {
        console.log(this
            .role
        )
    }
}

class Teacher extends Person{
        name:String 
    role:String = "Teacher"

        constructor(name:String) {
        super();
        this.name=name;
    }
       getDetails() {
        console.log(this.name+" is a "+this.role);
        }
    getRole() {
        console.log(this
            .role
        )
}
}

const stu = new Student1("Sagar");
const t = new Teacher("Sanjeev Sir");
stu.getDetails();
stu.getRole();
t.getDetails();
t.getRole();

