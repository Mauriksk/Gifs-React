import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
import { GifGridItem } from './GifGridItem';

export const GifGrid = ( {category} ) => {

    
    const { data:images , loading } = useFetchGifs( category );

    //Este hock me permite poner dependencias en el arreglo, si el arreglo esta vacio la funcion dentro solo se ejecutara una ves
    /* useEffect(() => {
        getGif( category )
            .then(setimages)
    }, [ category ]) */

    //Le coloco el category al array para que no joda el warnin y para que en caso de que cambie la categoria
    //vuelva a permitir ejecutar de nuevo la peticion

    

    return (
        <>

        <h3 className="animate__animated animate__pulse"> {category} </h3>
        <div className="card-grid">
        {loading && <p className="animate__animated animate__flash">Loading</p>}
            {
                images.map( (img) => (
                    <GifGridItem 
                        key={img.id}
                        //Otra forma de enviarlas props (todas)
                        { ...img }
                    />
                ))
            }
        </div> 

        </>
    )
}
