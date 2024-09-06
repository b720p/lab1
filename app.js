const express = require("express");
const app = express();

app.set("view engine", "pug");
app.get("/faq", (req,res) => {
    res.render("faq", {
        title: "Обо мне"
    });

});
app.post("/8", (req,res)=>{
    res.send("852");
});

const server = require("http").createServer(app)

server.listen(3000, "192.168.70.23", ()=>{})
