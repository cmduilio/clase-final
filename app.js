const express = require('express');
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
const { Repository } = require('./src/db/models');
const Sequelize = require('sequelize');
const {gte, lte, opIn} = Sequelize.Op;

app.get('/', async function (req, res) {

    let data = {hello: "world"}

    res.status(200).json(data);
});

app.listen(8001);