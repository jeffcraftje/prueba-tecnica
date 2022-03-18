import React from 'react'
import { Button, Container, Form } from 'react-bootstrap'
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import {useForm } from '../../Hooks/useForm'
import { loginEmailPassword, loginFacebookAction, loginGoogle } from '../../Redux/actions/actionLogin';

export const LoginComponent = () => {
    const dispatch = useDispatch();

    const [values, handleInputChange, reset] = useForm({
        email: '',
        password: ''
    })
    const { email, password } = values

    const handleGoogle = () => {
        dispatch(loginGoogle());
    }
    const handleFacebook = () => {
        dispatch(loginFacebookAction());
    }
    const handleSubmitLogin = (e) => {
        e.preventDefault()
        dispatch(loginEmailPassword(email, password))
        reset()
    }
    return (
        <div>
            <Form className="login" onSubmit={handleSubmitLogin}>
                <h1>Iniciar Sesión</h1>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label className="textlogin">Correo Electronico</Form.Label>
                    <Form.Control
                        type="email"
                        placeholder="Enter email"
                        name="email"
                        value={email}
                        onChange={handleInputChange}
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label className="textlogin">Password</Form.Label>
                    <Form.Control
                        type="password"
                        placeholder="Password"
                        name="password"
                        value={password}
                        onChange={handleInputChange}
                    />
                </Form.Group>
                <Button className="botonLogin" variant="primary" type="submit">Iniciar</Button>
                <br />
                <Container className="auth__social-networks">
                    <Container className="google-btn" onClick={handleGoogle}>
                        <Container className="google-icon-wrapper">
                            <h5 className="LoginRegister"><img className="google-icon" src="https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png" alt="google button" /> Iniciar Con Google</h5>
                        </Container>
                    </Container>
                </Container>
                <Container className="auth__social-networks">
                    <Container className="google-btn" onClick={handleFacebook}>
                        <Container className="google-icon-wrapper">
                            <h5 className="LoginRegister"><img className="google-icon1" src="https://cdn-icons-png.flaticon.com/512/124/124010.png" alt="google button" /> Iniciar Con Facebook</h5>
                        </Container>
                    </Container>
                </Container>
                <h5 className="LoginRegister">No tienes Cuenta? <Link to="/Register">Registrate</Link></h5>
            </Form>
        </div>
    )
}