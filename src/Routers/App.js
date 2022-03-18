import React, { useEffect, useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { LoginComponent } from '../Components/Login/LoginComponent'
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import  RouterUser from './RouterUser'
import { Spinner } from 'react-bootstrap';
import PublicRouter from './PublicRouter'
import PrivateRouter from './PrivateRouter'
import RegisterComponent from '../Components/Register/RegisterComponent'

const App = () => {
  const [isLoggedId, setIsLoggedId] = useState(false);

  const [checking, setChecking] = useState(true);

  useEffect(() => {
    const auth = getAuth()
    onAuthStateChanged(auth, (user) => {
      if (user?.uid) {
        setIsLoggedId(true)
      } else {
        setIsLoggedId(false)
      }
      setChecking(false)
    })
  }, [])

  if (checking) {
    return <Spinner animation="border" />
  }
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/Login" element={
          <PublicRouter isAuthenticated={isLoggedId}>
            <LoginComponent />
          </PublicRouter>
        } />
        <Route path="/Register" element={
          <PublicRouter isAuthenticated={isLoggedId}>
            <RegisterComponent />
          </PublicRouter>
        } />
        <Route path="/*" element={
          <PrivateRouter isAuthenticated={isLoggedId}>
            <RouterUser />
          </PrivateRouter>
        } />
      </Routes>
    </BrowserRouter>
  )
}

export default App