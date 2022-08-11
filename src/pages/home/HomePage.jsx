import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const HomePage = () => {
    let location = useLocation();
    const navigate = useNavigate();

    console.log("We are in Route: ", location.pathname);

    const navigateTo = (path) => {
        navigate(path);
    };

    return (
        <div>
            <h1>Home Page</h1>
            <button onClick={() => navigateTo("/profile")}>
                Go to profile
            </button>
        </div>
    );
};

export default HomePage;
