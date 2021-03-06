const express = require('express')
const db = require('../../db/models')
const asyncHandler = require('express-async-handler');
const { Project, Funding, User } = require('../../db/models');
const router = express.Router();


router.get('/', asyncHandler(async(req, res) => {
    let projects = await Project.findAll({include: [
        {model: Funding},
        {model: User}
    ]})
    res.json(projects)
}))

router.get('/:id/', asyncHandler(async (req, res) => {
    const {id} = req.params
    let project = await Project.findOne({
        where: {id: id},
        include: [
            {model: Funding},
            {model: User}
        ],
    })
    res.json(project)
}))

router.post('/', asyncHandler(async (req, res) => {
    const {userId, categoryId, title, description, goalAmount, image} = req.body
    const project = await Project.create({userId, categoryId, title, description, goalAmount, image})
    return res.json({project})
}))

router.put('/:id/', asyncHandler(async(req, res) => {
    const {id} = req.params
    const {title, description, goalAmount, categoryId, image} = req.body
    const project = await Project.findByPk(id)
    await project.update({title, description, goalAmount, categoryId, image})
    res.json(project)
}))

router.delete('/:id/', asyncHandler(async(req, res) => {
    const {id} = req.params
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
