
var http = require('http');

var express = require('express');

const mongo = require('mongoose');
const blogModel = require('./blog');

var name = (cool) =>
{
    console.log(cool);
    return cool;
}

let val = name("hello");

// setTimeout(()=>{
//     console.log('In the timeout');
// }, 3000);

// const v = setInterval(()=>
// {
//     console.log("in the interval");
// }, 1500);

// const server = http.createServer((req , res) =>
// {
//     console.log("BACKEND IS WORKING, hello ");

//     res.setHeader('Content-Type','text/plain');
//     res.write('Cool');
//     res.end();

// });

const app = express(); 

const dbURL = "mongodb+srv://test-user-sagnik:12345@cluster0.2j5oc.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"

mongo.connect(dbURL,{ useNewUrlParser : true , useUnifiedTopology : true })
    .then((result) => console.log(" CONNECTED TO DATABASE ") )
    .catch( (err) => console.log(err) );

app.get('/about',(req,res) => {

    // res.sendFile('/pages/backendPage.html',{ root : __dirname });

    const blog = new blogModel(
        {
            title : 'IEMA R&D',
            description : 'An Incredible Private Corporation'
        }
    )

    blog.save().then(
        (result) => {
            res.send(result)
        }
    ).catch(
        (Err) => {
            console.log(Err);
        }
    );

})
app.listen(3000);

// server.listen(3000,'localhost',() => {
//     console.log("listening to server at 3000");
// });

