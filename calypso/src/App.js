import Logo from './Logo-calypso.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={Logo} className="App-logo" alt="logo" />
        <p>
          El mejor <code>lugar </code> para tus recetas.
        </p>
      </header>
    </div>
  );
}

export default App;
