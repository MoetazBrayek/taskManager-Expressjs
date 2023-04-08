import {mongoose} from "mongoose";

const taskSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    date : {
        type: String,
        required: true
    },
} ,{
    versionKey: false, // Set versionKey to false
  }
);

const Task = mongoose.model("Task", taskSchema);

export default Task;