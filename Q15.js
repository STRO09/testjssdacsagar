// Create a generic function getStudentInfo<T>(info: T): T that returns any type of student information, such as name, ID, or grade.
function getStudentInfo(info) {
    console.log(info);
}
var Stud = {
    id: 5,
    name: "Sagar"
};
getStudentInfo(Stud.id);
getStudentInfo(Stud.name);
