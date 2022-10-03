import { Box, Typography } from '@mui/material'
import Image from 'mui-image'
import React from 'react'
import mernPic2 from "../images/mernPic2.png"
import mernPic3 from "../images/mernPic3.png"
const About = () => {
    return (
        <>
            <Box sx={{ backgroundColor: "primary.main2", color: "secondary.main" }}>
                <Typography sx={{ padding: "10px 0 0 0" }}
                    variant="h3" align="center"
                >About</Typography>
            </Box>
            <Box align="center" sx={{ margin: "10px 25% 30px 25%", display: "inline-block" }} maxWidth="md">
                <Box sx={{ float: "right", margin: "auto 0 -10 100px" }} width="40%" maxWidth="md">
                    <Image src={mernPic2} height="100%" />
                </Box>
                <Box sx={{ float: "right", margin: "auto 0 -10 100px" }} width="10%" maxWidth="md">
                    <Image src={mernPic3} height="10%" />
                </Box>
                <Box>
                    <Typography variant="h5" color="primary.main" align="left">Edgar is a 24 year old who chose to change the script and persue his dream of becoming a programmer. With some patience and tenacity Edgar was able to come out on the other side and face the fact that he can create useful interfaces which made him realize that he can put down the fins and dive-helmet and pick up the keyboard and mouse as his past life as a commercial diver involve jumping into the unknown help build bridges salvage and maintaining some of the communities marine infrastructure. He picked up CSS, HTML, JavaScript and took on  node.js, express.js, Mongo DB, React to enhance web design and functionality, it has both the love for the front-end and the back-end as well as anything in between.</Typography>
                </Box>
            </Box>
        </>

    )
}

export default About