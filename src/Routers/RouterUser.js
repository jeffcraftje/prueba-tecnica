import { Navigate, Route, Routes } from 'react-router-dom'
import { AddPokemon } from '../Components/DataPokemon/AddPokemon';
import  DetallePokemon  from '../Components/DataPokemon/DetallePokemon';
import Home from '../Container/Home';


function RouterUser() {
  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<AddPokemon />} />
        <Route path="/detalle" element={<DetallePokemon />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
  )
}

export default RouterUser;