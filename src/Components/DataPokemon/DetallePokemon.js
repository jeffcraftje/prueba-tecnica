import React from 'react'
import { Button, Image } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { useForm } from '../../Hooks/useForm'
import { pokemonDeleAsyn } from '../../Redux/actions/actionPokemon'

const DetallePokemon = () => {

    const dispatch = useDispatch();
    const { pokemon } = useSelector(store => store.pokemon)
    const data = JSON.parse(localStorage.getItem('pokemon'))
    console.log(data)

    const [values] = useForm({
        name: data.name,
        peso: data.peso,
        sprites: data.sprites,
        codigo: data.codigo,
        abilidad: data.abilidad,
        altura: data.altura,
        stats: data.stats,
        tipo: data.tipo
    })
    const { name, peso, sprites, codigo, abilidad, altura, tipo } = values

    return (
        <div>
            <div className="content1">
                <div className="content">
                    <div className="titulo-card">
                        <h1>{name}</h1>
                    </div>
                </div>
                <div className="img-info">
                    <div>
                        <Image src={sprites.other.home.front_default}></Image>
                    </div>
                    <div className="image">
                        <div className="perfil">
                            <h1>Perfil  #{codigo}</h1>
                        </div>
                        <div className="data">
                            <div className='habilidad'>
                                <h1 className="habis">Peso</h1>
                                <div className="img-info">
                                    <h1 className="abi1">{peso} Lb</h1>
                                </div>
                            </div>
                            <div className='habilidad'>
                                <h1 className="habis">Altura</h1>
                                <div className="img-info">
                                    <h1 className="abi1">0.{altura} Mts </h1>
                                </div>
                            </div>

                            <div className='habilidad'>
                                <h1 className="habis">Tipo</h1>
                                <div className="img-info">
                                    <h1 className="abi1">{tipo[0].type.name}</h1>
                                    <h1 className="abi2">{tipo[1].type.name}</h1>
                                </div>
                            </div>
                            <div className='habilidad'>
                                <h1 className="habis">Habilidad</h1>
                                <div className="img-info">
                                    <h1 className="abi1">{abilidad[0].ability.name}</h1>
                                    <h1 className="abi2">{abilidad[1].ability.name}</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>

                </div>
            </div>
            <Button className="btn4" variant="danger" onClick={() => dispatch(pokemonDeleAsyn(pokemon.codigo))}>Eliminar</Button>
        </div>
    )
}
export default DetallePokemon;