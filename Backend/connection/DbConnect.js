const sql=require("mysql")
require("dotenv").config()

const connection=sql.createConnection({
    connectionLimit: 10,
    host:process.env.HOST,
    user:process.env.USER,
    password:process.env.PASSWORD,
    database:process.env.DATABASE,
    timezone:"Asia/Kolkata",
    // port:process.env.PORT
})



connection.connect((err)=>{
    if(err){
        console.log(err)
    }else{
        console.log("Connected to the Database!")
    }
})


module.exports={connection};