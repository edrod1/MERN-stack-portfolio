import React from 'react'
import { Link, useMatch, useResolvedPath } from "react-router-dom";
import { useLogout } from "../hooks/useLogout"
import { useAuthContext } from '../hooks/useAuthContext';
import LockIcon from '@mui/icons-material/Lock';
import { Box, Button } from '@mui/material';
import LogoutIcon from '@mui/icons-material/Logout';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import LensBlurRoundedIcon from '@mui/icons-material/LensBlurRounded';

const Navbar = () => {
    const { logout } = useLogout()
    const { admin } = useAuthContext()
    const handleClick = () => {
        logout()
    }

    return (
        <nav className="nav">
            <Link
                to="/" className="site-title">Edgar C<LensBlurRoundedIcon />des
            </Link>
            {admin && (
                <Box align="center">
                    <Box component="span" sx={{ color: "secondary.main" }}>{admin.email}<AdminPanelSettingsIcon /></Box>
                    <Button variant="container" onClick={handleClick}><LogoutIcon /></Button>
                </Box>)}

            <ul>

                <CustomLink to="/projects">Projects</CustomLink>
                <CustomLink to="/about">About</CustomLink>
                <CustomLink to="/contact">Contact</CustomLink>
                {!admin && (
                    <div>
                        <CustomLink to="/login"><LockIcon /></CustomLink>
                    </div>
                )}
            </ul>
        </nav>
    );
}

function CustomLink({ to, children, ...props }) {
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({ path: resolvedPath.pathname, end: true })
    return (
        <li className={isActive ? "active" : ""}>
            <Link
                to={to} {...props}>
                {children}
            </Link>
        </li>
    )
}

export default Navbar