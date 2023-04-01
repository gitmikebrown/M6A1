
const express = require('express');
const router = express.Router();
const ledgerController = require('../controller/ledgerController');


router.route('/')
    .get(ledgerController.getData)
    .post(ledgerController.postData)

router.route('/:id')
    .get(ledgerController.getDataByID)
    .patch(ledgerController.patchDataByID)
    .put(ledgerController.updateDataByID)
    .delete(ledgerController.deleteDataByID);
module.exports = router; 