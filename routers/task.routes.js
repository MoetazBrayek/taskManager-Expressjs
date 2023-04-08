import {createTask,deleteTask,getTasks}  from "../controller/task.controller.js";
import express from "express";

const router = express.Router();

// CRUD operations --> Create, Read, Update, Delete

router.get("/tasks", getTasks);
router.post("/tasks", createTask);
router.delete("/tasks/:id", deleteTask);

export default router;

//http://localhost:3001/tasks    --> https://landing.develop.rc.aigotsrl-dev.com/api//tasks