
import { Button, Card, CardActions, CardContent, CardMedia, Container, Grid, ThemeProvider, Typography } from '@mui/material'
import React from 'react'
import theme from '../../styles';


const Projects = () => {
    const cards = [0, 1, 2, 3, 4, 5]
    return (
        <>
            <ThemeProvider theme={theme}>
                <Container align="center">
                    <Typography variant="h3">Projects</Typography>
                    <Typography variant="subtitle1" maxWidth="sm">Something nedds to go her to fill this spot describing what this page is all about for and potental employers or viewers.Something nedds to go her to fill this spot describing what this page is all about for and potental employers or viewers.</Typography>
                </Container>
                {/* -------------------------------------------------------------------------------- */}
                <Container maxWidth="md" sx={{ padding: "20px 0" }}>
                    <Grid container spacing={4} >

                        {cards.map(() => (
                            <Grid item key={cards} xs={12} sm={6} md={4}>
                                <Card sx={{
                                    height: "100%",
                                    display: "flex",
                                    flexDirection: "column"
                                }}  >
                                    <CardMedia sx={{ paddingTop: "16:9" }}
                                        component="img"
                                        image="https://source.unsplash.com/random"

                                    />
                                    <CardContent sx={{ flexGrow: "1" }}>
                                        <Typography variant="h5" color="secondary.main" id="title" gutterBottom>
                                            Heading
                                        </Typography>
                                        <Typography varient="h6" id="discription">
                                            media card content info
                                        </Typography>
                                    </CardContent>
                                    <CardActions>
                                        <Button size='sm' color="primary">Code</Button>
                                    </CardActions>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </ThemeProvider>
        </>
    )
}

export default Projects