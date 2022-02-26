import { useState, useEffect } from "react";
import { getAllImages } from "../service/Pokemon";
import { getAllWeight } from "../service/Pokemon";

export function Cart(props){

    const[images, setImages]= useState([]);
    const[weight, setWeight]= useState([]);
    
    useEffect(()=>{
        getAllImages(props.pokeImg)
        .then(res => setImages(res.sprites.other['official-artwork']['front_default']))
    },[])
   
    //explanation for the useEffect is that it's a monitor. It checks if there are changes in the hook
    // and put the new values or data of the changes in the empty array.

    return(
        <div className="data-container">
            <div>
                <h2 className="title">{props.pokename}</h2>
                <img className ="image"src = {images}/>
            </div>
        </div>
    )
       
   } 