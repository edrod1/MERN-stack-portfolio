import React, { useState } from 'react'

const Contact = () => {
    const [textInput, setTextInput] = useState("");

    const handleInput = (event) => {

        setTextInput(event.target.value);
    }
    console.log({ textInput });
    return (
        <>
            <h1>Contact</h1>
            <form>
                <input type="text" id="fName" value={textInput} onChange={handleInput} />
                <input type="text" id="lName" />
                <input type="text" id="message" />
                <button type="submit"> Submit</button>
            </form>

        </>
    )
}

export default Contact