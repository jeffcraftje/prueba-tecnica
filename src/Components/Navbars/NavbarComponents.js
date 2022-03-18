import React from 'react'
import { Button, Image, Nav } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { Navigate } from 'react-router-dom'
import { logoutAsyn } from '../../Redux/actions/actionLogin'

const NavbarComponents = () => {

    const dispatch = useDispatch();
    const handleLogout = () => {
        dispatch(logoutAsyn());
        Navigate("/login")
    }
    return (
        <div>
            <Nav className="justify-content-end navs" activeKey="/home">
                <Nav.Item className="itemNav itemNav1">
                    <div className="nav-buscar">
                        <input type="text" className="nav-sarch" />
                        <Button className="btn2"><Image className="images" src="https://res.cloudinary.com/dsjmgbuff/image/upload/v1647479632/search_j4e9ki.png"></Image></Button>
                    </div>
                </Nav.Item >
                <Nav.Item className="itemNav">
                    <Nav.Link href="/home">Inicio</Nav.Link>
                </Nav.Item>
                <Nav.Item className="itemNav">
                    <Nav.Link eventKey="link-1"  href="/add">Agregar Pokemon</Nav.Link>
                </Nav.Item>
                <Nav.Item className="itemNav">
                    <Nav.Link eventKey="link-2" onClick={() => handleLogout()}>Cerrar Sesión</Nav.Link>
                </Nav.Item>
            </Nav>
        </div>
    )
}

export default NavbarComponents