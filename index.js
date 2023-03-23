// console.log("Working");
// const a = 400 ;

// module.exports = a ;
const fs = require ("fs");

fs.readFile("./nodejs.txt", "utf8", (err,data) =>{
if(err){
    throw err;
}
    console.log(data);

});
