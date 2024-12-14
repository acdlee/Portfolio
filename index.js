import express from "express";

// Create the app and specify the port
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware for static files
app.use(express.static("public"));

app.get('/', (req, res) => {
    res.render("index.ejs");
})

app.get('/about', (req, res) => {
    res.render("about.ejs");
})

app.get('/projects', (req, res) => {
    res.render("projects.ejs");
})

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});