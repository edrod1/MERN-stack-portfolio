
import { Box, Container, Grid, ThemeProvider, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import theme from '../../styles';
// import { useAuthContext } from "../../hooks/useAuthContext"

import ProjectDetails from './ProjectDetails';
// import ProjectForm from './ProjectForm';
import { useProjectsContext } from '../../hooks/useProjectsContext';

const Projects = () => {
    const { projects, dispatch } = useProjectsContext()
    // const { admin } = useAuthContext()

    useEffect(() => {
        const fetchProjects = async () => {
            const response = await fetch("http://localhost:8080/api/projects"
                // , {
                //     headers: {
                //         "Authorization": `Bearer ${admin.token}`
                //     }
                // }
            )
            const json = await response.json()

            if (response.ok) {
                dispatch({ type: "SET_PROJECTS", payload: json })
            }

        }

        fetchProjects()


    }, [dispatch])


    return (
        <>
            <ThemeProvider theme={theme}>

                <Box sx={{ backgroundColor: "primary.main2", color: "secondary.main" }}>
                    <Typography sx={{ padding: "5px 0 10px 0" }}
                        variant="h3" align="center"
                    >I'm Edgar</Typography>
                </Box>
                {/* -------------------------------------------------------------------------------- */}

                <Container maxWidth="md" sx={{ padding: "20px 0" }}>
                    <Grid container spacing={4} >
                        {projects && projects.map((project) => (
                            <ProjectDetails key={project._id} project={project} />
                        ))}
                    </Grid>
                </Container>

            </ThemeProvider>
        </>
    )
}

export default Projects