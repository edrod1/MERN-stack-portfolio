import { React, useState, useEffect } from 'react'
import Validation from './validation';
import { TextField, Typography, Box, Container, Button, Grid } from "@mui/material"
import SendIcon from '@mui/icons-material/Send';



const Form = () => {

    const [inputValue, setInputValue] = useState({
        name: "",
        email: "",
        message: "",
    });
    const [inputErrors, setInputErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);
    //---------------------------------------------------

    useEffect(() => {
        console.log(inputErrors);
        if (Object.keys(inputErrors).length === 0 && isSubmit) {
            console.log(inputValue);
        }
    }, [inputErrors, isSubmit, inputValue]);


    const handleNameInput = (event) => {
        setInputValue({ ...inputValue, name: event.target.value });
    }
    const handleEmailInput = (event) => {
        setInputValue({ ...inputValue, email: event.target.value });
    }
    const handleMessageInput = (event) => {
        setInputValue({ ...inputValue, message: event.target.value });
    }
    const handleSubmit = (event) => {
        // alert("Your message has been sent!");
        event.preventDefault();
        setInputErrors(validate(inputValue));
        setIsSubmit(true);
    };

    const validate = (values) => {
        const errors = {};
        const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
        if (!values.name) {
            errors.name = "Name is required!";
        }
        if (!values.email) {
            errors.email = "Email is required!";
        } else if (!regex.test(values.email)) {
            errors.email = "Invalid email format, try again!";
        }
        if (!values.message) {
            errors.message = "Message is required!";
        } else if (values.message.length < 10) {
            errors.message = "Requires 10 or more charaters!";
        }
        return errors;

    }

    //--------------------------------------------------------------------


    return (
        <Container align="center" sx={{ backgroundColor: "primary.light", maxWidth: "false" }}>
            {/* <pre>{JSON.stringify(inputValue, undefined, 2)}</pre> */}
            {Object.keys(inputErrors).length === 0 && isSubmit ? <Validation /> : null}

            <Grid container columnSpacing={{ xs: 1, sm: 2, md: 3 }} xs={6} sx={{ borderRadius: '16px' }} component="form" onSubmit={handleSubmit}>
                <Grid xs={6} sx={{
                    display: "inline-block", maxWidth: "250px", padding: "5px 5px 10px 0"
                }} >
                    <Typography variant="subtitle2" >"1 (347) 789-0449"</Typography>
                    <Typography variant="subtitle2" >edgarx28@hotmail.com</Typography>
                    <Typography variant="subtitle2" >edgarx28@hotmail.com</Typography>
                    <Typography variant="subtitle2" >edgarx28@hotmail.com</Typography>
                    <Typography variant="subtitle2" >edgarx28@hotmail.com</Typography>
                </Grid>


                <Grid xs={6} sx={{ display: "inline-block", maxWidth: "250px", padding: "10px" }}>
                    <TextField label="Name"
                        className="form-name"
                        id="name"
                        type="text"
                        value={inputValue.name}
                        placeholder="Enter name"
                        onChange={handleNameInput}
                        color="primary"
                        fullWidth="20px"
                    />

                    <p>{inputErrors.name}</p>

                    <TextField label="E-mail"
                        className="form-email"
                        id="email"
                        type="text"
                        value={inputValue.email}
                        placeholder="Your email"
                        onChange={handleEmailInput}
                        fullWidth="20px"

                    />

                    <p>{inputErrors.email}</p>

                    <TextField label="Message"
                        className="form-message"
                        maxRows={4}
                        fullWidth="20px"
                        multiline
                        type="text"
                        value={inputValue.message}
                        placeholder="What's your message for me?"
                        onChange={handleMessageInput}
                        align="right"
                    />

                    <p>{inputErrors.message}</p>

                    <Button variant="contained"
                        color="secondary"
                        endIcon={<SendIcon />}
                        className="btn-submit"
                        type="submit"> Send
                    </Button>
                </Grid>
            </Grid>

        </Container>
    )
}

export default Form

