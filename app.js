const express = require('express');
const mongoose = require('mongoose');
const bookRoutes = require('./routes/bookRoutes');

// express app
const app = express();
app.listen(3001);

app.get('/', (req, res) => {
	res.send('hello')
})