const express=require('express')
const router=express.Router()

const monu=require('../models/monumentmodel')

router.get('/getallmonuments',async(req,res)=>{
    try{
        const monus=await monu.find({})
        res.send(monus)
    }
    catch(error){
        return res.status(400).json({message:error});
    }
})

router.post("/addmonument",async(req,res)=>{
    const monum=req.body.monument
    try {
        const newmonu=new monu({
            name:monum.name,
            image:monum.image,
            varients:['child','adult','foreigner'],
            description:monum.description,
            categgory:monum.categgory,
            prices:[monum.prices] 
           })
           await newmonu.save()
           res.send('new monument added successfully')
    } catch (error) {
        return res.status(400).json({message:err})
    }
    
})

router.post('/getmonumentbyid',async(req,res)=>{
    const monumentid=req.body.monumentid
    try {
        const monus=await monu.findOne({_id:monumentid})
        res.send(monus)
    } catch (error) {
        return res.status(400).json({message:error})
    }
})

router.post('/editmonument',async(req,res)=>{
    const edit=req.body.upmonument
    try {
        const monust=await monu.findOne({_id:edit._id})
        monust.name=edit.name,
        monust.description=edit.description,
        monust.image=edit.image,
        monust.prices=[edit.prices]

        await monust.save()
        res.send('monument details updated successfully')
    } catch (error) {
        return res.send('error')
    }
})
router.post('/deletemonument',async (req,res)=>{
    const monuid=req.body.monumentid
    try {
        await monu.findOneAndDelete({_id:monuid})
        res.send('monument deleted successfully')
    } catch (error) {
        return  res.send('error')
    }
})

module.exports=router;