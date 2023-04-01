const Ledger = require('../models/ledgerModels.js');

exports.getData = async (req, res) => {
    const ledgers = await Ledger.find()
    res.status(200).json({
        status: 'success',
        results: ledgers.length,
        data: {
            ledgers
        }
    });
}

exports.getDataByID = async (req, res) => {
    const {id} = req.params;
    const ledgers = await Ledger.find({_id: id})
    res.status(200).json({
        status: 'success',
        results: ledgers.length,
        data: {
            ledgers
        }
    });
}

exports.postData = async (req, res) => {
    const newLedger = req.body;
    const ledger = await Ledger.create(newLedger)

    res. status(201). json({
        status: 'success',
        data: ledger
    });
}

exports.updateDataByID = async (req, res) => {
    const {id} = req.params;
    const updateLedger = req.body;
    const ledgers = await Ledger.updateOne({_id:id},updateLedger)
    res.send(`Hello,  Ledger ${id} was updated.`)
    ;}

exports.patchDataByID = async (req, res) => {
    const {id} = req.params;
    const updateLedger = req.body;
    const ledgers = await Ledger.updateOne({_id:id},updateLedger)
    res.send(`Hello,  Ledger ${id} was updated.`)
    ;}


exports.deleteDataByID = async (req, res) => {
    const {id} = req.params;
    const ledgers = await Ledger.deleteOne({_id: id})
    res.send(`Hello,  Ledger ${id} was deleted.`)
}