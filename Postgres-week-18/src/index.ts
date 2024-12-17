import express from "express";
import { Client } from "pg";
import { DATA_BASE_URL } from "./config";

const app=express()
app.use(express.json())

const pgClient = new Client(DATA_BASE_URL)
pgClient.connect()

app.post("/signup", async (req, res)=>{
    const {username , password , firstname} = req.body;
    try{
        const insertQuery = `INSERT INTO users (username, password, firstname) VALUES ($1, $2, $3)`;
        const response = await pgClient.query(insertQuery, [username, password, firstname])
        console.log(response)
        res.json({
            message: "You have signed up"
        })

    }catch(e){
    console.log(e);
    res.json({
        message: "Error While Signing up"
    })
    }
})
app.post("/signin", async (req, res)=>{
    const {username , password} = req.body;
    const findQuery = `SELECT * users WHERE username = "${username}" AND password = "${password}"`
   try{
    const response = await pgClient.query(findQuery)
    console.log(response)
    if (response){
        res.json({
          message: "you have signed in"
        })
    }
   }catch(e){
       console.log(e)
    res.json({
        message: "user doen't exist in our database "
    })
   }
})



app.listen(3000,()=>{
    console.log("server listening at 3000")
})
