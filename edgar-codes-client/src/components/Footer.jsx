import React from 'react'

const Footer = () => {
    const currentYear = new Date().getFullYear()
    return (

        <h1
            className="copyright">Copyright {currentYear} Edgar Rodriguez
        </h1>

    )
}

export default Footer