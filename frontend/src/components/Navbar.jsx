import React from 'react'
import { Link, useMatch, useResolvedPath } from "react-router-dom";
import { useLogout } from "../hooks/useLogout"
import { useAuthContext } from '../hooks/useAuthContext';

const Navbar = () => {
    const { logout } = useLogout()
    const { admin } = useAuthContext()
    const handleClick = () => {
        logout()
    }

    return (
        <nav className="nav">
            <Link
                to="/" className="site-title">Edgar Codes
            </Link>
            {admin && (
                <div>
                    <span>{admin.email}</span>
                    <button onClick={handleClick}>Log out</button>
                </div>)}

            <ul>

                <CustomLink to="/projects">Projects</CustomLink>
                <CustomLink to="/about">About</CustomLink>
                <CustomLink to="/contact">Contact</CustomLink>
                {!admin && (
                    <div>
                        <CustomLink to="/login">Login</CustomLink>
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