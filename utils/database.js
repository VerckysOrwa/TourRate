require('dotenv').config()
const express = require('express');
const mysql = require('mysql')
const cors = require("cors")
const PORT = process.env.SERVER_PORT

const app = express();
app.use(cors())

const db = mysql.createConnection({
    host:process.env.DB_HOST,
    password:process.env.DB_PASSWORD,
    user:process.env.DB_USER,
    database:process.env.DB_NAME
})




app.post("/feedbacks", (req, res) => {
    // const email = req.body.email;
    // const message = req.body.message;
    const { email, message } = req.body;
    console.log(email,"\n",message)
    db.query(
      "INSERT INTO tourrate_feedback(email,message) VALUES(?,?)",
      [email, message],
      (err) => {
        if (err) console.log(err);
        res.send({
          message: "feedback receieved",
        });
      }
    );    
})



app.listen(PORT,(err)=>{
    if (err) console.log(err);
    console.log(`server is happily running on ${PORT}`)
})
