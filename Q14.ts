// Create an interface Attendance with a method markAttendance(). Implement this interface in the Student class, and define how attendance is marked for a student.

interface Attendance {
    markAttendance(status:"Absent"| "Present");
}

class Student2 implements Attendance {
    name:String
    status:"Absent"| "Present"


    constructor(name:String) {
        this.name=name
    }
    markAttendance(status:"Absent"| "Present") {
        this.status = status
    }
    displayAttendance(){
        console.log(this.name+" is "+this.status);
    }
    
}


const s1 = new Student2("Sagar")
s1.markAttendance("Absent");
const s2 = new Student2("Stro")
s2.markAttendance("Present"); 
s1.displayAttendance();
s2.displayAttendance();