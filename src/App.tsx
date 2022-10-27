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
import ThemeHelper from './components/theme/ThemeHelper';
import EventBind from './topics/binding_event_handlers/EventBind';
import ParentComponent from './topics/methods_as_props/ParentComponent';
import UserGreeting from './topics/conditional_rendering/UserGreeting';
import NameList from './topics/list_rendering/NameList';
import Stylesheet from './topics/styling_css/Stylesheet';
import Form from './topics/form_handling/Form';
function App() {
  return (
    <div className="App">
      <div>
        <ThemeHelper/>
      </div>
      <section className='section' id="classComponent">
        <h1 className="heading">Class Component: -</h1>
        <ClassComponent/>
      </section>

      <section className='section' id="functionalComponent">
      <h1 className="heading">Functional Component: -</h1>
      <FunctionalComponents/>
      </section>

      <section className='section' id="ecmaScript">
        <h1 className="heading">ECMA Script 6</h1>
      </section>

      <section className='section' id="jsx">
        <h1 className="heading">With JSX</h1>
        <JSX/>
        <h1 className="heading">without JSX</h1>
        <WithoutJSX/>
      </section>

      <section className='section' id='props'>
        <h1 className="heading">Class Props</h1>
        <Classprops name="Deepak"/>
        <h1 className="heading">Functional Props</h1>
        <FunctionalProps name="Deepak"/>
      </section>

      <section className='section' id='state'>
        <h1 className="heading">Class State</h1>
        <ClassStateComponent/>
        <h2>Class Counter</h2>
        <ClassCounter/>
      </section>

      <section className='section' id='destructuring'>
        <h1 className="heading">Class Destructuring</h1>
        <ClassDesctructuring name="Clark" heroName='Batman'/>
      </section>
      
      <section className='section' id='eventHandling'>
        <h1 className="heading">Function Events</h1>
        <FunctionClick/>
        <h1 className="heading">Class Events</h1>
        <ClassClick/>
      </section>

      <section className='section' id='bindingEventHandlers'>
        <h1 className='heading'>Event Binding</h1>
        <EventBind />
      </section>

      <section className="section" id="methodAsProps">
        <h1 className="heading">Method as Props</h1>
        <ParentComponent/>
      </section>
      
      <section className="section" id="conditionalRendering">
        <h1 className="heading">Conditional Rendering</h1>
        <UserGreeting isLoggedIn={false}/>
      </section>

      <section className="section" id="listRendering">
        <NameList/>
      </section>
      <section className="section" id="styleSheetsCss">
        <h1>Styling and CSS Basics</h1>
        <Stylesheet primary={true}/>
      </section>

      <section className="section" id="formHandling">
        <h1>Form Handling</h1>
        <Form/>
      </section>
    </div>
  );
}

export default App;
