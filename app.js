const express=require('express');
const app=express();
app.use(express.json());

const customMiddleware=(req,res,next)=>{
    console.log("Custom Middleware Executed");
    next();
}
const anotherMiddleware=(req,res,next)=>{
    console.log("Another Middleware Executed");
    next();
}
app.use(customMiddleware);
app.use(anotherMiddleware);

const userRoutes=require("./src/userRoutes");
app.use("/",userRoutes);
module.exports=app;