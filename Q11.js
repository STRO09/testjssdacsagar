//  Create a class School that contains: a. Static member: totalStudents to track the total number of students. b. Non-static member: studentList to store individual student details. c. Methods to increment the static member and add student details to the nonstatic list.
var School = /** @class */ (function () {
    function School() {
        this.studentList = [];
    }
    School.IncrementStudents = function () {
        this.totalStudents++;
    };
    School.prototype.addStudents = function (name) {
        this.studentList.push(name);
        School.IncrementStudents();
    };
    School.totalStudents = 0;
    return School;
}());
var sch = new School();
sch.addStudents("Sagar");
sch.addStudents("Stro");
sch.addStudents("Theseus");
console.log(School.totalStudents);
