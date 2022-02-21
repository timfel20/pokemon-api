

export function getAllApi(){
    return fetch ("https://pokeapi.co/api/v2/pokemon",{ method:"GET"})
    .then(res=> res.json())
}

export async function getAllImages(pokeImg){
    return fetch (pokeImg,{ method:"GET"})
    .then(res=> res.json())
}