// Create a generic function getStudentInfo<T>(info: T): T that returns any type of student information, such as name, ID, or grade.

function getStudentInfo<T>(info: T){
    console.log(info);
}

const Stud = {
    id:5,
    name: "Sagar"
}

getStudentInfo(Stud.id
);
getStudentInfo(Stud.name);