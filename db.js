const mongoose=require('mongoose')

var url='mongodb+srv://venkatesh:Venky1234@cluster0.qjp96tg.mongodb.net/ticketless'

mongoose.connect(url,{useUnifiedTopology:true,useNewUrlParser:true})

var db=mongoose.connection

db.on('connected',()=>{
    console.log('mongo success');
})
db.on('error',()=>{
    console.log('mongo err')
})

module.exports=mongoose;