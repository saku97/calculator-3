import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="all">
        <div className="header">
          <h1>calc</h1>
          <div className="theme">
            <p>THEME</p>
            <img src="theme.png" />
          </div>
        </div>
        <input className="write" type="text" />
        <div className="calculator">
          <div className="regular">
            <button>7</button>
            <button>8</button>
            <button>9</button>
            <button id="del">DEL</button>
            <button>4</button>
            <button>5</button>
            <button>6</button>
            <button>+</button>
            <button>1</button>
            <button>2</button>
            <button>3</button>
            <button>-</button>
            <button>.</button>
            <button>0</button>
            <button>/</button>
            <button>x</button>
          </div>
          <div className="Bigbuttons">
            <button className="Big">RESET</button>
            <button className="Big" id="equal">
              =
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
