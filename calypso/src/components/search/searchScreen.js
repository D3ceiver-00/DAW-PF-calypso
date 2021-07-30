import React, { useMemo } from 'react'
import { useLocation } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import queryString from 'query-string'
import { getFoodByName } from '../../selectors/getFoodByName';
import { foodCard } from '../comida/foodCard';

// para trabajar con query string, existe este paquete
// https://www.npmjs.com/package/query-string
// queryString.parse(location.search)

export const SearchScreen = ({history}) => {

    const location = useLocation();
    const {q = ''} = queryString.parse(location.search);

    const [{foodSearched}, handleInputChange, reset ] = useForm({
        foodSearched: q
    });

    const filteredFood = useMemo(() => getFoodByName(q), [q])

    const handleSearch = (e) => {
        e.preventDefault();
        history.push(`?q=${foodSearched}`);
    }
    return (
        <>
            <h1>Busca tu platillo!</h1>
            <br/>
            <div className='row'>
                <div className='col-5'>
                    <h2 className='h4'>Search Form</h2>
                    <hr />
                    <form onSubmit={handleSearch}>
                        <input 
                            type='text'
                            placeholder="El nombre de tu platillo"
                            className='form-control'
                            value={foodSearched}
                            name='foodSearched'
                            autoComplete='off'
                            onChange={handleInputChange}
                        />
                        <button 
                            className='form-control btn btn-block btn-outline-primary mt-2'
                            type='submit'
                        >
                            Search
                        </button>
                    </form>
                </div>
                <div className='col-7'>
                    <h3 className='h4'>Results</h3>
                    <hr />
                    
                    {
                        (q === '') 
                            &&
                            <div className='alert alert-info'>
                                Busca un platillo!
                            </div>
                    }
                    {
                        (q !== '' && filteredFood.length === 0) 
                            &&
                            <div className='alert alert-danger'>
                                There is no food with {q}
                            </div>
                    }
                    {
                        filteredFood.map(food => (
                            <foodCard
                                key={food.id}
                                food ={food}
                            />
                        ))
                    }
                </div>
            </div>
        </>
    )
}
