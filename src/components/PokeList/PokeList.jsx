import { useState, useEffect } from "react";
import Pokemon from "../Pokemon/Pokemon.jsx";

const PokeList = () => {

    const [pokeList, setPokeList] = useState([])

    const getData = async () => {
        return fetch("https://pokeapi.co/api/v2/pokemon").then(res => res.json())
    }


    useEffect(() => {
        getData().then(res => {

            Promise.all(res.results.map(e => fetch(e.url).then(res => res.json()))).then(res => setPokeList(res))

        })
    }, [])




   






    return (
        <>
        
        {
            pokeList.map((pokemon,i) => <Pokemon key={i} pokemon={pokemon}/>)
        }
        </>
    )
}


export default PokeList;