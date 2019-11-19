const express = require('express');
const bc = require('./controllers/books_controller');

const app = express();
app.use(express.json());

//endpoints
app.get('/api/books', bc.read);
app.post('/api/books', bc.create);

const port = 4020;
app.listen(port, () => console.log(`Server listening on port ${port}`));