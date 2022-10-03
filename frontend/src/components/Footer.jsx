import { Box, Button, Paper } from '@mui/material'
import React from 'react'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
const Footer = () => {
    const currentYear = new Date().getFullYear()
    return (
        <Paper align="center" sx={{
            paddingTop: "10px",
            backgroundColor: "primary.main", color: "secondary.main",
            width: '100%',
            position: 'fixed',
            bottom: 0
        }} gutterbottom="true" component="footer" square variant="outlined">
            <Box sx={{
                backgroundColor: "primary.main",
                boxSizing: "inherit",
            }} component="footer" varient="container">
                <Button variant="text" sx={{ color: "secondary.two" }} href="https://www.linkedin.com/in/edgar-rodriguez-739b2a174">
                    <LinkedInIcon />
                </Button>
                <Button variant="text" sx={{ color: "secondary.two" }} href="https://github.com/edrod1?tab=repositories">
                    <GitHubIcon />
                </Button>
            </Box>
            Copyright {currentYear} Edgar Rodriguez
        </Paper>

    )
}

export default Footer