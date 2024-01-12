const mongoose=require("mongoose")
mongoose.connect("mongodb://localhost:27017/task-master-hub")
.then(()=>{
    console.log("mongodb connected");
})
.catch(()=>{
    console.log('Mongodb failed');
})


const newSchema=new mongoose.Schema({
    fname:{
        type:String,
        required:true
    },
    lname:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})

const collection = mongoose.model("collection",newSchema)

module.exports=collection
