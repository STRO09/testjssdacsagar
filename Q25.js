const mysql = require("mysql");

const db = mysql.createConnection({
    host: "localhost", 
    database: "testdemo", 
    user: "root", 
    password:"tfws.wow///POP()"
})

db.connect((err)=> {
    if(err) console.log(err);
    console.log("Database Connected successfully");
})

db.query("SELECT * FROM emp",(err, data)=>{
    if(err) throw err;
    console.log("Below is your table: ");
    console.log(data);
})

db.query("INSERT INTO emp(name,salary) value(?,?)",["Sagar",50000],(err, data)=>{
    if(err) throw err;
    console.log("Data inserted successfully");
})

db.query("SELECT * FROM emp",(err, data)=>{
    if(err) throw err;
    console.log("Below is your table: ");
    console.log(data);
})
db.query("UPDATE EMP SET name=? where id=?",["Stro",1],(err, data)=>{
    if(err) throw err;
    console.log("Data updated successfully");
})

db.query("SELECT * FROM emp",(err, data)=>{
    if(err) throw err;
    console.log("Below is your table: ");
    console.log(data);
})

db.query("INSERT INTO emp(name,salary) value(?,?)",["Sagar",50000],(err, data)=>{
    if(err) throw err;
    console.log("Data inserted successfully");
})

db.query("SELECT * FROM emp",(err, data)=>{
    if(err) throw err;
    console.log("Below is your table: ");
    console.log(data);
})

db.query("DELETE FROM emp where id=?",[2],(err, data)=>{
    if(err) throw err;
    console.log("Data deleted successfully");
})

db.query("SELECT * FROM emp",(err, data)=>{
    if(err) throw err;
    console.log("Below is your table: ");
    console.log(data);
})

