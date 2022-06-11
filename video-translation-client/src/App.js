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
          Andrew: Yaruhayu
        </div>
        <div>
          Dima: Порошенко ne наш Президент.
        </div>
        <a
          className="App-link"
          href="https://uk.wikipedia.org/wiki/%D0%91%D0%BE%D1%80%D0%B8%D1%81_%D0%94%D0%B6%D0%BE%D0%BD%D1%81%D0%BE%D0%BD"
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


