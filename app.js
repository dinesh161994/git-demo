const express = require('express');

const app = express();

app.get('/', (req,res)=>{
    res.status(200).json({msg: "Hello"});
});
app.get('/:id', (req, res)=>{
    res.status(200).json({id: req.params.id});
});
console.log('Executes script');
console.log('Some remote change');
console.log('parallel change from local');
app.listen(8090, ()=>{
    console.log('Server up on PORT 8090');
});
