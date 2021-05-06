import data from './data'
import Pokemon from './Pokemon'

function PokemonList() {
  return (
    <div className="PokemonList">
      {data.map((item, i) => <Pokemon id={i} />)}
    </div>
  )
}

export default PokemonList