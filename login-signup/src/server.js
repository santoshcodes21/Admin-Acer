const express=require("express");
const mongoose=require("mongoose");
const app=express();

const uri="mongodb+srv://santoshkumarcsbs25:<password>@hotelmanagementsystem.b1blj1c.mongodb.net/"

async function connect(){
    try{
        await mongoose.connect(uri)
        console.log("connected to moongoose");
    }
    catch(error){
        console.log(error);
    }
}
connect();
app.listen(8000,()=>{
    console.log("server started on port 8000");
});