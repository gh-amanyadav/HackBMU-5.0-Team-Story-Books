const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');


require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const url = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASS}@cluster0.axnkt.mongodb.net/assignment?retryWrites=true&w=majority`;
mongoose.connect(url, {useNewUrlParser: true});
const connection = mongoose.connection;
connection.once('open', () => {
    console.log('MongoDB is conected');
});

const storyRouter = require('./routes/stories');

app.use('/stories', storyRouter);

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
})
