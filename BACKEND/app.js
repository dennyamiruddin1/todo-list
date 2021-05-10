const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors')

require('dotenv/config');

//GENERAL MIDDLEWARE
app.use(cors());
app.use(bodyParser.json());

//IMPORT ROUTES
const todoRoute = require('./routes/todo');
const postsRoute = require('./routes/posts');

// ROUTES MIDDLEWARES
app.use('/todo', todoRoute);
app.use('/posts', postsRoute)

// ROUTES
// app.get('/', (req, res) => {
//   res.send('We are on home');
// });

//CONNECT TO DB 
mongoose.connect(
  process.env.DB_CONNECTION,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => console.log('connected to DB!')
);

//LISTENING TO THE SERVER
app.listen(5000);
