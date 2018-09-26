var express = require('express');
var app = express();

//主页输出Hello Woeld
app.get('/',function(req,res){
  console.log('主页GET请求');
  res.send('Hello Get');
})


app.post('/',function(req,res){
  console.log('主页POST请求');
  res.send('Hello Post');
})

// /del_user页面响应
app.get('/del_user',function(req,res){
  console.log("/del_suer 响应DELETE 请求");
  res.send("删除页面")
})


app.get('/list_user',function(req,res){
  console.log("/list_user GET 请求");
  res.send("用户列表页面")
})

app.get('/ab*cd',function(req,res){
  console.log('/ab*cd GET 请求');
  res.send('正则匹配')
})

var server = app.listen(8087, function () {
 
  var host = server.address().address
  var port = server.address().port
 
  console.log("应用实例，访问地址为 http://%s:%s", host, port)
 
})

