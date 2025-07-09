// Define a class named Student with the following attributes: a. name, studentId, grade, address. b. Include a method displayInfo() that prints all the student’s details.


class Student {
    name: String 
    studentId:number
    grade: String
    address: String


    constructor(name: String, id: number, grade: String, addr:String) {
        this.name=name
        this.studentId=id
        this.grade=grade
        this.address=addr
    }
    displayinfo(){
         console.log("ID: "+this.studentId+", Name: "+this.name+", Grade: "+this.grade+", Address: "+this.address);
    }
}


const st= new Student("Sagar",5,'A',"Mumbai");
st.displayinfo();



