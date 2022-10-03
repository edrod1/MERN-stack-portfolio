import { React, useState, useEffect, useRef } from 'react'
import Validation from './validation';
import { TextField, Typography, Container, Button, Grid, Divider } from "@mui/material"
import SendIcon from '@mui/icons-material/Send';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import emailjs from '@emailjs/browser';

const { REACT_APP_SERVICE_ID, REACT_APP_TEMPLATE_ID, REACT_APP_PUBLIC_KEY } = process.env

const Form = () => {

    const form = useRef();
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

        emailjs.sendForm(`${REACT_APP_SERVICE_ID}`, `${REACT_APP_TEMPLATE_ID}`, form.current, `${REACT_APP_PUBLIC_KEY}`
        ).then((result) => {
            alert("Your message has been sent!");
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
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

            <Typography variant="h5" mt="5%" color="third.main">Hey there. Would you like to reach out?</Typography>

            <Grid container columnSpacing={{ xs: 1, sm: 2, md: 3 }} mt="5%" sx={{ borderRadius: '16px' }} component="form" ref={form} onSubmit={handleSubmit}>
                <Grid item={true} xs={6} sx={{
                    backgroundColor: "primary.light2", borderRight: "white solid", display: "inline-block", maxWidth: "250px", padding: "5px 5px 10px 0"
                }} >
                    <Typography variant="h6" sx={{ border: "2px solid", backgroundColor: "primary.main", margin: "0 15px 10px 0", align: "ceneter" }} color="primary.light">You can reach me at :</Typography>
                    <Typography variant="h6" mt="10%" >1 (347) 789-0449</Typography>
                    <Divider sx={{ borderStyle: "dotted none none", borderColor: "inherit light", borderWidth: "5px", width: "10%", margin: "20px auto", display: "block" }} />
                    <Typography variant="h6" >edgarx28@hotmail.com</Typography>
                    <Divider sx={{ borderStyle: "dotted none none", borderColor: "inherit light", borderWidth: "5px", width: "10%", margin: "20px auto", display: "block" }} />
                    <Button variant="contained" href="https://www.linkedin.com/in/edgar-rodriguez-739b2a174"><LinkedInIcon /></Button>


                </Grid>
                <Grid item={true} xs={6} sx={{
                    backgroundColor: "primary.light2", display: "inline-block", maxWidth: "250px", padding: "5px 5px 10px 0"
                }}>
                    <Typography variant="h6" sx={{ border: "2px solid", backgroundColor: "primary.main", margin: "0 15px 10px 0", align: "ceneter" }} color="primary.light">You can also send me a message</Typography>
                    <TextField label="Name"
                        className="form-name"
                        id="name"
                        name="name"
                        type="text"
                        value={inputValue.name}
                        placeholder="Enter name"
                        onChange={handleNameInput}
                        color="primary"
                        fullWidth={true}
                    />
                    <p>{inputErrors.name}</p>
                    <TextField label="E-mail"
                        className="form-email"
                        id="email"
                        name="email"
                        type="text"
                        value={inputValue.email}
                        placeholder="Your email"
                        onChange={handleEmailInput}
                        fullWidth={true}
                    />
                    <p>{inputErrors.email}</p>
                    <TextField label="Message"
                        className="form-message"
                        id="message"
                        name="message"
                        rows={4}
                        fullWidth={true}
                        multiline
                        type="text"
                        value={inputValue.message}
                        placeholder="What's your message for me?"
                        onChange={handleMessageInput}
                    />
                    <p>{inputErrors.message}</p>
                    <Button
                        sx={{ margin: "20px 0px 0px 0px" }}
                        variant="contained"
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

