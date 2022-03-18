import React from 'react';
import { Button, Form } from 'react-bootstrap';
import NavbarCom from '../Navbars/NavbarCom'
import { useForm } from '../../Hooks/useForm'
import { useDispatch } from 'react-redux';
import {addSyn} from '../../Redux/actions/actionPokemon'
import { fileUpload } from '../../helpers/FireUpload'
import {ListaPokemos} from './ListaPokemos'

export const AddPokemon = () => {
    const dispatch = useDispatch();

    const [values, handleInputChange, reset] = useForm({
        abilidad1: "",
        abilidad2: "",
        altura: "",
        codigo: "",
        name: "",
        peso: "",
        species: "",
        species1: "",
        front_default: "",
        hp: "",
        attack: "",
        defense: "",
        specialAttack: "",
        specialDefense: "",
        speed: "",
        tipo: "",
        tipo2: ""
    })
    const { abilidad1, abilidad2, speed, tipo, tipo2, altura, codigo, name, peso, species, species1, hp, attack, defense, specialDefense, specialAttack } = values

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addSyn(values))
        reset()
    }

    const handleFileChange1 = (e) => {
        const file = e.target.files[0]
        fileUpload(file)
            .then(resp => {
                values.front_default = resp
            })
            .catch(error => {
                console.log(error.message);
            })
    }

    return (
        <div>
            <NavbarCom />
            <div className="forms">
                <h1>Agregar Productos</h1>
                <Form className="logn2" onSubmit={handleSubmit}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label className="textlogin">Nombre Pokemon</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Nombre"
                                name="name"
                                value={name}
                                onChange={handleInputChange}
                                required
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label className="textlogin">Codigo</Form.Label>
                            <Form.Control
                                type="Number"
                                placeholder="Nombre"
                                name="codigo"
                                value={codigo}
                                onChange={handleInputChange}
                                required
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label className="textlogin">Peso</Form.Label>
                            <Form.Control
                                type="Number"
                                placeholder="Ingresa Peso"
                                name="peso"
                                value={peso}
                                onChange={handleInputChange}
                                required
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label className="textlogin">Altura</Form.Label>
                            <Form.Control
                                type="Number"
                                placeholder="Altura"
                                name="altura"
                                value={altura}
                                onChange={handleInputChange}
                                required
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label className="textlogin">Evolucion #1</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Evolucion 1"
                                name="species"
                                value={species}
                                onChange={handleInputChange}
                                required
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label className="textlogin">Evolucion #2</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Evolucion 2"
                                name="species1"
                                value={species1}
                                onChange={handleInputChange}
                                required
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label className="textlogin">Habilidad #1</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="habilidad 1"
                                name="abilidad1"
                                value={abilidad1}
                                onChange={handleInputChange}
                                required
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label className="textlogin">Habilidad #2</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="habilidad 2"
                                name="abilidad2"
                                value={abilidad2}
                                onChange={handleInputChange}
                                required
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label className="textlogin">Vida Pokemon</Form.Label>
                            <Form.Control
                                type="Number"
                                placeholder="ingresa vida"
                                name="hp"
                                value={hp}
                                onChange={handleInputChange}
                                required
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label className="textlogin">attack Pokemon</Form.Label>
                            <Form.Control
                                type="Number"
                                placeholder="ingresa attack"
                                name="attack"
                                value={attack}
                                onChange={handleInputChange}
                                required
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label className="textlogin">defense Pokemon</Form.Label>
                            <Form.Control
                                type="Number"
                                placeholder="ingresa defense"
                                name="defense"
                                value={defense}
                                onChange={handleInputChange}
                                required
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label className="textlogin">special-attack Pokemon</Form.Label>
                            <Form.Control
                                type="Number"
                                placeholder="ingresa special-attack"
                                name="specialAttack"
                                value={specialAttack}
                                onChange={handleInputChange}
                                required
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label className="textlogin">special-defense Pokemon</Form.Label>
                            <Form.Control
                                type="Number"
                                placeholder="ingresa special-defense"
                                name="specialDefense"
                                value={specialDefense}
                                onChange={handleInputChange}
                                required
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label className="textlogin">speed Pokemon</Form.Label>
                            <Form.Control
                                type="Number"
                                placeholder="speed Pokemon"
                                name="speed"
                                value={speed}
                                onChange={handleInputChange}
                                required
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label className="textlogin">tipo #1</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="estilo"
                                name="tipo"
                                value={tipo}
                                onChange={handleInputChange}
                                required
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label className="textlogin">tipo #2</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="estilo"
                                name="tipo2"
                                value={tipo2}
                                onChange={handleInputChange}
                                required
                            />
                        </Form.Group>

                        <Form.Group className="mb-2" controlId="formBasicEmail">
                            <Form.Label className="textlogin">Imagen Pokemon</Form.Label>
                            <Form.Control
                                type="file"
                                name="front_default"
                                onChange={handleFileChange1}
                                required
                            />
                        </Form.Group>
                    <Button className="botonLogins" variant="primary" type="submit">Agregar</Button>
                </Form>
                
            </div>
            <ListaPokemos />
        </div>
    )
}
