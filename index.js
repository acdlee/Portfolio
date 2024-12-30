import express from "express";
import bodyParser from "body-parser";

// Create the app and specify the port
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware for static files
app.use(express.static("public"));

// Middleware for parsing requests
app.use(bodyParser.urlencoded({ extended: false }));

// Index page
app.get('/', (req, res) => {
    res.render("index.ejs");
})

// About page
app.get('/about', (req, res) => {
    res.render("about.ejs");
})

// Projects page
app.get('/projects', (req, res) => {
    res.render("projects.ejs");
})

// Individual projects page
app.get('/project-page/:project', (req, res) => {
    let project = req.params.project;
    let targetProjectData = projectData[project];
    res.render('project-page.ejs', {
        project: project,
        data: targetProjectData,
    });
})

// Chalkboard page
app.get('/chalkboard', (req, res) => {
    res.render('chalkboard.ejs');
})

// Resume download route
app.get('/resume', (req, res) => {
    const file = `${import.meta.dirname}/public/uploads/christopher_lee_resume.pdf`;
    res.download(file);
})

// Invalid route: default to index page
app.get('*', (req, res) => {
    res.redirect('/');
})

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});

const projectData = {
    myCalendar: {
        images: [
            "/images/logo-javascript.svg", "/images/logo-javascript.svg",
        ],
        description: "Inspired from Google Calendar, manage your daily TODOs, jot down weekly notes, and get a heads-up on the week's weather using this React application.",
        technologies: "React, Vite",
        highlights: [
            "Weather data fetching from weather.gov's API.",
            "Advanced state management with custom useState hooks",
            "Weekly notes and tasks stored locally",
            "Custom useReducer hooks for weather-related payloads",
        ],
    },
};