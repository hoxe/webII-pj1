
import React, { useState, useContext } from 'react'

import {
  createUserWithEmailAndPassword,
  signOut
} from "firebase/auth";

import { AuthContext } from '../../components/authContext'

import { useNavigate } from "react-router-dom";

export default function Cadastro() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const {
    auth,
    isLogged,
    user
  } = useContext(AuthContext)

  const navigate = useNavigate()

  async function Cadastrar() {
    await createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user
        console.log('deu bom!', user)

        navigate('/home')
        

      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        window.alert(errorCode, errorMessage);
      });
    return;
  }

  return (

    <div className="login">
      <h1>Cadastro</h1>

      <div className="input">
        <label>Login</label>
        <input
          placeholder='email'
          onChange={(event) => setEmail(event.target.value)}
        />
      </div>
      <div className='input'  >
        <label>Senha</label>
        <input
          placeholder='password'
          type='password'
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button onClick={() => Cadastrar()}>Cadastro</button>
      <button onClick={() => console.log(isLogged, user)}>Teste</button>
      <button onClick={() => signOut(auth)}>Sair</button>
    </div>
  )
}
