const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
const routers = require("./routes/users.routes");
const { json } = require("body-parser");

app.use("/users", routers);

// home route
app.get("/", (req,res)=>{
    res.sendFile(__dirname + "/views/index.html");
});
app.post("/", (req,res)=>{
    res.send("hi");
});

// route not found error
app.use((req,res,next)=>{
    res.status(404);
    res.send(`<h1>404! web page not avilable</h1>`);
    res.end();
});
// server error
app.use((err,req,res,next)=>{
    res.status(500);
    res.send(`<h1>something broke</h1>`);
    res.end();
});

module.exports = app;
