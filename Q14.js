// Create an interface Attendance with a method markAttendance(). Implement this interface in the Student class, and define how attendance is marked for a student.
var Student2 = /** @class */ (function () {
    function Student2(name) {
        this.name = name;
    }
    Student2.prototype.markAttendance = function (status) {
        this.status = status;
    };
    Student2.prototype.displayAttendance = function () {
        console.log(this.name + " is " + this.status);
    };
    return Student2;
}());
var s1 = new Student2("Sagar");
s1.markAttendance("Absent");
var s2 = new Student2("Stro");
s2.markAttendance("Present");
s1.displayAttendance();
s2.displayAttendance();
