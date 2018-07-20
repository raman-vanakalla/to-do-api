console.log('in index.js');
const express=require('express');
const bodyParser=require('body-parser');

const app=express();


// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
 
// parse application/json
app.use(bodyParser.json());

const port=process.env.PORT||'8080';
app.listen(port);

app.use('/api',require('./router.js'));