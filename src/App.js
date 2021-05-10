import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello World! My name is Rui Pinho.
        </p>
        <p>
          Let's build new apps together?
        </p>
        <a
          className="App-link"
          href="https://www.linkedin.com/in/rmapinho/?locale=en_US"
          target="_blank"
          rel="noopener noreferrer"
        >
          Rui's profile
        </a>
      </header>
    </div>
  );
}

export default App;
