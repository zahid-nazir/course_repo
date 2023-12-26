import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "../App";

export default function Navbar()
{
    const {theme, themeToggle, changeTheme} = useContext(ThemeContext);

    return (
        <nav style={{background:theme.background}} className="navbar navbar-expand-lg border-bottom box-shadow py-3 mb-3">
            <div className="container">
                <Link className="navbar-brand" style={{color:theme.foreground}} to="/">MERN - Courses APP</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                    <Link style={{color:theme.foreground}} className="nav-link" aria-current="page" to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                    <Link style={{color:theme.foreground}} className="nav-link" to="/courses">Courses</Link>
                    </li>
                </ul>
                <button type='button' className='btn btnTheme mr-auto' onClick={changeTheme} style={{background: theme.foreground, color: theme.background}}>
                    {themeToggle==='dark' ? 'NavBar Light' : 'NavBar Dark'}
                </button>
                </div>
            </div>
        </nav>
    );
}