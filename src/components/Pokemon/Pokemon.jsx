import './Pokemon.css'



const Pokemon = ({ pokemon }) => {
    const { id, name, sprites } = pokemon
    console.log(pokemon);
    return (
        <article>
            <p>id: {id}</p>
            <img src={sprites.front_default} alt="" />
            <p>name: {name}</p>
        </article>

    )
}

export default Pokemon;




