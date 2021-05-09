import data from '../data'
import Pokemon from './Pokemon'
import './PokemonList.css'

function PokemonList() {
  return (
    <div className="PokemonList">
      {data.map((item, i) => <Pokemon id={i} />)}
    </div>
  )
}

export default PokemonList