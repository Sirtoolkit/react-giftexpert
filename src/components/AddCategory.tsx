import React, { useState } from 'react'

type Props = {
    categories: string[];
    setcategories: (active: string[]) => void;
 }


 const AddCategory = ({ categories, setcategories} :Props ) => {

    const [inputValue, setInputValue] = useState('');
    
    const handleChange=(e:any)=>{
       setInputValue(e.target.value);
    };

    const handleSubmit=(e:any)=>{

        e.preventDefault();
       
        if (inputValue.trim().length>2) {
            setcategories([inputValue,...categories]);
            setInputValue('');
          }
     };
 


    return (
        <>
            <form onSubmit={handleSubmit}>
            <h2>Categoria</h2>
            <input type="text" value={inputValue} onChange={handleChange}/>
            </form>
        </>
    );
}
export default AddCategory;