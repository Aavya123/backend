// const http=require("http");
//tp=require("http");

//const server=http.createServer((req,res)=> {
  //  res.writeHead(200,{"content-type":"text/html"});
    // res.end("<h1> This is a heading </h1>");
    //res.write("<h1> this is a heading tag </h1>");
    //res.write("<p> this is a paragraph tag</p>"); function handler(req,res){
//     if(req.url==="/"){
//         res.end("home page");
//     }
//     else if (req.url==="/about"){
//          res.end("about page");
//     }
//     else if(req.url==="/contact"){
//          res.end("contact page");
//     }
//     else if(req.url==="/services"){
//         res.end("detail page");
//     }
//     else{
//         res.end("404 error page not found");
//     }
// }

// const server=http.createServer(handler);
// server.listen(8000,()=>{
//     console.log("server is running at address https://localhost:8000");
// });


// const http=require("http");

// const server=http.createServer((req,res)=>{
//     res.writeHead(200,{"content-type":"text/html"});
//    // res.end("<h1>This is a heading</h1>");
//    res.write("<h1>this is a heading tag</h1>");
//    res.write("<p>this is a paragraph tag</p>");
//    res.end();
// })
// server.listen(8001,()=>{
//     console.log("sever is running at address http://localhost:8001");
// })

//const ht
  //  res.end(`<!DOCTYPE html>
//<html lang="en">
//<head>
  //  <meta charset="UTF-8">
    //<meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Document</title>
// </head>
// <body>
//     <table border="1">
//         <tr>
//             <th>Name</th>
//             <th>Age</th>
//         </tr>
//         <tr>
//             <th>Aavya</th>
//             <th>19</th>
//         </tr>
//     </table>
// </body>
// </html>`)

// })


const express=require("express");
const app=express();
app.get("/",(req,res)=>{
    res.send("This is home page");
})
app.get("/search",(req,res)=>{
    console.log(req.query);
    res.send("my name is "+req.query.name+" and my age is "+req.query.branch);
})
app.listen(3000,()=>{
    console.log(`server is running at address http://localhost:3000`);

});
