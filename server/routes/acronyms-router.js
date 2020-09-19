const express = require('express')

const AcronymCtrl = require('../controllers/acronyms-controller')

const router = express.Router()

router.post('/acronym', AcronymCtrl.createAcronym)
router.put('/acronym/:id', AcronymCtrl.updateAcronym)
router.delete('/acronym/:id', AcronymCtrl.deleteAcronym)
router.get('/acronym/:id', AcronymCtrl.getAcronymById)
router.get('/acronyms', AcronymCtrl.getAcronyms)

module.exports = router