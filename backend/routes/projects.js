const express = require("express");
const { createProject, getProjects, getProject, deleteProject, updateProject } = require("../controllers/projectController")
const requireAuth = require("../middlewares/requireAuth")
const router = express.Router()


//GET all projects
router.get("/", getProjects)

//GET a single  projects
router.get("/:id", getProject)

// POST a new project
router.post("/", createProject)
router.post("/", requireAuth)
//DELETE a project
router.delete("/:id", deleteProject)
router.delete("/:id", requireAuth)
//UPDATE a project
router.patch("/:id", updateProject)
router.patch("/:id", requireAuth)
module.exports = router