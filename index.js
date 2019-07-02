const express = require('express');
const path = require('path');
const PORT = process.env.PORT || 5000;
const router = express.Router();

const app = express();

router.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.use('/', router);
app.listen(PORT);

// get and listen
// app.get('/', (req, res) => res.send('Hello world'));
// app.listen(PORT, () => console.log('example boi'));
