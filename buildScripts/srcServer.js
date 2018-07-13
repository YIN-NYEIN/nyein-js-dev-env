
const express = require ('express');

const path = require ('path');

const open = require ('open');
const webpack = require ('webpack');
//const config = require ('config');
const config = require('../src/webpack.config.dev.js');
const port = 3000;


const app = express();//create an instance
const compiler =webpack (config);

app.use(require('webpack-dev-middleware')(compiler, {
  cache: true ,
  publicPath: config.output.publicPath
}));


app.get('/', function(req, res){
res.sendFile(path.join(__dirname, '../src/index.html'));
});//tell Express which routes it should handle

app.get('/users', function(req, res) {
  // Hard coding for simplicity. Pretend this hits a real database
  res.json([
    {"id": 1,"firstName":"Bob","lastName":"Smith","email":"bob@gmail.com"},
    {"id": 2,"firstName":"Tammy","lastName":"Norton","email":"tnorton@yahoo.com"},
    {"id": 3,"firstName":"Tina","lastName":"Lee","email":"lee.tina@hotmail.com"}
  ]);
});

app.listen(port,function(err){
    if(err){
        console.log(err);
    }else{
        open('http://localhost:'+ port);
    }
});//listen to the port redefined above
