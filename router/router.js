const control = require("./controller.js");
const express = require('express');
const bodyparsr = require('body-parser');
const { userInfo } = require('os');
const app = express();
app.use(bodyparsr.urlencoded({extended: false}));
app.use(bodyparsr.json());

let activeVisitors = new Map();

app.get('/api/activeVisitors/sum', function (req,res){
    var getActiveVistorSum = control.getSum(activeVisitors);   
    res.send("Send Response " + getActiveVistorSum);
});

app.post('/api/activeVisitors', function(req,res) {
    var userValues = req.body.value;
    control.postActiveVisitorValue(activeVisitors, userValues);
    res.send("Sent respond " + userValues);    
});

var server = app.listen(3000, function () {
    var host = server.address().address
    var port = server.address().port
    console.log("Example app listening at https://%s:%s", host, port)
 })
