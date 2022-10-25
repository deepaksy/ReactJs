import './App.css';
import ClassComponent from './components/class/ClassComponent';
import FunctionalComponents from './components/functional/FunctionalComponents';
import "./components/ECMA_Script/es6";
import JSX from './topics/jsx/JSX';
import WithoutJSX from './topics/jsx/WithoutJsx'
import Classprops from './topics/props/ClassProps'
import FunctionalProps from './topics/props/FunctionalProps'
import ClassStateComponent from './topics/state/ClassState';
import ClassCounter from './topics/state/ClassCounter';
import ClassDesctructuring from './topics/destructuring/ClassDesctructuring';
import FunctionClick from './topics/event/FunctionClick';
import ClassClick from './topics/event/ClassClick';
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
      <section id="jsx">
        <h1>With JSX</h1>
        <JSX/>
        <h1>without JSX</h1>
        <WithoutJSX/>
      </section>
      <section id='props'>
        <h1>Class Props</h1>
        <Classprops name="Deepak"/>
        <h1>Functional Props</h1>
        <FunctionalProps name="Deepak"/>
      </section>
      <section id='state'>
        <h1>Class State</h1>
        <ClassStateComponent/>
        <h2>Class Counter</h2>
        <ClassCounter/>
      </section>
      <section id='destructuring'>
        <h1>Class Destructuring</h1>
        <ClassDesctructuring name="Clark" heroName='Batman'/>
      </section>
      
      <section id='eventHandling'>
        <h1>Function Events</h1>
        <FunctionClick/>
        <h1>Class Events</h1>
        <ClassClick/>
      </section>
    </div>
  );
}

export default App;
