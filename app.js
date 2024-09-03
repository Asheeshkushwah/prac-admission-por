const express =require('express')
const app =express()
const port=3000

const web = require('./routes/web')
//connect db require bad me likhna hai
const connectDb =require('./db/connectDb')



//html css set
app.set('view engine','ejs')
//css image link
app.use(express.static('public'))
//connect db
connectDb()
//routeing
app.use('/',web)


//server create
app.listen(port,()=>{
console.log(`server start localhost:${port}`)
})