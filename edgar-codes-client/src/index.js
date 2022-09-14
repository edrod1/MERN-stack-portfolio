import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles.css';
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider, createTheme, colors } from '@mui/material';
const theme = createTheme({
    palette: {
        primary: {
            main: colors.grey[900]
        },
        secondary: {
            main: colors.green[800]
        }
    }
})
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <ThemeProvider theme={theme}>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </ThemeProvider>
    </React.StrictMode>

);

