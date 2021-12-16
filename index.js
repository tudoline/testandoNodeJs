const express = require("express");
const app = express()

app.get("/", (req, res)=>{
    res.send("funcionol")
});

app.listen(80, ()=>{})