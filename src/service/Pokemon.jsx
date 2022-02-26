

export function getAllApi(){
    return fetch("https://pokeapi.co/api/v2/pokemon")
    .then(res=>res.json())
}

//Async function waits. i.e it doesn't run until after other functions run. so getAllImages waits for getAllApi
//to run before running. It depends on iy anyways, since getAllapi fetches the API.

export async function getAllImages(pokeImg){
    return fetch (pokeImg)
    .then(res=> res.json())
}

