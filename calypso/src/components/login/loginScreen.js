import React, { useContext } from 'react'
import { AuthContext } from '../../auth/AuthContext'
import { types } from '../../types/types';

import LogoCalypso from '../../Logo-calypso.png'

 const LoginScreen = ({history}) => {

    const {dispatch} = useContext(AuthContext)

    const handleLogin = () => {
        // push, cambia a la pagina, replace sustituye (historia de navegación)
        // history.push('/');
        // history.replace('/');

        const lastPath = localStorage.getItem('lastPath') || '/';


        const actualUser = {
            name: 'Stephanie',
            email: 'st@bc.com'
        };

        const action = {
          type: types.login,
          payload: actualUser,
        };
        dispatch(action);
        history.replace(lastPath);
    }

    return (
      <div className='container mt-5'>
        <h1>Login to Calypso!</h1>
        <br />
        <img src={LogoCalypso} alt='Logo Calypso'></img>
        <br />

        <button className='btn btn-primary' onClick={handleLogin}>
          Login
        </button>
      </div>
    );
}

export default LoginScreen;