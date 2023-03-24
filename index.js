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

const fs = require("fs");


// Creating a Server 
const http = require("http");


const PORT = 2000;
const hostname = "localhost";
const home =  fs.readFileSync("./index.html","utf-8")

const server =  http.createServer((req,res)=>{
    if(req.url === "/"){
        res.end(home)
    }

    else if(req.url === "/about"){
        res.end("<h1>About Page</h1>")
    }

    else if(req.url === "/contact"){
        res.end("<h1>Contact Page</h1>")
    }

    else{
        res.end("<h1>404 Page</h1>")
    }

});

server.listen(PORT,hostname, ()=>{
    console.log(`Server is working on ${hostname}:${PORT}`)
});