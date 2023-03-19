import './App.css';
import Header from './components/header/Header';
import Hero from './components/hero/Hero.jsx';
import Programs from './components/programs/Programs';
import Reasons from './components/reasons/Reasons';
function App() {
  return (
    <div className="App">
      <Hero/>
      <Programs/>
      <Reasons/>
    </div>
  );
}

export default App;
