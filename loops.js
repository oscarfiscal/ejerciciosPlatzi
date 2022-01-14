//example 1/////////////////
var students =["oscar","juan","maria","jose"];
 function greet(students){
     console.log('hola ' + students);
 }
 for (var i =0;i <students.length; i++) {
        greet(students[i]);
 }
//example 2/////////////////
var students =["oscar","juan","maria","jose"];
 function greet(students){
     console.log('hola ' + students);
 }
 for (var student of students) {
        greet(student);
 } 
//////example 3 while/////////////////
var students =["oscar","juan","maria","jose"];
 function greet(students){
     console.log('hola ' + students);
 }
 while (students.length > 0){
     var student = students.shift();
        greet(student); 
 }
       
 
