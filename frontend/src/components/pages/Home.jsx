import { Box, Typography } from '@mui/material'
import Image from 'mui-image'
import mernPic from "../images/mernPic.png"

import React from 'react'

const Home = () => {
    return (


        <Box >
            <Box sx={{ backgroundColor: "primary.main2", color: "secondary.main" }}>
                <Typography sx={{ padding: "10px 0 0 0" }}
                    variant="h3" align="center"
                >I'm Edgar</Typography>
            </Box>
            <Typography variant="subtitle1" color="secondary.two" align="center" className="intro-p">a programmer.</Typography>

            <Typography variant="h4" align='center' color="third.main" mt="30px" >Hello there,</Typography>
            <Box align="center" sx={{ margin: "10px 25% 30px 25%", display: "inline-block" }}>
                <Box sx={{ float: "left", margin: "auto 0 -10 100px" }} width="40%" maxWidth="md">
                    <Image src={mernPic} height="100%" />
                </Box>

                <Box sx={{}} maxWidth="lg">
                    <Typography variant="h5" mt="20px" padding="0 5px 5px 10px" >I am a 24 year old Full Stack Web Developer from York, PA with a passion in creating interactive applications and experiences online.
                    </Typography>
                </Box>
            </Box>
        </Box>
    )
}

export default Home
