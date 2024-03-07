const express=require("express")
const app=express()
const cors=require("cors")
const {userRoute}=require("./routes/user.routes")
const {tasks}=require("./routes/tasks.routes")




app.use(cors())
app.use(express.json())


// app.get("/",(req,res)=>{
//     res.send("hello world")
// })

app.use("/pmt",userRoute)
app.use("/admin",tasks)












app.listen(5500,()=>{
    console.log("server is running on port 5500");
})