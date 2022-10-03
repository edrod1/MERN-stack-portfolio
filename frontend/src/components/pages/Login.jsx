import { Container, TextField, Typography, Box } from "@mui/material"
import { useState } from "react"
import { useLogin } from "../../hooks/useLogin"

const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const { login, error, isLoading } = useLogin()

    const handleSubmit = async (e) => {
        e.preventDefault()
        await login(email, password)
    }
    return (
        <>
            <Box sx={{ backgroundColor: "primary.main2", color: "secondary.main" }}>
                <Typography sx={{ padding: "10px 0 0 0" }}
                    variant="h3" align="center" fontFamily="Chilanka"
                >Admin</Typography>
            </Box>

            <Container align="center" >

                <Box sx={{ backgroundColor: "primary.light", display: "inline-block", maxWidth: "250px", padding: "5px 5px 10px 0" }} >
                    <form onSubmit={handleSubmit}>
                        <TextField
                            sx={{ padding: "10px", marginTop: "10px" }}
                            label="E-mail"
                            id="email"
                            type="text"
                            placeholder="Admin email"
                            onChange={(e) => setEmail(e.target.value)}
                            value={email}
                        />
                        <TextField
                            sx={{ padding: "10px" }}
                            label="Password"

                            type="password"
                            placeholder="Password"
                            onChange={(e) => setPassword(e.target.value)}
                            value={password}
                        />
                        <button disabled={isLoading}>Log in</button>
                        {error && <div>{error}</div>}
                    </form>

                </Box>


            </Container>
        </>
    )
}
export default Login