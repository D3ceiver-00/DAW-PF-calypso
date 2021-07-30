import React, { useMemo } from 'react'
import PropTypes from 'prop-types'
import FoodCard from './foodCard.js';
import { getFoodByClass } from '../../selectors/getFoodByClass';

export const FoodList = ({categoria}) => {
    // este use memo, hace que se memorice el resultado de la petición
    //   para no volver a hcer el proceso a menos que haya cambiado el param
    const platillos = useMemo(() => getFoodByClass(categoria), [categoria]);

    return (
        <div className='card-columns animate__animated animate__fadeIn'>
            {
                platillos.map( (food) => (
                    <FoodCard key = {food.id} food= {food} />
                ))
            }
        </div>
    )
}

FoodList.propTypes = {
    categoria: PropTypes.string.isRequired
}

export default FoodList