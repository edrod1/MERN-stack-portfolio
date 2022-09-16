import React from 'react'
import Form from '../contact-form/useForm'
import { Typography, Container, Box } from "@mui/material"

const Contact = () => {
    return (
        <>
            <Box sx={{ backgroundColor: "primary.main2", color: "secondary.main" }}>
                <Typography sx={{ padding: "5px 0 10px 0" }}
                    variant="h3" align="center"
                >Contact</Typography>
            </Box>
            <Form />
        </>
    )
}

export default Contact