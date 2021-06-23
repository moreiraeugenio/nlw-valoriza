import express from "express";

const app = express();

app.get("/test", (request, response) => {
  return response.send("Hello, world! Using GET");
});

app.post("/test-post", (request, response) => {
  return response.send("Hello, world! I'm using POST");
});

app.listen(3000, () => console.log("Server is running..."));
