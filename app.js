const express=require('express');
const app=express();
app.use(express.json());

const customMiddleware = (req, res, next) => {
    console.log("Custom Middleware Executed");

    if (req.path === "/skip") {
        req.skipAnother = true; // flag to skip
    }

    next();
};
const anotherMiddleware=(req,res,next)=>{
    console.log("Another Middleware Executed");
    next();
}
const thirdMiddleware = (req, res, next) => {
    console.log("Third Middleware Executed");
    next();
};
const m1=(req,res,next)=>{
    console.log("~ m1");
}
const m2=(req,res,next)=>{
    console.log("~ m2");
}
app.use(customMiddleware);
app.use(anotherMiddleware);
app.use(thirdMiddleware);
app.get("/multimiddleware",[m1,m2],(req,res,next0=>{
    res.send("sample Multi Middleware");
}))
app.get("/test",(req,res,next)=>{
    if(req.query.roll=== "admin"){
        return next("route");
    }
    res.send("user-hi user");//Express closes the connection after sending response, so next() will not work here
})
app.get("/test",(req,res)=>{
    res.send("user-hi admin");
})
const userRoutes=require("./src/userRoutes");
app.use("/",userRoutes);
module.exports=app;