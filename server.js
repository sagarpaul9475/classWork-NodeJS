const http=require('http');
const fs=require('fs');
const os=require('os');

const server=http.createServer((req,res)=>{
    fs.writeFile("logs.txt",req.url,(err)=>{
        if(err){
            console.log("Error writing to file");
        }
    });
    if(req.url==='/'){
        res.write("Hello World");
        res.end();
    }
    else if(req.url === '/logs'){
        fs.readFile("logs.txt",(err,data)=>{
            if(err){
                res.write("Error reading file");
                res.end();
            }
            else{
                res.write(data);
                res.end();
            }
        });
    }
    else if(req.url==='/about'){
        res.write("About Page");
        res.end();
    }
    else if(req.url === '/systemConfig'){
        const freeMemmory=`Free Ram:${os.freemem()/ 1024 / 1024 / 1024}`;
        res.write(freeMemmory);
        res.end();
    }
    else{
        res.write("Page Not Found");
        res.end();
    }
});

server.listen(3000,()=>{
    console.log("Server is running on port 3000");
})