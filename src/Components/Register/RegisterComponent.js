import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useForm } from '../../Hooks/useForm';
import { useDispatch } from 'react-redux';
import { registroEmailPassword } from '../../Redux/actions/actionRegister'

const RegisterComponent = () => {

  const dispatch = useDispatch()

  const [values, handleInputChange, reset] = useForm({
    email: '',
    password: '',
    name: ''
  })
  const { email, password, name } = values

  const handleRegister = (e) => {
    e.preventDefault();
    dispatch(registroEmailPassword(email, password, name))
    reset()
  }
  return (
    <div>
      <Form className="login" onSubmit={handleRegister}>
        <h1>Iniciar Sesión</h1>
        <Form.Group className="mb-3" controlId="formBasicmail">
          <Form.Label className="textlogin">Nombre Completo</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ingresa nombre"
            name="name"
            value={name}
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label className="textlogin">Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Ingresa Correo"
            name="email"
            value={email}
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label className="textlogin">Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Ingresa Password"
            name="password"
            value={password}
            onChange={handleInputChange}
          />
        </Form.Group>
        <Button className="botonLogin" variant="primary" type="submit">
          Registrarse
        </Button>
        <br />
        <h5 className="LoginRegister">No tienes Cuenta? <Link to="/">Login</Link></h5>
      </Form>
    </div>
  )
}

export default RegisterComponent;