const express = require('express');

const app = express();

app.get('/', (req,res)=>{
    res.status(200).json({msg: "Hello"});
});

app.listen(8090, ()=>{
    console.log('Server up on PORT 8090');
});