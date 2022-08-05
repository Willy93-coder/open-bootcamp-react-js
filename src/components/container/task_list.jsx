import React, { useState, useEffect } from "react";
import TaskFormik from "../pure/forms/taskFormik";
import TaskComponent from "../pure/task";
// import TaskForm from "../pure/forms/taskForm";

const TaskList = () => {
    // Estado del componente
    const [tasks, setTasks] = useState([]);
    const [loading, setLoading] = useState(true);

    // Control del ciclo de vida
    useEffect(() => {
        console.log("Task State has been modified");
        setTimeout(() => {
            setLoading(false);
        }, 2000);
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
        const tempTask = [...tasks];
        tempTask.push(task);
        setTasks(tempTask);
    }

    const loadingStyle = {
        color: "grey",
        fontSize: "30px",
        fontWeight: "bold",
    };

    const Table = () => {
        return (
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
        );
    };

    let tasksTable;

    if (tasks.length > 0) {
        tasksTable = <Table></Table>;
    } else {
        tasksTable = (
            <div>
                <h3> There are no tasks to show</h3>
                <h4>Please, create one</h4>
            </div>
        );
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
                    {/* TODO: Add Loading Spinner */}
                    {loading ? (
                        <p style={loadingStyle}>Loading tasks...</p>
                    ) : (
                        tasksTable
                    )}
                </div>
            </div>
            {/* <TaskForm add={addTask} length={tasks.length}></TaskForm> */}
            <TaskFormik add={addTask} length={tasks.length} />
        </div>
    );
};

export default TaskList;
