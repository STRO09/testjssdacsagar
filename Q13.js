// . Define an abstract class Person with abstract methods getDetails() and getRole(). Create two derived classes Student and Teacher that implement these methods to return their respective details and roles.
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
var Person = /** @class */ (function () {
    function Person() {
    }
    return Person;
}());
var Student1 = /** @class */ (function (_super) {
    __extends(Student1, _super);
    function Student1(name) {
        var _this = _super.call(this) || this;
        _this.role = "Student";
        _this.name = name;
        return _this;
    }
    Student1.prototype.getDetails = function () {
        console.log(this.name + " is a " + this.role);
    };
    Student1.prototype.getRole = function () {
        console.log(this
            .role);
    };
    return Student1;
}(Person));
var Teacher = /** @class */ (function (_super) {
    __extends(Teacher, _super);
    function Teacher(name) {
        var _this = _super.call(this) || this;
        _this.role = "Teacher";
        _this.name = name;
        return _this;
    }
    Teacher.prototype.getDetails = function () {
        console.log(this.name + " is a " + this.role);
    };
    Teacher.prototype.getRole = function () {
        console.log(this
            .role);
    };
    return Teacher;
}(Person));
var stu = new Student1("Sagar");
var t = new Teacher("Sanjeev Sir");
stu.getDetails();
stu.getRole();
t.getDetails();
t.getRole();
