import express from "express"
import cors from "cors"
import "dotenv/config"
import connectDB from "./config/mongodb.js";
import userRouter from "./routes/userRoute.js";
import imageRouter from "./routes/imageRoute.js";

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());
await connectDB();

app.get("/",(req,res)=>{
    res.send("Api Working")
})

app.use("/api/user",userRouter)
app.use("/api/image",imageRouter)

app.listen(PORT,()=>{
    console.log(`server run port ${PORT}`);
    
})