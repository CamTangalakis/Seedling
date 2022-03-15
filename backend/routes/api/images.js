const express = require('express')
const asyncHandler = require('express-async-handler');
const { Image } = require('../../db/models');
const router = express.Router();

router.post('/', asyncHandler(async(req, res) => {
    const {imageUrl, projectId} = req.body
    const image = await Image.create({imageUrl, projectId})
    return res.json({image})
}))

router.put('/:id/', asyncHandler(async(req, res) => {
    const {id} = req.params
    const { imageUrl } = req.body
    const image = await Image.findByPk(id)
    await image.update({imageUrl})
    res.json(image)
}))

router.delete('/:id/', asyncHandler(async(req, res) => {
    const {id} = req.params
    const image = await Image.findByPk(id)
    await image.destroy()
    res.send('Image deleted successfully!')
}))

module.exports = router;
