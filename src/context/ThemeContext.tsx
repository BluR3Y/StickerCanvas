import React from "react";
import { ThemeProvider } from "styled-components";
import { theme } from "../styles/theme";
import { GlobalStyles } from "../styles/Global.styles";

export default function ThemeContext({
    children
}: {
    children: React.ReactNode
}) {

    return (
        <ThemeProvider theme={theme}>
            <GlobalStyles/>
            {children}
        </ThemeProvider>
    )
}