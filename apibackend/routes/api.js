const express = require('express');
const router = express.Router();
const Admin = require('../controller/AdminController');

router.get('/', function (req, res, next) {
    res.json({ 'message': "API" });
});
router.post('/directNotification', Admin.directNotification);

module.exports = router;
