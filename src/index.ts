import express, { Application, Request, Response } from "express";
const app: Application = express();
const PORT = 5000 || process.env.PORT;

app.get("/",(req:Request,res:Response):void=>{
    res.send("Node pipeline is up and running")
})

app.listen(PORT, ():void => {
  console.log(`App is up and running at ${PORT}`);
});
