import { useFormik } from 'formik'
import React from 'react'
import { Button, Form, Image, Nav } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { Navigate } from 'react-router-dom'
import { logoutAsyn } from '../../Redux/actions/actionLogin'
import * as Yup from 'yup'
import { searchSync } from '../../Redux/actions/actionPokemon'

const NavbarComponents = () => {

    const formik = useFormik({
        initialValues:{
            search:''
        },
        validationSchema: Yup.object({
            search: Yup.string().required()
        }),
        onSubmit:({search}) => {
            console.log(search)
            dispatch(searchSync(search))
        }
    })

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
                        <Form onSubmit={formik.handleSubmit}>
                            <input type="text" name="search" className="nav-sarch" onChange={formik.handleChange}/>
                            <Button className="btn2" type="submit"><Image className="images" src="https://res.cloudinary.com/dsjmgbuff/image/upload/v1647479632/search_j4e9ki.png"></Image></Button>
                        </Form>
                    </div>
                </Nav.Item >
                <Nav.Item className="itemNav">
                    <Nav.Link href="/home">Inicio</Nav.Link>
                </Nav.Item>
                <Nav.Item className="itemNav">
                    <Nav.Link eventKey="link-1" href="/add">Agregar Pokemon</Nav.Link>
                </Nav.Item>
                <Nav.Item className="itemNav">
                    <Nav.Link eventKey="link-2" onClick={() => handleLogout()}>Cerrar Sesión</Nav.Link>
                </Nav.Item>
            </Nav>
        </div>
    )
}

export default NavbarComponents