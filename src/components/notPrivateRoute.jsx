

import React, { useContext } from 'react'

import { Navigate, Outlet, useLocation } from 'react-router-dom'

import { AuthContext } from './authContext'

export default function PrivateRoute({ isLogged }) {
  const location = useLocation()

/*   const {
    isLogged
  } = useCon text(AuthContext)*/

  return (
    isLogged ? <Navigate to='/home' /> : <Outlet />
  )
}


