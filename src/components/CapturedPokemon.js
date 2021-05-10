import data from '../data';
import { useDispatch } from 'react-redux'
import { removeFromTeam, addOne, releaseOne } from '../actions'
// import './CapturedPokemon.css'

function CapturedPokemon({id, index, count}) {
    const {name, image, type} = data[id]
    const dispacther = useDispatch()

    return (
        <div classname="CapturedPokemon">
            <ul>
                <img src={`${process.env.PUBLIC_URL}/images/${image}`} width="200" height="200"/>
                <h1>{name}</h1>
                <p>{type}</p>
                <p>
                    <button
                        onClick={() => dispacther(releaseOne(index))}
                    >-</button>
                    { count }
                    <button
                        onClick={() => dispacther(addOne(index))}
                    >+</button>
                </p>
                <button
                    onClick={() => dispacther(removeFromTeam(index) )}
                >Release One</button>
            </ul>
        </div>
    )
}
export default CapturedPokemon