import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles.css';
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "@mui/material";
import theme from './styles';
import { ProjectsContextProvider } from './context/ProjectContext';
import { AuthContextProvider } from './context/AuthContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <ThemeProvider theme={theme}>
            <BrowserRouter>
                <AuthContextProvider>
                    <ProjectsContextProvider>
                        <App />
                    </ProjectsContextProvider>
                </AuthContextProvider>
            </BrowserRouter>
        </ThemeProvider>
    </React.StrictMode>

);

