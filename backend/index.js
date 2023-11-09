const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")
const dotenv = require("dotenv")
// const bodyParser = require("body-parser")
const app = express()
const Routes = require("./routes/route.js")
const admin=require('./models/adminSchema.js')
const PORT = process.env.PORT || 5000

dotenv.config();

// app.use(bodyParser.json({ limit: '10mb', extended: true }))
// app.use(bodyParser.urlencoded({ limit: '10mb', extended: true }))
app.use(cors())
app.use(express.json())
app.use(Routes);

mongoose
    .connect(process.env.MONGO_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => console.log("Connected to MongoDB"))
    .catch((err) => console.log("NOT CONNECTED TO NETWORK", err));
// app.use('/', Routes);



app.get("/",async(req,res)=>{
   const userdoc = await admin.create({
    name:"abs",email:'abs@gmail.com',password:'abscdjkhgsd',role:'student',schoolName:'Sssdec'
   })
   res.json(userdoc);
})

app.listen(PORT, () => {
    console.log(`Server started at port no. ${PORT}`)
})