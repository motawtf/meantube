const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const keys = require('./config/keys');

const usersRouter = require('./routes/users');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

mongoose.connect(keys.dbURL, {useNewUrlParser: true}).then(() => {
    console.log('MongoDB connected!');
}).catch(err => {
    console.log('An error ocurred while trying to connect with the db' + err);
});

app.use('/users', usersRouter);

const port = 3000 || process.env.PORT;

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});