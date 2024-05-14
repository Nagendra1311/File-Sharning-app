const express = require('express');
const router = require('./routes/route')
const cors = require('cors');
const dbConnection = require('./database/database');

// app
const app = express();
app.use(cors())

app.use('/', router)


const PORT = 8000;
dbConnection()

//server listening
app.listen(PORT, () => {
    console.log(`server is listening on port no ${PORT}`);
})