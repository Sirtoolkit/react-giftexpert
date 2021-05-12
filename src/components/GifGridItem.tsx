import React from 'react'
import { GifInterface } from '../interfaces/GifInterfaces';

 const GifGridItem = ({id,title,username,images}:GifInterface) => {
    return (

        <div className="card-row">
          <div className="card  animate__animated animate__fadeIn" >
           <div className="container ">
           <img src={images.downsized_medium.url} alt={title} />
            <p>{title!=''?title:'No tiene titulo'}</p>
            <p id='p-username' >{username!=''?username:'No tiene username'}</p>
           </div>
        </div>
        </div>
      
    )
}
export default GifGridItem;