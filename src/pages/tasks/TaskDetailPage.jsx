import React from "react";
import { useParams } from "react-router-dom";

const TaskDetailPage = ({ task }) => {
    const params = useParams();

    return (
        <div>
            <h1>Task Detail - {params.id}</h1>
            <h2>{task.name}</h2>
            <h2>{task.description}</h2>
        </div>
    );
};

export default TaskDetailPage;
