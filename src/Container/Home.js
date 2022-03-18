import React from 'react'
import { ListPokemon } from '../Components/DataPokemon/ListPokemon'
import NavbarComponents from '../Components/Navbars/NavbarComponents'

const Home = () => {
  return (
    <div>
      <NavbarComponents />
      <ListPokemon />
    </div>
  )
}

export default Home