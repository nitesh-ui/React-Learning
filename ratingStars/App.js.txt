import "./styles.css";
import star from "./star.svg";
import { useState } from "react";
import Star from "./star";

export default function App() {
  const [filledIndex, setFilledIndex] = useState(-1);
  const num = 5;
  console.log(filledIndex, star);
  return (
    <div className="App">
      {Array.from({ length: num }).map((item, index) => (
        <Star
          filledIndex={filledIndex}
          index={index}
          setFilledIndex={(index) => setFilledIndex(index)}
        />
      ))}
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}
