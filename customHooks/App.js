import { useState } from 'react';
import './App.css';
import Counter from './Counter';
import CounterOne from './components/counterOne';
import CounterTwo from './components/counterTwo';

function App() {

  const [showCounter, setShowCounter] = useState(false);

  return (
    <div className="App">
      <input type="checkbox" id="toggleCounter" checked={showCounter} onChange={({target}) => setShowCounter(target.checked)} />
      <div>{showCounter && <Counter/>}</div>
      <CounterOne />
      <CounterTwo />
    </div>
  );
}

export default App;
