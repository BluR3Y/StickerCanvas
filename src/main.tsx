import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import ThemeWrapper from "./context/ThemeContext";
import App from "./App";

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <ThemeWrapper>
            <App/>
        </ThemeWrapper>
    </StrictMode>
)