//********************************************************************* */
//Path module - for working with file and directory paths
//********************************************************************* */

    const path = require('path');

//********************************************************************* */
//Set environment variables
//********************************************************************* */

    const dotenv = require('dotenv'); 
    dotenv.config({path: './config.env'});

//********************************************************************* */
//Express>>app
//********************************************************************* */
    const express = require('express');
    const app = express();

        //********************************************************************* */
        //Parser
        //********************************************************************* */

        const bodyParser = require('body-parser');
        app.use(bodyParser.json());

        //********************************************************************* */
        //Routes
        //********************************************************************* */

        //Loan
        const loanRoute = require('./routes/loanRoute');
        app.use('/loan', loanRoute);

       //404 page Error
        app.use((err, req, res, next) => {
            res.status(404).render('404', {pageTitle: 'Page Not Found'});
        });

        //********************************************************************* */
        // Start the server
        //********************************************************************* */
        const newLine002 = "\n**********************************\n";
        const port = process.env.PORT;
        app.listen(port, () => {
            console.log(`${newLine002}App running on port ${port}...`)
        });

//********************************************************************* */
//DataBase
//********************************************************************* */

    const newLine001 = "\n**********************************\n";
    const mongoose = require('mongoose');
    const MONGO_DATA_BASE = process.env.DATABASE.replace('<password>', process.env.DB_PASSWORD);
    mongoose.connect(MONGO_DATA_BASE, {useNewUrlParser: true})
        .then(() => console.log(`DB connection successfull${newLine001}`))
        .catch((err) => console.error(err));


//********************************************************************* */
//debugging and logging
//********************************************************************* */

    //create a write stream (in append mode)
    var rfs = require('rotating-file-stream'); // version 2.x

    //serve static files
    //create a rotating write stream
    const accessLogStream = rfs.createStream('access.log', {
        interval: '1d', //rotate daily
        path: path.join(__dirname, 'log'), //log directory will log all data here
    })

    const morgan = require('morgan-body');
    //setup the logger
    morgan(app, {
        stream: accessLogStream,
        noColors: true,
        logReqUserAgent: true,
        logRequestBody: true,
        logResponseBody: true,
        logReqCookies: true,
        logReqSignedCookies: true
    });
