const express = require('express');
const app = express();
const port = 3000;

//Parser
const bodyParser = require('body-parser');
app.use(bodyParser.json());

//routes
const loanRoute = require('./routes/loanRoute');
app.use('/loan', loanRoute);

const customerRoute = require('./routes/customerRoute');
app.use('/customer', customerRoute);

const ledgerRoute = require('./routes/ledgerRoute');
app.use('/ledger', ledgerRoute);


app.listen(port, () => console.log(`Example app listening on port ${port}!`));






//Connect to DB
const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://mikejbrown:ssOX5PclZpKgf2VE@cluster0.dk5ltnv.mongodb.net/LOANS', {useNewUrlParser: true})
    .then(() => console.log('connection successfull\n**********************************'))
    .catch((error) => console.error(err));