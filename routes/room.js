const express = require('express');
const jwt  = require('jsonwebtoken')
var router = express.Router();
const roomModel = require('../models/room');
const auth = require('../auth');

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
            title: req.body.title,
            location: req.body.location,
            phone: req.body.phone,
            price: req.body.price,
            details: req.body.details,
            image: req.body.image
        })

        try{
            const data = await post.save()
            res.json({
                status: 200,
                isSuccess: true,
                data: data,
                message: 'Successfully Inserted room'
            })
            console.log("Inserted Room Successfully");
        }
        catch(err){
            res.json({
                message: err
            })
        }
    })

    router.get('/listroom',auth.verifyRoom,(req,res,next)=>{
        roomModel.findById({_id:req.room._id})
        .then((result)=>{
            res.json(result)
        })
        .catch(next)
    })

    router.put('/roomupdate',auth.verifyRoom,(req,res,next)=>{
        Room.findOneAndUpdate({_id: req.body._id}, req.body, { new: true }, (err, doc) => {
            if(!err) {
                res.json({ status: 'Room Updated'});
            } else {
                Console.log('Error' + err );
                res.json('erroe on update');
            }
    
        });
    });
    


module.exports = router;