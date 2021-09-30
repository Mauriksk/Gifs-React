import React, {useState} from 'react'
import PropTypes from 'prop-types';

export const AddCategory = ( {setCategorie} ) => {

    const [inputValue, setinputValue] = useState('')

    const handleInputChange = (e) => {
        setinputValue( e.target.value )
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if( inputValue.trim().length > 2 ){
            setCategorie( animes => [ inputValue, ...animes ])
            setinputValue('')
        }
        
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
            type="text"
            value={ inputValue }
            onChange={ handleInputChange }
            />
        </form>
    )
}

AddCategory.propTypes = {
    setCategorie: PropTypes.func.isRequired
}


