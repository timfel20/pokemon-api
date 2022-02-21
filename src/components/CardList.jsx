import { useState, useEffect } from "react";
import { getAllApi } from "../service/Pokemon.jsx";
import { Card } from "./Card";


export default function CardList(){

    const [pokemons, setPokemons] = useState([]);

    useEffect(()=>{
        getAllApi().then((res)=> setPokemons(res.results))
    },[])

    return(
        <div>
            {pokemons.map((pokemon, index)=>
                    ( <Card pokiname={pokemon.name}  pokeImg={pokemon.url} key={index}/>)
                    
            )}
        </div>
)
}