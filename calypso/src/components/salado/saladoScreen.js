import React from 'react'
import FoodList from '../comida/foodList'

const SaladoScreen = () => {
    return (
        <div>
            <h1>Platillos salados</h1>
            <br/>
            < FoodList categoria= 'Salado' />
        </div>
    )
}

export default SaladoScreen