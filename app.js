// Imports
const express = require("express");
const app = express();
const port = 5000;

// Static Files
app.use(express.static("public"));
app.use("/css", express.static(__dirname + "public/css"));
app.use("/script", express.static(__dirname + "public/script"));
app.use("/img", express.static(__dirname + "public/img"));
app.use("/fonts", express.static(__dirname + "public/fonts"));

// Set Views
app.set("views", "./views");
app.set("view engine", "ejs");

app.get("", (req, res) => {
	res.render("index", { text: "This is EJS" });
});

app.get("/about", (req, res) => {
	res.render("about", { text: "About Page" });
});

//  Listen on port 3000
app.listen(port, () => console.info(`Listening on port ${port}`));
