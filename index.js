const express = require('express');
const path = require('path');
const PORT = process.env.PORT || 5000;

const app = express();

// get and listen
app.get('/', (req, res) => res.send('Hello world'));
app.listen(PORT, () => console.log('example boi'));
