const Loan = require('../models/loanModels.js');

exports.getData = async (req, res) => {
    const loans = await Loan.find()
    res.status(200).json({
        status: 'success',
        results: loans.length,
        data: {
            loans
        }
    });
}

exports.getDataByID = async (req, res) => {
    const {id} = req.params;
    const loans = await Loan.find({_id: id})
    res.status(200).json({
        status: 'success',
        results: loans.length,
        data: {
            loans
        }
    });
}

exports.postData = async (req, res) => {
    const newLoan = req.body;
    const loan = await Loan.create(newLoan)

    res. status(201). json({
        status: 'success',
        data: loan
    });
}

exports.updateDataByID = async (req, res) => {
    const {id} = req.params;
    const updateLoan = req.body;
    const loans = await Loan.updateOne({_id:id},updateLoan)
    res.send(`Hello,  Loan ${id} was updated.`)
    ;}

exports.patchDataByID = async (req, res) => {
    const {id} = req.params;
    const updateLoan = req.body;
    const loans = await Loan.updateOne({_id:id},updateLoan)
    res.send(`Hello,  Loan ${id} was updated.`)
    ;}

exports.deleteDataByID = async (req, res) => {
    const {id} = req.params;
    const loans = await Loan.deleteOne({_id: id})
    res.send(`Hello,  Loan ${id} was deleted.`)

}