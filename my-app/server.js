const express = require('express');
const app = express();
require('dotenv').config();

const PORT = process.env.NODE_DOCKER_PORT || 8080;

app.listen(PORT,() =>{
    console.log(`Server is running on port ${PORT}.`);
});