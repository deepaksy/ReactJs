import './App.css';
import ClassComponent from './components/class/ClassComponent';
import FunctionalComponents from './components/functional/FunctionalComponents';
import "./components/ECMA_Script/es6";

function App() {
  return (
    <div className="App">
      <section id="classComponent">
        <h1>Class Component: -</h1>
        <ClassComponent/>
      </section>
      <section id="functionalComponent">
      <h1>Functional Component: -</h1>
      <FunctionalComponents/>
      </section>
      <section id="ecmaScript">
        <h1>ECMA Script 6</h1>
      </section>
    </div>
  );
}

export default App;
