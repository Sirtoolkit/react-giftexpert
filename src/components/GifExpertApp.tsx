import React , { useState } from 'react';
import AddCategory from './AddCategory';
import GifGrid from './GifGrid';


const GifExpertApp=()=> {
 const [categories, setcategories] = useState<string[]>(['One Punch Man']);

    return (
        <>
        <AddCategory setcategories={setcategories} categories={categories}/>  
        <hr />
            
        <ol>
        {
        categories.map((category:string)=><GifGrid key={category}  category={category} />)
        }
        
        </ol>
        </>
    );


}

export default GifExpertApp;