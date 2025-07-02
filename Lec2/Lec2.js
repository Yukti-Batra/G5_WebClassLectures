//HOF
function calculate(param1){
    console.log("calculate ");
    param1();
}
var sum =()=>{
    console.log("sum working");
}
calculate(sum);

// Main higher order function
function calculatefunc(logic, a, b){
    return logic(a,b);
}
// logical functions
function add(a,b){
    return a+b;
}
function sub(a,b){
    return a-b;
}
console.log(calculatefunc(add,3,5));

// Do yourself -- HOF
function StudentFullDetail(param1,param2,param3, name, fees){
    param1(name, fees);
    param2(fees);
    param3(name,fees);
}
function studentdetails(name,fees){
    console.log(`name of student id ${name}, fees is ${fees}`);
}
function emi(fees){
    fees= fees/10;
    console.log("Emi of fees is ",fees);
}
function welcome(name,fees){
    console.log(`The student ${name} is entered with fees ${fees}`);
}
StudentFullDetail(studentdetails,emi,welcome,"yukti",10000);

// Works after time for once
setTimeout(() => {
    console.log("hiii");
}, 3000);
// Works after every ms time interval
setInterval(()=>{
    console.log("hello");
},2000)