import express from "express";
import cors from "cors";
import rootRouter from "./routes/rootRouter.js";
const port = 3000;
const app = express();

// Middleware
app.use(express.json());
app.use(cors());

app.listen(port, ()=>{
    console.log("app start")
});

app.use("/api", rootRouter);
