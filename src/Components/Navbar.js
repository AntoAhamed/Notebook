import React from 'react'
import homeIcon from './assets/home.png'
import aboutIcon from './assets/about.png'
import contactIcon from './assets/contact.png'
import writeNotesIcon from './assets/writeNotes.png'
import notesIcon from './assets/notes.png'
import { Outlet, Link } from "react-router-dom"

function Navbar() {
    return (
        <>
            <nav className="navbar bg-body-dark fixed-top">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/" >
                        <img src={notesIcon} alt="" height={"40px"} width={"40px"} title='MyNoteBook' />
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                        <div className="offcanvas-header">
                            <h5 className="offcanvas-title" id="offcanvasNavbarLabel">NoteBook</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        <div className="offcanvas-body">
                            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                                <li className="nav-item">
                                    <Link className="nav-link" aria-current="page" to="/" >
                                        <img src={homeIcon} alt="" height={"20px"} width={"20px"} title='Home' />
                                        <span className='p-3'>Home</span>
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/about">
                                        <img src={aboutIcon} alt="" height={"20px"} width={"20px"} title='About' />
                                        <span className='p-3'>About</span>
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/contact">
                                        <img src={contactIcon} alt="" height={"20px"} width={"20px"} title='Contact' />
                                        <span className='p-3'>Contact</span>
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/writeNotes" >
                                        <img src={writeNotesIcon} alt="" height={"20px"} width={"20px"} title='Write Notes' />
                                        <span className='p-3'>Write Notes</span>
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/notes" >
                                        <img src={notesIcon} alt="" height={"20px"} width={"20px"} title='Your Notes' />
                                        <span className='p-3'>Your Notes</span>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>

            <Outlet />
        </>
    )
}

export default Navbar
