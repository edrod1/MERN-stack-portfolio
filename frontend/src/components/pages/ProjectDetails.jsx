import { Button, Card, CardActions, CardContent, CardMedia, Grid, Typography } from '@mui/material'
import React from 'react'
import { useProjectsContext } from "../../hooks/useProjectsContext"
import { useAuthContext } from '../../hooks/useAuthContext'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

const ProjectDetails = ({ project }) => {
    const { dispatch } = useProjectsContext()
    const { admin } = useAuthContext()

    const handleClick = async () => {
        if (!admin) {
            return
        }
        const response = await fetch("http://localhost:5000/api/projects/" + project._id, {
            method: "DELETE",
            headers: {
                "Authorization": `Bearer ${admin.token}`
            }
        })
        const json = await response.json()

        if (response.ok) {
            dispatch({ type: "DELETE_PROJECT", payload: json })
        }
    }

    return (
        <Grid item xs={12} sm={6} md={4} key={project._id}>
            <Card sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
                <CardMedia sx={{ paddingTop: "16:9" }}
                    component="img"
                    image={project.image} />
                <CardContent sx={{ flexGrow: "1" }}>
                    <Typography variant="h6" color="primary.main2" gutterBottom>
                        {project.title}
                    </Typography>
                    <Typography varient="h5">
                        {project.discription}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size='sm' color="primary" href='https://github.com/edrod1?tab=repositories'>Code</Button>
                </CardActions>
                <span onClick={handleClick} className="deleteP"><DeleteForeverIcon /></span>
            </Card>

        </Grid>
    )
}

export default ProjectDetails