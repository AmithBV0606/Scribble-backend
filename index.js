import express from "express";
import connectDB from "./lib/connectDB.js";
import userRouter from "./routes/user.route.js";
import postRouter from "./routes/post.route.js";
import commentRouter from "./routes/comment.route.js";
import webhookRouter from "./routes/webhook.route.js";
import { clerkMiddleware, requireAuth } from "@clerk/express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();
const app = express();

app.use(cors(process.env.CLIENT_URL))

app.use(clerkMiddleware());

app.use("/webhooks", webhookRouter);  // To avoid conflict between express.json() and body-parser library, this middleware has been moved to top.

app.use(express.json());

// allow cross-origin requests : Image upload
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", 
    "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// console.log(process.env.test);

// app.get("/test", (req, res) => {
//     res.status(200).send("It works");
// });

// app.get("/auth-status", (req, res) => {
//   const authStatus = req.auth;
//   res.json({
//     authStatus
//   })
// });

// app.get("/protect", (req, res) => {
//   const {userId} = req.auth;
//   if (!userId) {
//     return res.status(401).json("not authenticated");
//   }
//   res.status(200).json("content");
// });

// app.get("/protect2", requireAuth(), (req, res) => {
//   res.status(200).json("content");
// });

app.use("/users", userRouter);
app.use("/posts", postRouter);
app.use("/comments", commentRouter);

app.use((error, req, res, next) => {
  res.status(error.status || 500);

  res.json({
    message: error.message || "Something went wrong",
    status: error.status,
    stack: error.stack,
  });
});

app.listen(3000, () => {
  connectDB();
  console.log("Server is running at port 3000");
});