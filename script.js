// Callbacks

function sen ( name,callback){
    console.log(`hai, ${name}`);
    callback();
}
function workfast(){
    console.log("work fast");
}

sen ("sowmi", workfast);

// output
// hai, sowmi
// work fast

// 1. Synchronous  Callbacks
// 2. Asynchronous callbacks

// 1.Synchronous Callbacks

function Synchronous (c){
    console.log("hello sowmiya");
  c();
  console.log("see you!!");
}
Synchronous (() =>{
    console.log("How was your day");
}); 

// output
// hello sowmiya
// How was your day
// see you!!

// 2.Asynchronous Callbacks
function Asynchronous (callback){
    console.log("hello sowmiya");
  setTimeout(callback,2000);
  console.log("see you!!");
}
Asynchronous (() =>{
    console.log("How was your day");
});

// output
// hello sowmiya   
// see you!!       
// How was your day

