const express=require("express")
const app=express()
const cors=require("cors")
const {userRoute}=require("./routes/user.routes")
const {tasks}=require("./routes/tasks.routes")
const port=5500




app.use(cors())
app.use(express.json())


// app.get("/",(req,res)=>{
//     res.send("hello world")
// })

app.use("/pmt",userRoute)
app.use("/admin",tasks)












app.listen(port,()=>{
    console.log(`server is running on port ${port}` );
})