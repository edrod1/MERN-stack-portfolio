import React, { useState } from 'react'
import { useProjectsContext } from '../../hooks/useProjectsContext';
import { useAuthContext } from '../../hooks/useAuthContext';

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
    <form onSubmit={handleSubmit}>
      <h3>Add a New Project</h3>

      <label>Title:</label>
      <input
        type="text"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
        className={emptyFields.includes("title") ? "error" : ""}
      />

      <label>Discription</label>
      <input
        type="text"
        onChange={(e) => setDiscription(e.target.value)}
        value={discription}
        className={emptyFields.includes("discription") ? "error" : ""}
      />

      <label>Image</label>
      <input
        type="text"
        onChange={(e) => setImage(e.target.value)}
        value={image}
        className={emptyFields.includes("image") ? "error" : ""}
      />

      <button>Add Project</button>
      {error && <div className="error">{error}</div>}
    </form>
  )
}

export default ProjectForm
