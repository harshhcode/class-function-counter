// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
import React from "react";
import "./App.css";
import FunctionCounter from "./components/functioncounter";
import ClassCounter from "./components/classcounter";

function App() {
  return (
    <div className="App">
      <h1>Assignment-2 Counter Application</h1>
      <div className="counter-row">
        <FunctionCounter />
        <ClassCounter />
      </div>
    </div>
  );
}

export default App;

