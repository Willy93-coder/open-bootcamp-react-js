import React, { useState, useEffect } from "react";
import { Task } from "../../models/task.class";
import { LEVELS } from "../../models/levels.enum";
import TaskComponent from "../pure/task";
import TaskForm from "../pure/forms/taskForm";

const TaskList = () => {
    const defaultTask1 = new Task(
        "Example",
        "Default description",
        true,
        LEVELS.NORMAL
    );

    const defaultTask2 = new Task(
        "Example",
        "Default description",
        true,
        LEVELS.URGENT
    );

    const defaultTask3 = new Task(
        "Example",
        "Default description",
        true,
        LEVELS.BLOCKING
    );

    // Estado del componente
    const [tasks, setTasks] = useState([
        defaultTask1,
        defaultTask2,
        defaultTask3,
    ]);
    const [loading, setLoading] = useState(true);

    // Control del ciclo de vida
    useEffect(() => {
        console.log("Task State has been modified");
        setLoading(false);
        return () => {
            console.log("TaskList componente is going to unmount...");
        };
    }, [tasks]);

    function completeTask(task) {
        console.log("Complete this task: ", task);
        const index = tasks.indexOf(task);
        const tempTask = [...tasks];
        tempTask[index].completed = !tempTask[index].completed;
        // We update the state of the component and will update the
        // Iteration of the tasks in order to show the task updated
        setTasks(tempTask);
    }

    function deletedTask(task) {
        console.log("Complete this task: ", task);
        const index = tasks.indexOf(task);
        const tempTask = [...tasks];
        tempTask.splice(index, 1);
        setTasks(tempTask);
    }

    function addTask(task) {
        console.log("Complete this task: ", task);
        const index = tasks.indexOf(task);
        const tempTask = [...tasks];
        tempTask.push(task);
        setTasks(tempTask);
    }

    return (
        <div className="col-12">
            <div className="card">
                {/* Card Header (title) */}
                <div className="card-header p-3">
                    <h5 className="">Your task:</h5>
                </div>
                {/* Card Body (content) */}
                <div
                    className="card-body"
                    data-mdb-perfect-scrollbar="true"
                    style={{ position: "relative", height: "400px" }}
                >
                    <table>
                        <thead>
                            <tr>
                                <th scope="col">Title</th>
                                <th scope="col">Description</th>
                                <th scope="col">Priority</th>
                                <th scope="col">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {tasks.map((task, index) => {
                                return (
                                    <TaskComponent
                                        key={index}
                                        task={task}
                                        completed={completeTask}
                                        remove={deletedTask}
                                    />
                                );
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
            <TaskForm add={addTask}></TaskForm>
        </div>
    );
};

export default TaskList;
