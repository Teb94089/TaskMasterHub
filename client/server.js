const express = require("express")
const collection = require("./mongo")
const cors = require("cors")
const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())
const sendVerificationEmail = require('./sendVerificationEmail');



app.get("/",cors(),(req,res)=>{

})


app.post("/login",async(req,res)=>{
    const{email,password}=req.body

    try{
        const check=await collection.findOne({email:email})

        if(check){
            res.json("exist")
        }
        else{
            res.json("notexist")
        }

    }
    catch(e){
        res.json("fail")
    }

})


app.post("/signup", async (req, res) => {
    const { fname, lname, email, password } = req.body;

    const data = {
        fname: fname,
        lname: lname,
        email: email,
        password: password
    };

    try {
        const check = await collection.findOne({ email: email });

        if (check) {
            res.json("exist");
        } else {
            await collection.insertMany([data]);
            // After successful signup, send verification email
            await sendVerificationEmail(email, 'generate_token_somehow'); // You don't need to pass req.body.email and req.body.verificationToken here

            res.json("notexist");
        }
    } catch (error) {
        console.error('Error signing up user:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

app.listen(8000,()=>{
    console.log("port connected");
})

