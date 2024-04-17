const express=require('express')
const fetch = require('node-fetch');
const cors=require('cors')

const app=express()
app.use(cors());
app.use(express.json()); 

app.get('/',async(req,res)=>{
    try {
        const responsedata=await fetch('https://restcountries.com/v3.1/all')
        const data=await responsedata.json()
        const common=data.map(country=>({"country":country}))
        res.json(common)
    } catch (error) {
        console.log(error)
    }
})
 
app.listen(1111,()=>{
    try {
        console.log("connected|||")
    } catch (error) {
        console.log("connection failed")
    }
})