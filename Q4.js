// Create a class named Emp with following attribute name, id, salary & displayInfo method provide access code for the same in JS

class Emp {
    name
    id 
    salary 

    constructor(name,id,salary) {
        this.name = name;
        this.id = id;
        this.salary = salary;
    }
    displayInfo(){
        console.log("ID: "+this.id+", Name: "+this.name+", Salary: "+this.salary);
    }
}


const a = new Emp("Sagar",5,56000);
a.displayInfo();
