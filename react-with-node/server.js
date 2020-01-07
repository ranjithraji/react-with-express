const express = require('express');

const app = express();
const mongoose = require('mongoose')

DATABASE_URL="mongodb://localhost:27017/img";

mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true })
const db = mongoose.connection
db.on('error', (error) => console.error(error))
db.once('open', () => console.log('connected to database'))

app.get('/api/customers', (req, res) => {
  const imgs = [
    {id:0, src:"https://bit.ly/2ZIaoAO"},
    {id:1,  src: "https://bit.ly/2SIxwh9"},
    {id:2,  src: "https://bit.ly/2ZHhVA5"},
    {id:3,  src: "https://bit.ly/36iduyb"},
    {id:4,  src: "https://bit.ly/35hGKno"}
  ];

  res.json(imgs);
});

const port = 5000;

app.listen(port, () => `Server running on port ${port}`);