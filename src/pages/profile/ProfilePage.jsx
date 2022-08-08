import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const ProfilePage = () => {
    const navigate = useNavigate();
    let location = useLocation();

    console.log("We are in Route: ", location.pathname);
    const navigateTo = (path) => {
        navigate(path);
    };

    const goBack = () => {
        navigate(-1);
    };

    return (
        <div>
            <h1>Profile page</h1>
            <button onClick={() => navigateTo("/tasks")}>Tasks</button>
            <button onClick={goBack}>Go Back</button>
        </div>
    );
};

export default ProfilePage;
