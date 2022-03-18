import React, { useEffect, useState } from 'react'
import { Button, Image, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';
import { cardPokeAsync, pokeDeleAsyn } from '../../Redux/actions/actionPokemons';
import CardEditar from './CardEditar';



export const ListaPokemos = () => {
    const dispatch = useDispatch();

    const [modal, setModal] = useState(false);
    const [data, setData] = useState([])

    const { poke } = useSelector(store => store.oke)
    console.log(poke)
    const red = () => {
        if (poke === undefined) {
            dispatch(cardPokeAsync())
        } else {
        }
    }
    const editar = (codigo) => {
        const obtenerPro = poke.find(pokemon => pokemon.codigo === codigo)
        setModal(true)
        setData(obtenerPro)
    }

    useEffect(() => {
        red()
    })

    return (
        <div>
            <Row xs={1} md={2} className="g-4 listCard">
                {
                    poke?.map((r, index) => {
                        return (
                            <div className="card mb-3" key={r.codigo}>
                                <div className="row g-0">
                                    <div className="col-md-4">
                                        <Image src={r.front_default} className="img-fluid rounded-start" alt="..."></Image>
                                    </div>
                                    <div className="col-md-8">
                                        <div className="card-body">
                                            <h5 className="card-titl">#{r.codigo}</h5>
                                            <div className="card-s">
                                                <h5 className="card-title">{r.name}</h5>
                                            </div>
                                            <h5 className="card-tit">Tipo: </h5>
                                            <p className="card-text">evolucion: </p>
                                        </div>
                                    </div>
                                </div>
                                <Button className="btn4" variant="danger" onClick={() => dispatch(pokeDeleAsyn(r.codigo))}>Eliminar</Button>
                                <Button className="btn3" variant="primary" onClick={() => editar(r.codigo)}>Editar</Button>
                            </div>
                        )
                    })
                }

            </Row>
            {
                modal === true ? <CardEditar modal={data} /> : ''
            }
        </div>
    )
}