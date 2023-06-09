const dotenv = require('dotenv');

const express = require('express');
const app = express();

dotenv.config({path: './config.env'});

require('./db/conn');
const User = require('./model/userSchema');

app.use(express.json());   //to fetch data (convert into json)

//We link our router files to make our route easy
app.use(require('./router/auth'));

const PORT = process.env.port;
// const DB = "mongodb+srv://suyashgaurav72:suyash@cluster1.lyb5uyt.mongodb.net/?retryWrites=true&w=majority";


//middleware
const middleware = (req,res, next) => {
    console.log(`Hello my middleware`);
    next();
}

// app.get('/', (req, res) => {
//   res.send(`Hello world from the server app.js`);
// });

app.get('/about', middleware, (req, res) => {
  console.log(`Hello my about`);
  res.send(`Hello about world from the server`);
});

app.get('/contact', (req, res) => {
  res.send(`Hello contact world from the server`);
});

app.get('/signin', (req, res) => {
  res.send(`Hello signin world from the server`);
});

app.get('/signup', (req, res) => {
  res.send(`Hello signup world from the server`);
});

app.listen(PORT, () => {
    console.log(`Server is running at port ${PORT}`);
});
