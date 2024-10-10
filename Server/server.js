const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
// const dotenv = require('dotenv');

// dotenv.config();

const app = express();
const PORT=3030;

app.use(cors());
app.use(bodyParser.json());

// MongoDB connection
mongoose.connect("mongodb+srv://23010101220:Yasha0942@cluster0.hd7zg.mongodb.net/")
    .then(() => console.log("MongoDB connected"))
    .catch(err => console.log(err));

// Routes
// app.use(require('./routes/expense'));

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
