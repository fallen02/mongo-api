const express = require('express')
const Model = require('../model/model')
const router = express.Router()

router.get('/getAll', async (req, res) => {
    try{
        const data = await Model.find()
        res.json(data)
    }catch(error){
        res.status(500).json({message: error.massage})
    }
})

router.get('/get/:id', async(req, res) => {
    try{
        const data = await Model.findById(req.params.id)
        res.json(data)
    }catch(error) {
        res.status(500).json({message: error.message})
    }
})
router.post('/add', async (req, res) => {
    const data = new Model({
        name: req.body.name,
        age: req.body.age
    })

    try{
        const dataToSave = await data.save()
        res.status(200).json(dataToSave)
    }catch(error){
        res.status(400).json({massage: error.massage})
    }

})

router.put('/update/:id', async(req, res) => {
    try{
        const updateData = req.body
        const options = {new: true}
        const data = await Model.findByIdAndUpdate(
            req.params.id, updateData, options
        )
        res.send(data)
    }catch(error){
        res.status(400).json({message: error.massage})
    }
})

router.delete('/delete/:id', async(req, res) => {
    try{
        const data = await Model.findByIdAndUpdate(req.params.id)
        res.send(data)
    }catch(error){
        res.status(400).json({message: error.massage})
    }
})

module.exports = router