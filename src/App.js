
import './App.css';
import First from './First';
import User from './User';

function App() {
  function Test(){
    return (<h1>test</h1>)
  }
  return (
    <div className="App">
      <header className="App-header">
        <User />
        <First />
        <Test />
      </header>
    </div>
  );
}

export default App;
