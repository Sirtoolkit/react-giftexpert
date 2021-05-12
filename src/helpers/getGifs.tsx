const getGifs:any=async(category:string)=>{

    const url='https://api.giphy.com/v1/gifs/search?api_key=t9uhXRtHevGH3vycboKeFiWULBRuKvKL&q=';
    
    const resp=await fetch(`${url}${category}`);
    
    const {data}=await resp.json();
    
return data;
};

export default getGifs;