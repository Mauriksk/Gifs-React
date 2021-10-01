import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () =>{

    const [categories, setCategorie] = useState(['One Punch']);

    return(
    <>
        <h2>GifExpertApp</h2>
        <p>Look for your favorite gifs</p>

        <AddCategory setCategorie={setCategorie} />
        <hr />
        <ol>{
            categories.map( category => (
                <GifGrid
                category={category} 
                key={category}
                />
            ))
        }
        </ol>
    </>
    )
}

