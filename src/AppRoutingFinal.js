import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import NotFoundPage from "./pages/404/NotFoundPage";
import LoginPage from "./pages/auth/LoginPage";
import Dashboard from "./pages/dashboard/Dashboard";

function AppRoutingFinal() {
    let loggedIn = true;

    return (
        <BrowserRouter>
            <Routes>
                {/* Redirections to protect our routes */}
                <Route
                    exact
                    path="/"
                    element={
                        loggedIn ? (
                            <Navigate from="/" to={"/dashboard"} />
                        ) : (
                            <Navigate from="/" to={"/login"} />
                        )
                    }
                />
                {/* Login route */}
                <Route exact path="/login" element={<LoginPage />} />
                {/* Dasboard Route */}
                <Route
                    exact
                    path="/dashboard"
                    element={
                        loggedIn ? (
                            <Dashboard />
                        ) : (
                            <Navigate from="/" to={"/login"} />
                        )
                    }
                />
                {/* 404 - Page not found */}
                <Route path="*" element={<NotFoundPage />} />
            </Routes>
        </BrowserRouter>
    );
}

export default AppRoutingFinal;
