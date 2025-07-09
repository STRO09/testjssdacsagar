//  Create a Course class with a parameterized constructor that takes courseName, courseCode, and instructor as parameters and assigns them to class attributes.
var Course = /** @class */ (function () {
    function Course(name, code, ins) {
        this.courseName = name;
        this.courseCode = code;
        this.instructor = ins;
    }
    return Course;
}());
var co = new Course("Full stack dev", 45, "Ajay sir");
console.log(co.courseCode);
console.log(co.courseName);
console.log(co.instructor);
