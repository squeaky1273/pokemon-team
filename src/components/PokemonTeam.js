import { useSelector } from 'react-redux'
import ReleaseAllButton from './ReleaseAllButton'
import CapturedPokemon from './CapturedPokemon'
import './PokemonTeam.css'

function PokemonTeam() {
  const pokemonTeam = useSelector(state => state.pokemonTeam)

  return (
    <div className="TeamPage">
      <h1>Your Team</h1>
        <div className="PokemonTeam">
          {pokemonTeam.map((item,i) => <CapturedPokemon id={item.id} index={i} count={item.count} />)}
        </div>
        <ReleaseAllButton />
    </div>
  )
}

export default PokemonTeam