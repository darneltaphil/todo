const express = require ('express')
const app = express();
const path = require('path')
require('dotenv').config();
const port = process.env.PORT || 4000
const bodyParser = require('body-parser');
const cors = require ('cors');

app.use(bodyParser.json()); 
app.use(cors()); 

app.use(express.static(path.join(__dirname,'build')));

app.get("/", (req,res)=>{
    res.sendFile(path.join(__dirname,'build', 'index.html'))
})

//Redirecting any other URL to root 
app.get('*', (req, res) => {
    res.redirect('/')
})

app.listen(port);