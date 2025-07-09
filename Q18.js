    // Write a Function to Filter Employees Earning More Than a Certain Amount from an Array of Employee Objects.


const Employees = [{
    empid:1,
    name:"Sagar",
    salary:56000
},
{
    empid:2,
    name:"Stro",
    salary:6000
},
{
    empid:1,
    name:"Sri",
    salary:50000
}
]


function FilterEmployees(emps){
    return emps.filter((emp)=>{
        return emp.salary>=50000
    })
}

console.log(FilterEmployees(Employees));