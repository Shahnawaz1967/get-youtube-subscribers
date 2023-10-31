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

// GET API for getting subscribers by name and Subscribed Channel
app.get('/subscribers/names', async (req, res) => {
    try {
        let subscriberByName = await Subscribers.find().select('name subscribedChannel');
        res.status(200).send(subscriberByName);
    } catch (error) {
        res.status(400);
    }
});


// GET API for getting subscriber by ID
app.get('/subscribers/:id', async (req, res) => {
    try {
        let subscriberByID = await Subscribers.findById(req.params.id);
        res.status(200).send(subscriberByID);
    } catch (error) {
        res.status(400).send({
            message: error.message,
        });
    }
});


module.exports = app;
