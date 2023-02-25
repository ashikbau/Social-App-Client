const express = require("express");
const { default: mongoose } = require("mongoose");
const app = express();
const dotenv = require("dotenv");
const userRouter = require("./router/user")
const postRouter = require("./router/Post")
const cors = require("cors");
dotenv.config();
mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.0avqkuj.mongodb.net/?retryWrites=true&w=majority`).then(()=>
console.log("DB connection successful")).catch(()=>{
    console.log("something went wrong")
})
app.use(cors());
app.use(express.json());
app.use("/api/user",userRouter)
app.use("/api/post",postRouter)

app.listen(5000,()=>{
    console.log("Server is running")
})