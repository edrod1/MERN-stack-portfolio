import { React, useState, useEffect } from 'react'
import Validation from './validation';

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
    }, [inputErrors]);


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


    return (
        <>
            <pre>{JSON.stringify(inputValue, undefined, 2)}</pre>
            {Object.keys(inputErrors).length === 0 && isSubmit ? <Validation /> : null}
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Name</label>
                    <input
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
                    <label>E-mail</label>
                    <input
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
                    <label>Your Message</label>
                    <input
                        className="form-message"
                        type="text"
                        value={inputValue.message}
                        placeholder="What's your message for me?"
                        onChange={handleMessageInput}
                    />
                </div>
                <p>{inputErrors.message}</p>
                <button className="btn-submit" type="submit"> Submit</button>
            </form>
        </>
    )
}

export default Form

