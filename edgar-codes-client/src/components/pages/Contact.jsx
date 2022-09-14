import React from 'react'
import Form from '../contact-form/useForm'
import { Typography, Container, Box } from "@mui/material"

const Contact = () => {
    return (
        <Container >
            <Typography sx={{ marginBottom: 5 }} variant="h3" align="center">Contact</Typography>
            <Box>
                <Box align="left" >
                    <Typography variant="h6">"1 (347) 789-0449"</Typography>
                    <Typography variant="h6">edgarx28@hotmail.com</Typography>
                </Box>
                <Box align="right">
                    <Form />
                </Box>
            </Box>
        </Container>
    )
}

export default Contact