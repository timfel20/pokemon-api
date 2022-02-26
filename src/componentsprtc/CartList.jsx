import { useState, useEffect } from "react";
import { getAllApi } from "../service/Pokemon.jsx";
import { Cart } from "./Cart.jsx";

export default function CartList(props){

    const[pokemons, setPokemons]= useState([]);
    
    useEffect(()=>{
        getAllApi()
        .then(res => setPokemons(res.results))
        //this is the main page, it is accessing the date inside the results inside the APi. As you kmow there're two. The 
        //name and the url. inside the url we access the data with the useEffect method in the gatAllImages function and we indicate
        //in the return here that it is the url. i.e in the return, take me to the names / the url and we enter the 
        //url data with the other useEffect on the Cart component. Here the name can be printed out directly without 
        //writing more shiiii
    },[])


    return(
        <div className="container">
          <h1 className="title-msg">Let's print out some pokemon data from the API</h1>

            {pokemons.map((pokemon,index)=>(
  
            <Cart pokename={pokemon.name} pokeImg = {pokemon.url}key={index} />

            ))}
            
        </div>
    )
       
   } 