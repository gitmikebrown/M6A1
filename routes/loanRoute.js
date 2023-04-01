
const express = require('express');
const router = express.Router();
const loanController = require('../controller/loanController');


router.route('/')
    .get(loanController.getData)
    .post(loanController.postData)

router.route('/:id')
    .get(loanController.getDataByID)
    .patch(loanController.updateDataByID)
    .put(loanController.updateDataByID)
    .delete(loanController.deleteDataByID);
module.exports = router; 