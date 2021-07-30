import React, { useMemo } from 'react'
import { Redirect, useParams } from 'react-router-dom'
import { getFoodById } from '../../selectors/getFoodById';

export const foodScreen = ({history}) => {
    const {foodId} = useParams();

    // este use memo, hace que se memorice el resultado de la petición
    //   para no volver a hcer el proceso a menos que haya cambiado el param
    const foodInfo = useMemo(() => getFoodById(foodId), [foodId]);

    // Check hero exists
    if(!foodInfo) { return <Redirect to='/' />; }
    const {nombre, categoria, sabor, ingredientes} = foodId;

    const handleReturn = () => {
        if(categoria === 'Dulce') 
            history.push('./dulce');
        else
            history.push('./');
    }
    
    return (
        <div className='row mt-5'>
            <div className='col-4'>
                <img 
                    alt={nombre} 
                    className='img-thumbnail animate__animated animate__fadeInLeft'
                    src={`../assets/heroes/${foodId}.jpg`}  
                />
            </div>
            <div className='col-8'>
                <h1 className='h3'>{nombre}</h1>
                <ul className='list-group list-group-flush'>
                    <li className='list-group-item'><strong>Categoria:</strong> {categoria}</li>
                    <li className='list-group-item'><strong>Sabor:</strong> {sabor}</li>
                    <li className='list-group-item'><strong>Ingredientes:</strong> {ingredientes}</li>
                </ul>,
                <button 
                    className='btn btn-outline-info'
                    onClick={handleReturn}
                >
                    Return
                </button>
            </div>
        </div>
    )
}
