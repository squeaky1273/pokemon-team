import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import PokemonPage from './PokemonPage'
import PokemonTeamPage from './PokemonTeamPage'


function App() {
  return (
    <div className="App">
      <Router>
      <Link to="/">Wild</Link>
      <Link to="/team">Team</Link>
  
      <Route path="/team" component={PokemonTeamPage} />
      <Route path="/" exact component={PokemonPage} />
      </Router>
    </div>
  );
}

export default App;
