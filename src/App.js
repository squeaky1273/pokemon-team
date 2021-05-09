import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import PokemonPage from './components/PokemonPage'
import PokemonTeamPage from './components/PokemonTeamPage'
import Title from './components/Title';


function App() {
  return (
    <Router>
      <div className="App">
        <Title />
        <Route path="/team" component={PokemonTeamPage} />
        <Route path="/" exact component={PokemonPage} />
      </div>
    </Router>
  );
}

export default App;
