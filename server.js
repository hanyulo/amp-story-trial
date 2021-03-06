const express = require('express');
const app = express();
const port = 8080;
const path = require('path');

app.use(express.static(path.resolve(__dirname, './public')));

app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, './public/pets.html'));
})

app.get('/complete', (req, res) => {
  res.sendFile(path.resolve(__dirname, './public/pets-completed.html'));
})

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))
