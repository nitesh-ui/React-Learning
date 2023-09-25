import { useState } from 'react';
import './App.css';
import CounterOne from './components/counterOne';
import CounterTwo from './components/counterTwo';

function App() {
  return (
    <div className="App">
      <CounterOne />
      <CounterTwo />
    </div>
  );
}

export default App;
