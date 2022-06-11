import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div>
          Hello Everyone, It's a test commit to check if Azure pipelines work properly.
        </div>
        <div>
          Some messages From our Developers:
        </div>
        <div>
          Ihor: Цей Проект реалізовувався ще за каденції Петра Порошенка.
        </div>
        <div>
          Andrew: Naruto best anime in the world
        </div>
        <div>
          Dima: Порошенко ne наш Президент.
        </div>
        <div>
          Endrew is joker and kiska lover
          </div>
        <a
          className="App-link"
          href="https://naruto.fandom.com/wiki/Naruto_Uzumaki"
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


