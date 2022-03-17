const express = require('express')
const asyncHandler = require('express-async-handler');
const { Funding } = require('../../db/models');
const router = express.Router();

router.post('/', asyncHandler(async(req, res) => {
    const {projectId, userId, funded} = req.body
    const funding = await Funding.create({projectId, userId, funded})
    return res.json({funding})
}))

router.put('/:id/', asyncHandler(async(req, res) => {
    const {id} = req.params
    const {funded} = req.body
    const funding = await Funding.findByPk(id)
    await funding.update({funded})
    res.json(funding)
}))

router.delete('/:id/', asyncHandler(async(req, res) => {
    const {id} = req.params
    const funding = await Funding.findByPk(id)
    await funding.destroy()
    res.send('Funding deleted successfully!')
}))


module.exports = router;
