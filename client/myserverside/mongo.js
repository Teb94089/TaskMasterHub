const mongoose=require("mongoose")
mongoose.connect("mongodb+srv://Teb94089:Khethelo20@cluster0.uhjcehi.mongodb.net/task_hub?retryWrites=true&w=majority")
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
