import React from 'react'
import { Nav } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { Navigate } from 'react-router-dom'
import { logoutAsyn } from '../../Redux/actions/actionLogin'

const NavbarCom = () => {

    const dispatch = useDispatch();
    const handleLogout = () => {
        dispatch(logoutAsyn());
        Navigate("/login")
    }
    return (
        <div>
            <Nav className="justify-content-end navs" activeKey="/home">
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

export default NavbarCom