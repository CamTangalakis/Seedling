const express = require('express')
const db = require('../../db/models')
const asyncHandler = require('express-async-handler');
const { Project } = require('../../db/models');
const router = express.Router();


router.get('/', asyncHandler(async(req, res) => {
    let projects = await Project.findAll({
        include: db.Image
    })
    res.json(projects)
}))

router.get('/:id/', asyncHandler(async (req, res) => {
    const {id} = req.params
    let project = await Project.findOne({
        where: {id: id}
    })
    res.json(project)
}))

router.post('/', asyncHandler(async (req, res) => {
    const {userId, categoryId, title, description, goalAmount} = req.body
    const project = await Project.create({userId, categoryId, title, description, goalAmount})
    return res.json({project})
}))

router.put('/:id/', asyncHandler(async(req, res) => {
    const {id} = req.params
    const {title, description, goalAmount, categoryId} = req.body
    const project = await Project.findByPk(id)
    await project.update({title, description, goalAmount, categoryId})
    res.json(project)
}))

router.delete('/:id/', asyncHandler(async(req, res) => {
    const {id} = req.params
    console.log(id, '<<<<SDfsdg')
    const project = await Project.findByPk(id)
    await project.destroy()
    res.send('Project deleted successfully!')
}))

router.get('/search/:term', asyncHandler(async(req, res) => {
    const {term} = req.params
    const projects = await Project.findAll({
        where: title.like(term)
    })
}))


module.exports = router;
