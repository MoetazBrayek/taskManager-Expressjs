import {createTask,deleteTask,getTasks,getWeatherTask}  from "../controller/task.controller.js";
import express from "express";

const router = express.Router();

// CRUD operations --> Create, Read, Update, Delete

router.get("/tasks", getTasks);
router.post("/tasks", createTask);
router.delete("/tasks/:id", deleteTask);
router.get("/weather", getWeatherTask);

export default router;

