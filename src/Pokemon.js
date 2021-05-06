import data from './data'
import { useDispatch } from 'react-redux'
import { captureOne } from './actions'

function Pokemon({ id }) {
  const dispatcher = useDispatch()
  const { name, type } = data[id]

  return (
    <div>
      <h1>{name}</h1>
      <p>{type}</p>
      <button
        onClick={() => dispatcher(captureOne(id))}
      >Capture</button>
    </div>
  )
}

export default Pokemon