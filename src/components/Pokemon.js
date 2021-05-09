import data from '../data'
import { useDispatch } from 'react-redux'
import { captureOne } from '../actions'
import './Pokemon.css'

function Pokemon({ id }) {
  const dispatcher = useDispatch()
  const { name, number, image, type } = data[id]

  return (
    <div classname="PokemonDetail">
      <img src={`${process.env.PUBLIC_URL}/images/${image}`} width="200" height="200"/>
      <p>#{number}</p>
      <h1>{name}</h1>
      <p>{type}</p>
      <button
        onClick={() => dispatcher(captureOne(id))}
      >Capture</button>
    </div>
  )
}

export default Pokemon