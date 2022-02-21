import { useState, useEffect } from "react";
import { getAllImages } from "../service/Pokemon.jsx";

export function Card(props){
 const [images, setImages] = useState([]);


    useEffect(()=>{
        getAllImages(props.pokeImg)
        .then(res=>setImages(res.sprites.other['official-artwork']['front_default']))
    },[])

    return(
        <div>
            <h1>{props.pokiname}</h1>
            <img src = {images} alt ="img"/>
        </div>
)
}