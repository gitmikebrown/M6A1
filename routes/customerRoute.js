
const express = require('express');
const router = express.Router();
const customerController = require('../controller/customerController');


router.route('/')
    .get(customerController.getData)
    .post(customerController.postData)

router.route('/:id')
    .get(customerController.getDataByID)
    .patch(customerController.patchDataByID)
    .put(customerController.updateDataByID)
    .delete(customerController.deleteDataByID);
module.exports = router; 