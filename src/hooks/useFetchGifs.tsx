import { useEffect, useState } from "react";
import getGifs from "../helpers/getGifs";
import { GifInterface } from "../interfaces/GifInterfaces";

 const useFetchGifs = (category:string) => {
     const [state, setstate] = useState({data:[] as GifInterface[],loading:true});

    useEffect(() => {
            
    getGifs(category)
    .then((result:any) => {
        setstate({
            data:result,
            loading:false
        });
    });
        setstate
    }, [])
    
     return state;
}
export default useFetchGifs;