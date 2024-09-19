const express = require("express");
const app = express();

app.set("view engine", "pug");
app.get("/blog",(req,res)=>{
    res.render("blog")
});
app.get("/",(req,res)=>{
    res.render("index",{
        title:"Main",
        message:"Not Main"
    })
})
app.get("/faq",(req,res)=>{
    res.render("faq", {
        title:"Обо мне",
    });
});    
app.post("/8", (req,res)=>{
    res.send("852");
});

const server = require("http").createServer(app)

server.listen(3000, "", ()=>{})
