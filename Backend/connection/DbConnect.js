const sql=require("mysql")

const connection=sql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"pmt",
    timezone:"Asia/Kolkata",
    port:3306
})



connection.connect((err)=>{
    if(err){
        console.log(err)
    }else{
        console.log("Connected to the Database!")
    }
})

module.exports={connection};