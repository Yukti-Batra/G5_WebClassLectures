console.log("Hello");
var a= 2000;
var b= 239;
function x(){
    console.log("Hii");
}
x();
// setTimeout(()=>{
//     console.log("haha");
// },2000);
// xyz();
// var xyz=()=>{
//     console.log("xyz");
// }

// but if direct function
x();
function x(){
    console.log("heyyyy");
}
function grandparent(){
    var a= 200;
    console.log(a);
    // console.log(c);    c is not defined outside ERROR
    function parent(){
        var b = 300;
        console.log(b);
        function child(){
            var c= 400;
            var a= 9000;
            console.log(c);
            console.log(a);
        }
        child();
    }
    parent();
}
grandparent();