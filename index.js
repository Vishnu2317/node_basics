// const os = require("os")
// console.log(os.hostname());
// console.log(os.platform());
// console.log(os);

// const file = require("fs")
// console.log(file);
// file.readFile("class.txt",(err,data)=>{
//     if(err){
//         console.log(err);
//     }
//     console.log(data.toString());
// })

const file = require("fs")
const http = require('http')
const dotenv = require('dotenv').config()
const customModule = require("./index2")

// let customModule = {
//     fullName : "abc",
//     age : 22
// }

// dotenv.config()
const server = http.createServer((req,res)=>{
    // file.writeFileSync("data.txt",`[{"name":"abc",age:43},{"name":"def",age:45}]`)
    const data = file.readFileSync("data.txt")

    // const mydate =  new Date()
    // console.log(mydate);
    // file.appendFileSync("date.txt",`<h1>Today Date is ${customModule.date}</h1>`)
    // const data = file.readFileSync("date.txt")
    // res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.write(data)
    res.end()
})
const port = process.env.PORT
server.listen(port,()=>{
    console.log(`Server is running in : http://localhost:${port}`);
})

