const express = require('express');
const jwt  = require('jsonwebtoken')
var router = express.Router();
const Room = require('../models/rooms');
const auth = require('../auth');

router.post('/addroom', (req, res, next) => {
    Room.create({
        title: req.body.title,
        location: req.body.location,
        phone: req.body.phone,
        prices:req.body.prices,
        details:req.body.details,
        image:req.body.image
    }).then((room) => {
        let token = jwt.sign({ roomId: room._id }, process.env.SECRET);
        res.json({ status: "Room Added Successfully!", token: token });
    }).catch(next);
});

router.get('/listrooms',(req,res,next)=>{
    Room.find({},(err,treks)=>
    {
        if(err){
            res.json(next)
        }
        res.json(rooms)
    });
})
router.put('/update', auth.verifyRoom, (req, res, next) => {
    Room.findByIdAndUpdate(req.rooms._id, { $set: req.body }, { new: true })
        .then((rooms) => {
            res.json({status: 'Profile Updated!', user:user});
        }).catch(next);
});

module.exports = router;