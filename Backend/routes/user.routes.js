const userRoute=require("express").Router();
const {connection}=require("../connection/DbConnect")
const bcrypt=require("bcrypt")
const jwt=require("jsonwebtoken")
const {verify}=require("../middleware/jwt")


// get all the details of employee
userRoute.get("/signup",verify,(req,res)=>{
    const query="SELECT * FROM data1"
    connection.query(query,(err,result)=>{
        if(err){
            res.status(400).send("something went wrong")
        }else{
            res.status(200).json(result)
        }
    })
})

// this is signup part
userRoute.post("/signup", (req,res)=>{
    const {name,email,password}= req.body;
   const hasedPass=bcrypt.hashSync(password,5)
    // const userRole = role || 'employee';
   
     connection.query('SELECT COUNT(*) AS count FROM data1 WHERE email=?',[email],(err,result)=>{
        if(result[0].count>0){
            res.status(200).json({message:"email Already exist"})
        }else{
             const  query='INSERT INTO data1 (name, email,password) VALUES (?, ?, ?)'
       connection.query(query,[name,email,hasedPass], (err, result)=>{
       console.log(query)
        if(!err){
           
            res.status(200).json({message:"data added sucessfully"})
        }else{
            res.status(500).send(err.message)
        }
    })
        }
    })
    
})

// this is login part

userRoute.post("/login",(req,res)=>{
    const {email,password}=req.body
   const user=connection.query('SELECT * FROM data1 WHERE email=?',[email],(err,result)=>{
    if (result.length === 0) {
        return res.json({message:"user not found"});
    }
        
    if(user){
            const ComparePass=bcrypt.compareSync(password,result[0].password)
            if(ComparePass){
                res.status(200).send({
                    message:`welcome ${result[0].name}`,
                    status:true,
                    data:"success",
                    user_id:result[0].id,
                    name:result[0].name,
                    role:result[0].role,
                    token:jwt.sign({_id:result[0].id,name:result[0].name},'secretkey',{ expiresIn: '1h' })
                })
            }else{
                res.json({message: "Password Incorrect!"})
            }
        } 
    
     
   })
})




module.exports = { userRoute };