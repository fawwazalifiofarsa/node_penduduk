'use strict'

const express = require('express')
const pendudukController = require('../controllers/penduduk.controller')
const router = new express.Router();

router.get("/index", pendudukController.index)
router.get("/index/:id", pendudukController.indexId)
router.post("/add", pendudukController.add)
router.put("/update/:id", pendudukController.update)
router.delete("/delete/:id", pendudukController.delete)

module.exports = router