const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const db = require('./db/db');
// const user = require('./db/db');
// const mongoose = require('./db/db');
let userController = require('./controller/users.controller');
let app = express();
// const path = require('path');

app.use(bodyParser.json());

app.use(cors({origin:true}));
// app.use(express.static(path.join(__dirname, 'dist')));
// let port = 3000;
let port = process.env.PORT || 3000;

app.get('/', (req,res) => {
    res.status(200).send(`<h2>Welcome to server</h2>`);
})
app.listen(port, () => {
    console.log(`Server listen at port no : ${port}`);
});

app.use('/user', userController);
