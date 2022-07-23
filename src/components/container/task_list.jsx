import React, { useState, useEffect } from "react";
import { Task } from "../../models/task.class";
import { LEVELS } from "../../models/levels.enum";
import TaskComponent from "../pure/task";

const TaskList = () => {
    const defaultTask = new Task(
        "Example",
        "Default description",
        false,
        LEVELS.NORMAL
    );

    // Estado del componente
    const [tasks, setTasks] = useState(defaultTask);
    const [loading, setLoading] = useState(true);

    // Control del ciclo de vida
    useEffect(() => {
        console.log("Task State has been modified");
        setLoading(false);
        return () => {
            console.log("TaskList componente is going to unmount...");
        };
    }, [tasks]);

    const changeCompleted = (id) => {
        console.log("TODO: Cambiar estado de una tarea");
    };

    return (
        <div>
            <h1>Your task:</h1>
            {/* TODO: Aplicar un FOR/MAP para renderizar una lista */}
            <TaskComponent task={defaultTask} />
        </div>
    );
};

export default TaskList;
