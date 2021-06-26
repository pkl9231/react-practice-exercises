import './App.css';
import {
  HelloWorld,
  ComponentProps
} from './components';

function App() {
  return (
    <div className="App">
      <HelloWorld />
      <ComponentProps firstName="Purushottam" address="Mumbai" />
    </div>
  );
}

export default App;
