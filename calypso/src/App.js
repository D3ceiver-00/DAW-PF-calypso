import Logo-calypso from './logo-calypso.jpeg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo-calypso} className="App-logo" alt="logo" />
        <p>
          El mejor <code>lugar </code> para tus recetas.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
