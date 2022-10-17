
import './App.scss'




import Routers from './components/route';

import { AuthContext } from './components/authContext'
import { useContext } from 'react'

function App() {

  //const isLogged = true;
  const {
    isLogged
  } = useContext(AuthContext)
  return (
    <Routers isLogged={isLogged} />
  )
}

export default App
