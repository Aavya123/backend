const http=require("http");
function handler(req,res){
    if(req.url==="/"){
        res.end("home page");
    }
    else if (req.url==="/about"){
         res.end("about page");
    }
    else if(req.url==="/contact"){
         res.end("contact page");
    }
    else if(req.url==="/services"){
        res.end("detail page");
    }
    else{
        res.end("404 error page not found");
    }
}
const server=http.createServer(handler);
server.listen(8000,()=>{
    console.log("server is running at address https://localhost:8000");
});



