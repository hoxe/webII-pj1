

import React, {useContext} from 'react'

import { Navigate, Outlet, useLocation } from 'react-router-dom'
import { AuthContext } from './authContext'

export default function PrivateRoute({ isLogged}) {
 
  const location = useLocation()

/*   const {
    isLogged
  } = useContext(AuthContext) */
  return (
    isLogged ? <Outlet /> : <Navigate to='/login' state={{ from: location }} replace />
  )
}


