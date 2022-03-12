const express = require('express')
const db = require('../../db/models')
const asyncHandler = require('express-async-handler');
const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');
const { Project, Image } = require('../../db/models');
const router = express.Router();


router.get('/', asyncHandler(async(req, res) => {
    let projects = await Project.findAll({
        include: Image
    })
    res.json(projects)
}))

router.get('/:id/', asyncHandler(async (req, res) => {
    let project = await Project.findOne({
        where: id
    })
    res.json(project)
}))

router.post('/', asyncHandler(async (req, res) => {
    // const token = req.csrfToken()
    // res.cookie('csrf-token', token)
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
    const project = await Project.findByPk(id)
    await project.destroy()
    res.send('Project deleted successfully!')
}))


module.exports = router;
