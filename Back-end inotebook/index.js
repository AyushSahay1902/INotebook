const connectToMongo = require('./db');


const express = require('express');
const router = require('./routes/notes');
const app = express()
const port = 5000
app.use(express.json());
//Available Routes
router.use('/api/auth', require('./routes/auth'));
router.use('/api/notes', require('./routes/notes'));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

connectToMongo();

