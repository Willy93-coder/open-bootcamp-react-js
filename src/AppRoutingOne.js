import "./App.css";
import { BrowserRouter, Routes, Route, Link, Navigate } from "react-router-dom";
import HomePage from "./pages/home/HomePage";
import NotFoundPage from "./pages/404/NotFoundPage";
import ProfilePage from "./pages/profile/ProfilePage";
import AboutPage from "./pages/about-faqs/AboutPage";
import TasksPage from "./pages/tasks/TasksPage";
import TaskDetailPage from "./pages/tasks/TaskDetailPage";
import LoginPage from "./pages/auth/LoginPage";
import { useEffect } from "react";

function AppRoutingOne() {
    let logged = false;

    let taskList = [
        {
            id: 1,
            name: "Task 1",
            description: "My first task",
        },
        {
            id: 2,
            name: "Task 2",
            description: "My second task",
        },
        {
            id: 3,
            name: "Task 3",
            description: "My third task",
        },
    ];

    useEffect(() => {
        logged = localStorage.getItem("credentials");
        console.log("User is Logged?", logged);
    }, []);

    return (
        <BrowserRouter>
            <div className="App">
                <aside>
                    <Link to="/">HOME</Link>
                    <Link to="/about">ABOUT</Link>
                    <Link to="/faqs">FAQs</Link>
                    <Link to="/any404">No existing Route</Link>
                    <Link to="/login">Login</Link>
                </aside>

                <main>
                    <Routes>
                        <Route exact path="/" element={<HomePage />} />
                        <Route
                            path="/login"
                            element={
                                logged ? <Navigate to={"/"} /> : <LoginPage />
                            }
                        />
                        <Route path="/about" element={<AboutPage />} />
                        <Route path="/faqs" element={<AboutPage />} />
                        <Route
                            path="/profile"
                            element={
                                logged ? (
                                    <ProfilePage />
                                ) : (
                                    <Navigate to={"/login"} />
                                )
                            }
                        />
                        <Route path="/tasks" element={<TasksPage />} />
                        <Route path="/tasks/:id" element={<TaskDetailPage />} />
                        {/* 404 - Page not found */}
                        <Route path="*" element={<NotFoundPage />} />
                    </Routes>
                </main>
            </div>
        </BrowserRouter>
    );
}

export default AppRoutingOne;
