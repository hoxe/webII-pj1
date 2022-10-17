import Login from '../pages/login'
import Home from '../pages/home'
import Cadastro from '../pages/cadastro'

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import React, { useContext } from 'react'

import { AuthContext } from './authContext'
import PrivateRoute from './privateRoute';
import NotPrivateRoute from './notPrivateRoute';

export default function Routers({ isLogged }) {



  /* const isLogged = false; */

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PrivateRoute isLogged={isLogged} />}>
          <Route path='home' element={<Home />} />
        </Route>

        <Route element={<NotPrivateRoute isLogged={isLogged} />}>
          <Route path="cadastro" element={<Cadastro />} />
          <Route path='login' element={<Login />} />
        </Route>

        <Route path='*' element={<h1>page not found</h1>} />
      </Routes>
    </BrowserRouter>
  )
}