require('dotenv').config();

const express = require('express');
const app = express();
const PORT:string = process.env.PORT || '5000'; 


app.use(express.json({limit: '100mb'}));

app.get('/', (req, res)=>res.status(400).json({status: 'error', message: 'invaild-route'}));
app.post('/', (req, res)=>res.status(400).json({status: 'error', message: 'invaild-route'}));

app.listen(PORT, ()=>{console.log(`Listening on port: ${PORT}...`);});