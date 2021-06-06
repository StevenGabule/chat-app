const config = require('./config/app');
const express = require('express');
const app =express();
const cors = require('cors')

app.use(express.urlencoded({ extended: true}))
app.use(express.json())
app.use(cors());

const homeRouter = require('./router/index');
app.use(homeRouter);

app.use(express.static(__dirname + '/public'))
app.use(express.static(__dirname + '/uploads'))

const port = config.appPort;

app.listen(port, ()  => console.log(`Server is listening on port: ${port}`))

