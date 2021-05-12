import React from 'react'
import useFetchGifs from '../hooks/useFetchGifs';
import GifGridItem from './GifGridItem';


type Props = {
    category: string;
 }


const GifGrid = ({category}:Props) => {

 const {data,loading}= useFetchGifs(category);
   
   return (
     <>
     <div className="row ">
        {loading?<h2>Cargando...</h2>:
        
        <div>
        <h2>{category}</h2>
        {data.map((e)=><GifGridItem key={e.id} id={e.id} username={e.username} title={e.title} images={e.images}/>)}            
        </div>
        
        }
     </div>
     </>
    )
}
export default GifGrid;