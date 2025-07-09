//  Create a class School that contains: a. Static member: totalStudents to track the total number of students. b. Non-static member: studentList to store individual student details. c. Methods to increment the static member and add student details to the nonstatic list.

class School {
    static totalStudents: number = 0;
    studentList: any =[];

    static IncrementStudents() {
        this.totalStudents++;
    }

    addStudents(name:String) {
        this.studentList.push(name);
        School.IncrementStudents();
    }
}

const sch = new School();
sch.addStudents("Sagar");
sch.addStudents("Stro");
sch.addStudents("Theseus");
console.log(School.totalStudents);