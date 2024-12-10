import express from "express";

const app = express();
const PORT = process.env.PORT || 3000;

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