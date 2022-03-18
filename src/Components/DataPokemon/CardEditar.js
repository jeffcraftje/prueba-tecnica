import React, { useState } from 'react'
import { Button, Form, Modal } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { fileUpload } from '../../helpers/FireUpload';
import { useForm } from '../../Hooks/useForm';
import { editPokemonAsync } from '../../Redux/actions/actionPokemon';


const CardEditar = ({ modal }) => {

    const dispatch = useDispatch();

    console.log(modal)

    const [show, setShow] = useState(true);

    const [dat] = useState({});

    console.log(dat)

    const handleClose = () => setShow(false);

    const [values, handleInputChange] = useForm({
        abilidad1: modal.abilidad1,
        abilidad2: modal.abilidad2,
        altura: modal.altura,
        codigo: modal.codigo,
        name: modal.name,
        peso: modal.peso,
        species: modal.species,
        species1: modal.species1,
        front_default: modal.front_default,
        hp: modal.hp,
        attack: modal.attack,
        defense: modal.defense,
        specialAttack: modal.specialAttack,
        specialDefense: modal.specialDefense,
        speed: modal.speed,
        tipo: modal.tipo,
        tipo2: modal.tipo2
    })
    const { abilidad1, abilidad2, speed, tipo, tipo2, altura, codigo, name, peso, species, species1, hp, attack, defense, specialDefense, specialAttack } = values

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(editPokemonAsync(name, values))
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
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Editar Producto</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form className="logins" onSubmit={handleSubmit}>
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
                        <Button className="botonLogin" variant="primary" type="submit" onClick={handleClose}>Guardar</Button>
                        <Button className="botonLogin" variant="primary" onClick={handleClose} >Close</Button>
                        <br />
                    </Form>

                </Modal.Body>


            </Modal>
        </div>
    )
}

export default CardEditar