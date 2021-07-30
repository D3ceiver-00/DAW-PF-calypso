import React from 'react'
import FoodList from '../comida/foodList'

export const DulceScreen = () => {
    return (
        <div>
            <h1>Platillos Dulces</h1>
            <br/>
            <FoodList categoria='Dulce'/>
        </div>
    )
}

export default DulceScreen;