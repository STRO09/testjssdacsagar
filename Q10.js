// Define a class named Student with the following attributes: a. name, studentId, grade, address. b. Include a method displayInfo() that prints all the student’s details.
var Student = /** @class */ (function () {
    function Student(name, id, grade, addr) {
        this.name = name;
        this.studentId = id;
        this.grade = grade;
        this.address = addr;
    }
    Student.prototype.displayinfo = function () {
        console.log("ID: " + this.studentId + ", Name: " + this.name + ", Grade: " + this.grade + ", Address: " + this.address);
    };
    return Student;
}());
var st = new Student("Sagar", 5, 'A', "Mumbai");
st.displayinfo();
