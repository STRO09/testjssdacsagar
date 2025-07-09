// Define an abstract class Institute with an abstract method getInstitutionType(). Create a class School implementing the interface Management with methods like addStudent(), removeStudent(). Combine these in a real-time use case to manage different types of institutions like School and College

abstract class Institute {
    abstract  getInstitutionType();
}

interface Management {
    addStudent(id:number,name:String,roll:number);
    removeStudent(id:number);
}
class School extends Institute implements Management{

    institutiontype:String = "Aided"
    StudentList:any = []
    removeStudent(id:number) {
         this.StudentList = this.StudentList.filter((student)=> {return student.id!=id});
    }
    getInstitutionType() {
        console.log(this.institutiontype);
    }

    addStudent(id:number,name:String,roll:number) {
        this.StudentList.push({"id":id,"name":name,"roll":roll});     
    }

}

const a = new School();
a.getInstitutionType();
a.addStudent(1,"sagar",45);
console.log(a.StudentList);
a.addStudent(2,"Stro",4);
console.log(a.StudentList);
a.addStudent(3,"Theseus",35);
console.log(a.StudentList);
a.removeStudent(3);
console.log(a.StudentList);