import react from "react";
import React, { useEffect, useState } from "react";

export function Asyncawait(){
  const [getData, setData] = useState({
    name:"",
    specie:"",
    image:"",
    weight:""
  });

  useEffect(()=>{
        fetch('https://pokeapi.co/api/v2/pokemon/bulbasaur')
        .then ((response) => response.json())
       .then((response) => {setData({
           name:response.name,
           specie:response.species.name,
           image:response.sprites.front_default,
           weight:response.weight
       })
    })
  },[]);

  return(
      <div>
         <h1>{getData.name}</h1>
         <img className = "img"src ={getData.image}/>
      </div>
  )
}