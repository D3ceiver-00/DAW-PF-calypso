import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';

const FoodCard = ({food}) => {
    const {id, nombre, sabor, ingredientes} = food;
    return (
        <div className='card ms-3' style={{maxWidth: 540}}>
            <div className='row no-gutters'>
                <div className='col-md-4'>
                    <img src={`./assets/comida/${id}.jpg`} className='card-img'alt={nombre}/>
                </div>
                <div className='col-md-8'>
                    <div className='card-body'>
                        <h2 className='card-title mb-0 h5'>
                            {nombre}
                        </h2>
                        <hr className='my-1'/>
                        <p className='card-text'>{ingredientes}</p>
                        <p className='card-text'>
                            <small className='text-muted'>{sabor}</small>
                        </p>
                        <Link to={`./food/${id}`}>
                            más...
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

FoodCard.propTypes = {
    food: PropTypes.object.isRequired
}

export default FoodCard