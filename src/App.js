import './App.css';

import Nav from './Nav.js';
import TodoNow from './TodoNow.js';
import List from './List.js'

function App() {
  return (
    <div className="App">
      <Nav />
      <TodoNow />
      <button className="button" >New Todo</button>
      <List />
    </div>
  );
}

export default App;
