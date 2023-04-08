import Task from "../models/task.js";
import {z} from "zod";

const taskSchema = z.object({
    name: z.string(),
    description: z.string(),
    date: z.string()
});

// CRUD operations --> Create, Read, Update, Delete

// Create a new task
// async --> await --> promise
// create find findByIdAndUpdate findByIdAndDelete findById
export const createTask = async (req, res) => {
    try {
        taskSchema.parse(req.body);
        const task = await Task.create(req.body);
        res.status(201).json({task});
    } catch (error) {
        res.status(400).json({error});
    }
}
export const getTasks = async (req, res) => {
    try {
        const tasks = await Task.find({});
        res.status(200).json({tasks});
    } catch (error) {
        res.status(400).json({error});
    }
}
// delete a task
export const deleteTask = async (req, res) => {
    try {
        const {id} = req.params;
        const deletedTask = await Task.findByIdAndDelete(id);
        if (deletedTask) {
            return res.status(200).send("Task deleted");
        }
        throw new Error("Task not found");
    } catch (error) {
        res.status(400).json({error: error.message});
    }
}

// export all the functions
export default {
    createTask,
    getTasks,
    deleteTask
}