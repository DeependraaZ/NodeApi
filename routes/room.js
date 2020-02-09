const express = require('express');
var router = express.Router();
const roomModel = require('../models/room');

router.route('/')
    .get( async (req, res) =>{
        try{
            const data = await roomModel.find({})
            res.json(
                data
            )
        }
        catch(err){
            res.json({
                message: false,
                error: err
            })
        }
    })
    .post( async (req, res) =>{
        const post = new roomModel({
            name: req.body.name,
            location: req.body.location,
            phone: req.body.phone,
            details: req.body.details,
            price: req.body.price,
            image: req.body.image,
            
        })

        try{
            const data = await post.save()
            res.json({
                status: 200,
                isSuccess: true,
                data: data,
                message: 'Successfully Inserted'
            })
            console.log("Inserted Successfully");
        }
        catch(err){
            res.json({
                message: err
            })
        }
    })

router.get('/room',(req,res,next)=>{
    roomModel.find({})
    .then((result)=>{
        res.json(result)
    })
    .catch(next)
})

module.exports = router;