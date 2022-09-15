const express = require("express")
const app = express();

const port = 8080;

app.set("view engine", "ejs")

app.get("/", (req, res) => {
  res.render("index")
})


app.get("/about", (req, res) => {
  res.render("about")
})


app.get("/contact-me", (req, res) => {
  res.render("contact-me")
})


app.all("*", (req, res) => {
  res.render("404")
})

app.listen(port, () => {
  console.log(`Server running at port ${port}`);
});