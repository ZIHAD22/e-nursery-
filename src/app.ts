import express, { Application, ErrorRequestHandler } from "express";
import sendRes from "./App/utils/sendRes";
const app: Application = express();
const port = 3000;

// 

app.get("/", (req, res) => {
  sendRes({
    res,
    success: true,
    statusCode: 200,
    message: "server is running",
    data: {},
  });
});

app.get("*", (req, res) => {
  sendRes({
    res,
    success: false,
    statusCode: 404,
    message: "Route Not Found",
    data: {},
  });
});

app.use(((err, req, res, next) => {
  res.status(500).json({
    success: false,
    statusCode: 500,
    message: "Something Went Wrong",
  });
}) as ErrorRequestHandler);

export default app;
