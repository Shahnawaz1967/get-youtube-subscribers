//import required module
const express = require("express");
const path = require("path")
const Subscriber = require("./models/subscribers");
//express store references to the app
const app = express();

//import models of subscriber

//parse JSON bodies that API clients send.
app.use(express.json());
// app.use(epress.urlencoded({extended:false}));

app.use(express.static(__dirname));

//we use Route
app.get("/", (req, resp) => {
  resp.sendFile(__dirname, '/index.html');
});

app.get("/subscribers", async (req, resp) => {
    try{
        let subscribers = await schema.find();
        resp.send(200).json(subscribers);
    } catch(err){
       resp.send(400);
    }

});

module.exports = app;
