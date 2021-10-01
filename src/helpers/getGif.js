

export const getGif = async ( category ) => { 
    const url = `https://api.giphy.com/v1/gifs/search?api_key=CN7mIRf9XBMt6WOcpAbfU6wR8sBA4yFZ&q=${ encodeURI( category ) }&limit=25`
    const respuesta = await fetch(url);
    //Es el data de la data entonces mejor desestructurado para no poner data 2 veces
    const { data } = await respuesta.json();
    
    const gifs = data.map( img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        }
    } )
    
    return gifs

}