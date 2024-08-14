const express=require('express')
const path=require('path')
const monu=require('./models/monumentmodel')
const app=express();
const userRoute=require('./routes/userRoute')
const db=require('./db.js')
app.use(express.json());

const monuRoute=require('./routes/monuRoute')


app.use('/api/monuments',monuRoute)
app.use('/api/users',userRoute)

// if(process.env.NODE_ENV==='production'){
//     app.use(express.static(path.join(__dirname,'/client/public')))
//     app.get('*',(req,res)=>{
//         res.sendFile(path.resolve(__dirname,"client","public","index.html"))
//     })
// }
// else{
    app.get('/',(req,res)=>{
        res.send(  'server working')
    })
// }



const port=process.env.PORT||5000;
app.listen(port,()=>'server running')