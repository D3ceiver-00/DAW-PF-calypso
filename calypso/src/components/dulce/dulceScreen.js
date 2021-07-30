import React from 'react'
import foodList from '../comida/foodList'

export const dulceScreen = () => {
    return (
        <div>
            <h1>Platillos Dulces</h1>
            <br/>
            <foodList categoria='Dulce'/>
        </div>
    )
}
