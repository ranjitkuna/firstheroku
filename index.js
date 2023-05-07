const http = require("http");
const fs = require('fs')

const home = fs.readFileSync('./index.html',"utf-8");
const about = fs.readFileSync('./about.html',"utf-8")


const server = http.createServer((req,res)=>{
    if(req.url === "/"){
      return  res.end(home)

    }
    if(req.url === "/about"){
       return res.end(about)

    }
    if(req.url === "/contact"){
      return  res.end("<h1>contact us page</h1>")

    }
    else{
      return  res.end("<h1>404 error page came</h1>")
    }
    
})

server.listen(2000)

