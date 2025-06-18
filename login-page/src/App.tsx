import React from "react";
import { BrowserRouter } from "react-router-dom";

import "./index.css";
import {RecoilRoot} from "recoil";
import LoginAuthenticationRouter from "./router/LoginAuthenticationRouter.tsx";

const App: React.FC = () => {
    console.log("✅ AuthenticationApp 렌더링됨");

    return (
        <RecoilRoot>
            <LoginAuthenticationRouter />
        </RecoilRoot>
    );
}

export default App;
