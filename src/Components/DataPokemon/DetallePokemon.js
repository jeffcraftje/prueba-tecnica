import React from 'react'
import { Image, ProgressBar } from 'react-bootstrap'
import { useForm } from '../../Hooks/useForm'


const DetallePokemon = () => {

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
    const { name, peso, sprites, codigo, abilidad, altura, tipo, stats } = values

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
                <div className="progre">
                    <div className="image">
                        <div className="perfil">
                            <h1>Data Combate</h1>
                        </div>
                        <div className="data">
                            <div className='habilidad'>
                                <h1 className="habis">Peso</h1>
                                <div className="img-inf">
                                    <h1 className="abi1">{stats[0].stat.name}:</h1>
                                    <ProgressBar variant="success" now={stats[0].base_stat} label={`${stats[0].base_stat}`} />
                                </div>
                                <div className="img-inf">
                                    <h1 className="abi1">{stats[1].stat.name}:</h1>
                                    <ProgressBar variant="danger" now={stats[1].base_stat} label={`${stats[1].base_stat}`} />
                                </div>
                                <div className="img-inf">
                                    <h1 className="abi1">{stats[2].stat.name}:</h1>
                                    <ProgressBar variant="warning" now={stats[2].base_stat} label={`${stats[2].base_stat}`} />
                                </div>
                                <div className="img-inf">
                                    <h1 className="abi1">{stats[3].stat.name}:</h1>
                                    <ProgressBar variant="danger" now={stats[3].base_stat} label={`${stats[3].base_stat}`} />
                                </div>
                                <div className="img-inf">
                                    <h1 className="abi1">{stats[4].stat.name}:</h1>
                                    <ProgressBar now={stats[4].base_stat} label={`${stats[4].base_stat}`} />
                                </div>
                                <div className="img-inf">
                                    <h1 className="abi1">{stats[5].stat.name}:</h1>
                                    <ProgressBar now={stats[5].base_stat} label={`${stats[5].base_stat}`} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default DetallePokemon;