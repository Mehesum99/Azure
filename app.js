const express = require('express');
const app = express()


app.get('/',(req,res)=> {
    res.send('Welcome Azure')
})



app.listen(8080,()=>{
    console.log('Server is listening on Port 8080')
})