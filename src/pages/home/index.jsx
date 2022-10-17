import styles from './home.module.scss';
import React from 'react';

import { signOut } from 'firebase/auth';
import { AuthContext } from '../../components/authContext';
import { useContext } from 'react';

export default function Home() {

  const {
    auth
  } = useContext(AuthContext)

  return (
    <div>
      <div className={styles.home}>
        <h1>Oi vc conseguiu! PARABENS!!</h1>
      </div>  
      <div >
        <h1>ggdsafdsa</h1>

        <button
          onClick={() => signOut(auth)}
        >
          Sair
        </button>
      </div>
    </div>
  )
}