import { React, useState, useEffect } from 'react'
import Validation from './validation';
import { TextField, Typography, Box, CssBaseline, Container, Button } from "@mui/material"
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
        <div >
            {/* <pre>{JSON.stringify(inputValue, undefined, 2)}</pre> */}
            {Object.keys(inputErrors).length === 0 && isSubmit ? <Validation /> : null}

            <Container maxWidth="sm"  >
                <Box component="form" onSubmit={handleSubmit}>
                    <div>
                        <TextField
                            label="Name"
                            className="form-name"
                            id="name"
                            type="text"
                            value={inputValue.name}
                            placeholder="Enter name"
                            onChange={handleNameInput}
                        />
                    </div>
                    <p>{inputErrors.name}</p>
                    <div>
                        <TextField label="E-mail"
                            className="form-email"
                            id="email"
                            type="text"
                            value={inputValue.email}
                            placeholder="Your email"
                            onChange={handleEmailInput}
                        />
                    </div>
                    <p>{inputErrors.email}</p>
                    <div>
                        <TextField label="Message"
                            className="form-message"
                            multiline
                            type="text"
                            value={inputValue.message}
                            placeholder="What's your message for me?"
                            onChange={handleMessageInput}

                        />
                    </div>
                    <p>{inputErrors.message}</p>

                    <Button variant="contained"
                        endIcon={<SendIcon />}
                        className="btn-submit"
                        type="submit"> Send
                    </Button>
                </Box>
            </Container>
        </div>
    )
}

export default Form

