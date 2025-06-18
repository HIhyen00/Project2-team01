import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CircularProgress } from "@mui/material";
import { RecoilRoot } from "recoil";

const AuthApp = React.lazy(() => import("authApp/App"));
const Register = React.lazy(() => import("register/App"));

const App = () => {
    return (
        <RecoilRoot>
            <BrowserRouter>
                <Suspense fallback={<div>Loading...</div>}>
                    <Routes>
                        <Route path="/" element={<div>Home Page</div>} />
                        <Route path="/login-page/*" element={<AuthApp />} />
                        <Route path="/register-page/*" element={<Register />} />
                    </Routes>
                </Suspense>
            </BrowserRouter>
        </RecoilRoot>
    );
};

const container = document.getElementById("app") as HTMLElement;
if (!container) {
    throw new Error("Root container #app not found");
}

const root = ReactDOM.createRoot(container);
root.render(<App />);