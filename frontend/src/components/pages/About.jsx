import { Box, Typography } from '@mui/material'
import React from 'react'

const About = () => {
    return (
        <div>
            <Box sx={{ backgroundColor: "primary.main2", color: "secondary.main" }}>
                <Typography sx={{ padding: "5px 0 10px 0" }}
                    variant="h3" align="center"
                >About</Typography>
            </Box>
            <p className="about-p">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Viverra adipiscing at in tellus integer feugiat scelerisque varius morbi. Tortor pretium viverra suspendisse potenti nullam ac. Fermentum odio eu feugiat pretium nibh ipsum consequat. Vitae auctor eu augue ut lectus arcu bibendum at varius. Urna cursus eget nunc scelerisque viverra mauris in. Lectus proin nibh nisl condimentum id. Facilisis gravida neque convallis a. Tristique magna sit amet purus gravida quis blandit. Nisi lacus sed viverra tellus in hac habitasse platea dictumst. Semper feugiat nibh sed pulvinar. Sagittis vitae et leo duis ut diam quam. Sed adipiscing diam donec adipiscing tristique risus. Facilisi
            </p>
            Img goes here
        </div>

    )
}

export default About