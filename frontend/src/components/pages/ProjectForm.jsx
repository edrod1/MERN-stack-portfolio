import React, { useState } from 'react'
import { useProjectsContext } from '../../hooks/useProjectsContext';
import { useAuthContext } from '../../hooks/useAuthContext';
import { Box, TextField, Typography } from '@mui/material';
import AddCircleIcon from '@mui/icons-material/AddCircle';

const ProjectForm = () => {
  const { dispatch } = useProjectsContext()
  const { admin } = useAuthContext()

  const [title, setTitle] = useState("")
  const [discription, setDiscription] = useState("")
  const [image, setImage] = useState("")
  const [error, setError] = useState(null)
  const [emptyFields, setEmptyFields] = useState([])

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!admin) {
      setError("You must be logged in")
      return
    }

    const project = { title, discription, image }

    const response = await fetch("http://localhost:8080/api/projects", {
      method: "POST",
      body: JSON.stringify(project),
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${admin.token}`
      }
    })
    const json = await response.json()

    if (!response.ok) {
      setError(json.error)
      setEmptyFields(json.emptyFields)
    }
    if (response.ok) {
      setTitle("")
      setDiscription("")
      setImage("")
      setError(null)
      setEmptyFields([])
      console.log("New Project Added", json)
      dispatch({ type: "CREATE_PROJECT", payload: json })
    }
  }

  return (
    <>
      <Box sx={{ backgroundColor: "primary.main2", color: "secondary.main" }}>
        <Typography sx={{ padding: "5px 0 10px 0" }}
          variant="h3" align="center"
        >Add New Project</Typography>
      </Box>

      <form onSubmit={handleSubmit}>
        <TextField
          sx={{ padding: "10px" }}
          label="Title"
          placeholder="Title"
          type="text"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          className={emptyFields.includes("title") ? "error" : ""}
        />

        <label></label>
        <TextField
          sx={{ padding: "10px" }}
          label="Discription"
          placeholder="Discription"
          type="text"
          onChange={(e) => setDiscription(e.target.value)}
          value={discription}
          className={emptyFields.includes("discription") ? "error" : ""}
        />

        <label></label>
        <TextField
          sx={{ padding: "10px" }}
          label="Image"
          placeholder="Image"
          type="text"
          onChange={(e) => setImage(e.target.value)}
          value={image}
          className={emptyFields.includes("image") ? "error" : ""}
        />

        <button><AddCircleIcon /></button>
        {error && <div className="error">{error}</div>}
      </form>
    </>
  )
}

export default ProjectForm
