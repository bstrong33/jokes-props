import './App.css';
import Joke from './components/Joke';
import jokesData from './components/jokesData';

function App() {
  const jokeElements = jokesData.map(joke => {
    return <Joke 
      setup={joke.setup}
      punchline={joke.punchline}
    />
  })
  return (
    <div className="App">
      {jokeElements}
    </div>
  );
}

export default App;
