import React from 'react'

const Footer = () => {
    const currentYear = new Date().getFullYear()
    return (
        <div>
            <h1>Copyright {currentYear}</h1>
        </div>
    )
}

export default Footer