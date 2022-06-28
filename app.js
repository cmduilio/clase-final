const express = require('express');
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
const { Repository } = require('./src/db/models');
const Sequelize = require('sequelize');
const {gte, lte, opIn} = Sequelize.Op;

app.get('/repositories', async function (req, res) {

    let data = await Repository.findAll()

    res.status(200).json(data);
});

app.get('/repositories/:id', async function (req, res) {

    let data = await Repository.findByPk(req.params.id)
    
    if(data){
        res.status(200).json(data);
    }
    else
    {
        res.status(404).json({error: 'not found'});
    }
});

app.listen(8001);