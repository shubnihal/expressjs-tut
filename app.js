import express from "express";

const app = express();

const md1 = (req, res, next) => {
  console.log("Middleware1 called");
  next();
};

const md2 = (req, res, next) => {
  console.log("Midllware 2 called");
  next();
};

app.get("/", md2, md1, (req, res) => {
  // res.jsonp({ message: "Hello World" });
  res.render("index.ejs", { name: "John" });
});

app.get("/home", (req, res) => {
  res.send("Welcome to the home page");
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
