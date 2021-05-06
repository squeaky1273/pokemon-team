import data from './data';
import { useDispatch } from 'react-redux'
import { removeFromTeam, addOne, releaseOne } from './actions'

function CapturedPokemon({id, index, count}) {
    const {name, type} = data[id]
    const dispacther = useDispatch()

    return (
        <li> 
        <strong>{name}</strong>
        <span>{type}</span>
        <span> x
            <button
                onClick={() => dispacther(releaseOne(index))}
            >+</button>
            {count}
            <button
                onClick={() => dispacther(addOne(index))}
            >+</button>
        </span>
        <button
            onClick={() => dispacther(removeFromTeam(index) )}
        >Release from Team</button>
        </li>
    )
}
export default CapturedPokemon