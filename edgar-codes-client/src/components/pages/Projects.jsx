import { ClassNames } from '@emotion/react'
import { Button, Card, CardContent, CardMedia, Container, Grid, Typography } from '@mui/material'
import React from 'react'

const Projects = () => {
    return (

        <Container className={ClassNames.cardGrid} maxWidth="md">
            <Grid container spacing={4}>
                <Grid item>
                    <Card className={ClassNames.card}>
                        <CardMedia className={ClassNames.cardMedia}
                            image=""
                            title="image title"
                        />
                        <CardContent className={ClassNames.cardContent}>
                            <Typography variant="h5" gutterBottom>

                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Container>

    )
}

export default Projects