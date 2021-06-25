import React, { useState } from 'react';

// const categories = ['One Punch', 'Samurai X', 'Dragon Ball'];
import AddCategory from './components/AddCategory'
import { GifGrid } from './components/GifGrid';


export const GifExpertApp = () => {
    const [categories, setCategories] = useState(['']);
    // const handleAdd = () => {
    //     // setCategories(['naruto', ...categories]);
    //     //Otra forma , tener en cuenta que el setCategorie recibe un callback
    //     setCategories(cats => [...cats, 'sasuke'])
    // }
    return (
        <>
            <h2 className="animate__animated animate__slideInDown">GifExpertApp-React</h2>
            <AddCategory setCategories={setCategories} />
            <hr />
            <ol>
                {
                    categories.map(cat => {
                        return <GifGrid key={cat} category={cat} />
                    }
                    )
                }
            </ol>


        </>


    );

}

export default GifExpertApp;