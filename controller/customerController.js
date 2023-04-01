const Customer = require('../models/customerModels.js');

exports.getData = async (req, res) => {
    const customers = await Customer.find()
    res.status(200).json({
        status: 'success',
        results: customers.length,
        data: {
            customers
        }
    });
}

exports.getDataByID = async (req, res) => {
    const {id} = req.params;
    const customers = await Customer.find({_id: id})
    res.status(200).json({
        status: 'success',
        results: customers.length,
        data: {
            customers
        }
    });
}

exports.postData = async (req, res) => {
    const newCustomer = req.body;
    const customer = await Customer.create(newCustomer)

    res. status(201). json({
        status: 'success',
        data: customer
    });
}

exports.updateDataByID = async (req, res) => {
    const {id} = req.params;
    const updateCustomer = req.body;
    const customers = await Customer.updateOne({_id:id},updateCustomer)
    res.send(`Hello,  Customer ${id} was updated.`)
    ;}

exports.patchDataByID = async (req, res) => {
    const {id} = req.params;
    const updateCustomer = req.body;
    const customers = await Customer.updateOne({_id:id},updateCustomer)
    res.send(`Hello,  Customer ${id} was updated.`)
    ;}


exports.deleteDataByID = async (req, res) => {
    const {id} = req.params;
    const customers = await Customer.deleteOne({_id: id})
    res.send(`Hello,  Customer ${id} was deleted.`)
    ;}