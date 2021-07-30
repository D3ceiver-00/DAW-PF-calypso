import React from 'react'
import foodList from '../comida/foodList'

export const saladoScreen = () => {
    return (
        <div>
            <h1>Comida salada</h1>
            <br/>
            < foodList categoria= 'Salado' />
        </div>
    )
}