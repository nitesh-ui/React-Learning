import { useState } from 'react';
import './App.css';
import Counter from './component/Counter';
import Questions from './component/Questions';
import {questions} from './questions';

function App() {

  const [counterValue, setCounterValue] = useState(0);
  const [counterValue1, setCounterValue1] = useState(1);

  const incrementAllHandler = () => {
    setCounterValue(counterValue + 1);
    setCounterValue1(counterValue1 + 1);
  }

  return (
    <div>
      <Questions allQuestion={questions} selectedOption={questions[0]}/>
      <Counter value={counterValue} setCounterValue={setCounterValue} incrementAllHandler={incrementAllHandler}/>
      <Counter value={counterValue1} setCounterValue={setCounterValue1} incrementAllHandler={incrementAllHandler}/>
    </div>
  );
}

export default App;
