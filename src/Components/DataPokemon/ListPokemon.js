import React, { useEffect } from 'react'
import { Image, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';
import { cardPokemonAsyn } from '../../Redux/actions/actionPokemon';



export const ListPokemon = () => {
    const dispatch = useDispatch();

    const { pokemon } = useSelector(store => store.pokemon)
    
    const red = (e) => {
        if (pokemon === undefined) {
            dispatch(cardPokemonAsyn())
        } else {
        }
    }
    const editar = (codigo) => {
        const obtenerPro = pokemon.find(pokemon => pokemon.codigo === codigo)
        console.log(obtenerPro)
        localStorage.setItem('pokemon', JSON.stringify(obtenerPro))
        window.location.href = '/detalle'
    }

    useEffect(() => {
        red()
    })

    return (
        <div>
            <Row xs={1} md={2} className="g-3 listCard">
                {
                    pokemon?.map((r, index) => {
                        const { name, codigo, sprites } = r
                        return (
                            <div className="card mb-3" key={index} onClick={() => editar(codigo)}>
                                <div className="row g-0">
                                    <div className="col-md-4">
                                        <Image src={sprites.other.home.front_default} className="img-fluid rounded-start" alt="..."></Image>
                                    </div>
                                    <div className="col-md-8">
                                        <div className="card-body">
                                            <h5 className="card-titl">#{codigo}</h5>
                                            <div className="card-s">
                                                <h5 className="card-title">{name}</h5>
                                            </div>
                                            <h5 className="card-tit">Tipo: {r.tipo[0].type.name} {r.tipo[1].type.name}</h5>
                                            <p className="card-text">evolucion: </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }

            </Row>
        </div>
    )
}