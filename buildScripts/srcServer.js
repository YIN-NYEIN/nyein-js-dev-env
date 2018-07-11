
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

app.listen(port,function(err){
    if(err){
        console.log(err);
    }else{
        open('http://localhost:'+ port);
    }
});//listen to the port redefined above
