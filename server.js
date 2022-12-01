const express = require("express");
const bodyParser = require("body-parser");

const app = express(); 
app.use(bodyParser.urlencoded({extended:true}));

app.get("/",function(req,res){
    res.sendFile(__dirname + "/bmiCalculator.html");
})

app.post("/yourBMI",function(req,res){
    var weight = Number(req.body.weight);
    var height = Number(req.body.height);
    res.send("Your BMI is:"+" "+ weight/(height^2) + ".");
})
app.listen(3000,function(){
    console.log('Your server is running on port 3000!');
});