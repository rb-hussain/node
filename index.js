// console.log("Working");
// const a = 400 ;

// module.exports = a ;
// const fs = require ("fs");

// fs.readFile("./nodejs.txt", "utf8", (err,data) =>{
// if(err){
//     throw err;
// }
//     console.log(data);

// });

// const b = "This is demo text";

// fs.writeFile("./demo.txt", b ,()=>{
//     console.log("Written")
// });
// console.log("I'm first");
// console.log("Checking Nodemon");

// Creating a Server 
const http = require("http");

const PORT = 2000;
const hostname = "localhost";
const server =  http.createServer((req,res)=>{
    res.end("working")
});

server.listen(PORT,hostname, ()=>{
    console.log(`Server is working on ${hostname}:${PORT}`)
});