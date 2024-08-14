const qr=require('qrcode')
const data={
    "name":"venk",
    "email":"venk@gmail.cm"
}
let d=JSON.stringify(data)
qr.toString(d,{type:"terminal"},function(err,da){
    if(err) throw err;
    console.log(da)
})