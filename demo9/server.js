var express = require('express');
var app = express();

var _data = {
    "id":"1",
    "name":"zysoft",
    "sex":"男",
    "age":"23"
}

app.get('/introduce',function(req,res){
    res.send(_data);
})

app.listen(8888,function(){
    console.log('listening on *:8888');
});
