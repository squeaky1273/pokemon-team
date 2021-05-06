import { useSelector } from 'react-redux'
import ReleaseAllButton from './ReleaseAllButton'
import CapturedPokemon from './CapturedPokemon'

function PokemonTeam() {
  const pokemonTeam = useSelector(state => state.pokemonTeam)

  return (
    <div className="PokemonTeam">
      <h1>Your Team</h1>
        <ul>
          {pokemonTeam.map((item,i) => <CapturedPokemon id={item.id} index={i} count={item.count} />)}
        </ul>
        <ReleaseAllButton />
      </div>
  )
}

export default PokemonTeam