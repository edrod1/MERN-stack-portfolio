import React from 'react'

const Footer = () => {
    const currentYear = new Date().getFullYear()
    return (
        <div>Copyright {currentYear}</div>
    )
}

export default Footer