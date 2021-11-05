import express from "express";

const app = express();

app.get("/test-get", (request, response) => {
    return response.send("Olá get");
});

app.post("/test-post", (request, response) => {
    return response.send("Olá post");
});

app.listen(3000, () => {console.log("Server is running!")})