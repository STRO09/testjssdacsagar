// Define an abstract class Institute with an abstract method getInstitutionType(). Create a class School implementing the interface Management with methods like addStudent(), removeStudent(). Combine these in a real-time use case to manage different types of institutions like School and College
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Institute = /** @class */ (function () {
    function Institute() {
    }
    return Institute;
}());
var School = /** @class */ (function (_super) {
    __extends(School, _super);
    function School() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.institutiontype = "Aided";
        _this.StudentList = [];
        return _this;
    }
    School.prototype.removeStudent = function (id) {
        this.StudentList = this.StudentList.filter(function (student) { return student.id != id; });
    };
    School.prototype.getInstitutionType = function () {
        console.log(this.institutiontype);
    };
    School.prototype.addStudent = function (id, name, roll) {
        this.StudentList.push({ "id": id, "name": name, "roll": roll });
    };
    return School;
}(Institute));
var a = new School();
a.getInstitutionType();
a.addStudent(1, "sagar", 45);
console.log(a.StudentList);
a.addStudent(2, "Stro", 4);
console.log(a.StudentList);
a.addStudent(3, "Theseus", 35);
console.log(a.StudentList);
a.removeStudent(3);
console.log(a.StudentList);
