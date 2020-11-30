const express = require('express');
const router = express.Router();
const controller = require('../controllers/about')

router.get(controller.get);

router.get(controller.index);

router.post(controller.create);

router.put(controller.update);

router.delete(controller.destroy);

module.exports = router;