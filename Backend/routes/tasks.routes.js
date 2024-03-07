const tasks=require("express").Router()
const {connection}=require("../connection/DbConnect")
const {verify}=require("../middleware/jwt")

tasks.get("/assingtask",(req,res)=>{
    const query="SELECT * FROM  Tasks"
    connection.query(query,(err,result)=>{
        if(err){
            res.status(501).send(err)
        }else{
            res.status(200).json(result)
        }
    })
})

tasks.post("/assingtask",(req,res)=>{
    const {user_id,task_name,task_description}=req.body
    if(!user_id||!task_name||!task_description){
        res.status(400).send({msg:"missing reqiured feild"})

    }
    const query='INSERT INTO Tasks(user_id,task_name,task_description) VALUES (?, ?, ?)';
    connection.query(query,[user_id,task_name,task_description],(err,result)=>{
        if(err){
            res.status(500).send(err)
        }else{
            res.status(200).send({msg:"data assigned successfully"})
        }
    })
})  

// user task routes started from here

tasks.get("/usertask/:id",verify,(req,res)=>{
    const id=req.params.id;
    const query='SELECT * FROM Tasks WHERE user_id =? '
    connection.query(query,[id],(err,results)=>{
        if(err){
            res.status(400).send("error in fetching data",err)
        }else{
            res.status(200).json(results);
           
        }
    })
})

tasks.put('/taskstatus/:taskId', (req, res) => {
    const taskId = req.params.taskId;
    const { task_status } = req.body;
    const query = 'UPDATE Tasks SET task_status= ? WHERE task_id= ?';
    connection.query(query, [task_status, taskId], (err, result) => {
        if (err) {
            console.error('Error updating task status:', err);
            res.status(500).json({ message: 'Internal server error' });
        } else {
            res.status(200).json({ message: 'Task status updated successfully' });
        }
    });
});






tasks.post

module.exports={tasks}