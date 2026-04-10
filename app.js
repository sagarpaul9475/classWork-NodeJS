const express=require('express');
const app=express();
const jwt=require("jsonwebtoken");
app.use(express.json());
app.set("view engine","ejs");
const verifyToken=require("./src/authController").verifyToken
const content={
    head:"header",
    foot:"footer",
    bo:"body"
}
const homePageContent={productName:"Gla university",
        students:[
            {name:"sagar",department:"CSE"},
            {name:"vivek",department:"CSE"},
            {name:"kaushik",department:"CSE"}
        ],
        head:content.head,
        foot:content.foot,
        bo:content.bo
}
app.get("/ejs",(req,res)=>{
    res.render("home",homePageContent);
})
app.get("/ejsHeader",(req,res)=>{
    res.render("header",{head:content.head})
})
app.get("/ejsFooter",(req,res)=>{
    res.render("footer",{foot:content.foot})
})
app.get("/ejsBody",(req,res)=>{
    res.render("body",{bo:content.bo})
})
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
app.use("/urls",require("./src/urlRoutes"));
app.use("/auth",require("./src/authRoutes"));
const userRoutes=require("./src/userRoutes");// shortUrlRoutes
app.use("/",userRoutes);
//app.use(verifyToken);
// app.get("/multimiddleware",[m1,m2],(req,res,next)=>{
//     res.send("sample Multi Middleware");
//     next();
// }))
app.get("/profile", verifyToken, (req, res) => {
    res.json({
        message: "Welcome to profiler",
        user: req.user
    });
});
app.get("/test",(req,res,next)=>{
    if(req.query.roll=== "admin"){
        return next("route");
    }
    res.send("user-hi user");//Express closes the connection after sending response, so next() will not work here
})
app.get("/test",(req,res)=>{
    res.send("user-hi admin");
})


//const students = require('./src/studentModules');
module.exports=app;