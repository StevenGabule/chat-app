const config = require('./config/app');
const express = require('express');
const app =express();
const cors = require('cors')

app.use(cors());
app.use(express.urlencoded({ extended: true}))
app.use(express.json())

const homeRouter = require('./router/index');
app.use(homeRouter);

const port = config.appPort;

app.listen(port, ()  => console.log(`Server is listening on port: ${port}`))

