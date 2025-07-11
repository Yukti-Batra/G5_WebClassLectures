// Promise is an object to complete or perform asynchronous function which represents completion or failur of function
// Status-- Pending state, rejected, fulfilled;  result
const myPromise= new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("foo");
    },1000);
})
// const myPromise= new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         reject("not get the foo");
//     },3000);
// })
console.log(myPromise);  //this gives pending full object promise
myPromise.then((res)=>console.log(res))
.catch((err)=>console.log(err));   //error handling -- prevents from server crashing just runs code and gives error
// const newPromise= new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//         resolve("Placed");
//     },5000);
// })
// newPromise.then((res)=>console.log(res))
// .then(()=>setTimeout(()=>{
//     console.log("Got placement")
// },5000))
// .then(()=>setTimeout(()=>{
//     console.log("work")
// },3000))
// .then(()=>setTimeout(()=>{
//     console.log("lay off")
// },1000))

function place(placementprocedure, delay){
    return new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("DATA"+placementprocedure);
        console.log("DATA"+placementprocedure);
    },delay);
});
}
place(" placed", 2000).then(()=>place(" party",3000)).then(()=>place(" layoff",1000))
.catch((err) => console.log(err));

const newPromise1= new Promise((resolve, reject)=>{
    setTimeout(()=>{
        reject("Placed1");
    },5000);
})
const newPromise2= new Promise((resolve, reject)=>{
    setTimeout(()=>{
        reject("Placed2");
    },5000);
})
const newPromise3= new Promise((resolve, reject)=>{
    setTimeout(()=>{
        reject("Placed3");
    },5000);
})
const newPromise4= new Promise((resolve, reject)=>{
    setTimeout(()=>{
        reject("Placed4");
    },5000);
})
// All resolve mein, All reject mein, 1 promise reject mein sbka answer
// Promise.all([newPromise1, newPromise2,newPromise3,newPromise4])
// .then((res)=>console.log(res)).catch((err)=>console.log(err));
// Promise.allSettled([newPromise1, newPromise2,newPromise3,newPromise4])
// .then((res)=>console.log(res)).catch((err)=>console.log(err));
Promise.any([newPromise1, newPromise2,newPromise3,newPromise4])
.then((res)=>console.log(res)).catch((err)=>console.log(err));
Promise.race([newPromise1, newPromise2,newPromise3,newPromise4])
.then((res)=>console.log(res)).catch((err)=>console.log(err));
