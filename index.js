import express from "express";
import bodyParser from "body-parser";

// Create the app and specify the port
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware for static files
app.use(express.static("public"));

// Middleware for parsing requests
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', (req, res) => {
    res.render("index.ejs");
})

app.get('/about', (req, res) => {
    res.render("about.ejs");
})

app.get('/projects', (req, res) => {
    res.render("projects.ejs");
})

app.get('/project-page/:project', (req, res) => {
    let project = req.params.project;
    res.render('project-page.ejs', {
        project: project,
    });
})

app.get('/chalkboard', (req, res) => {
    res.render('chalkboard.ejs');
})

app.get('/resume', (req, res) => {
    const file = `${import.meta.dirname}/public/uploads/christopher_lee_resume.pdf`;
    res.download(file);
})

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});