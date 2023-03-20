import './App.css';
import Header from './components/header/Header';
import Hero from './components/hero/Hero.jsx';
import Plans from './components/plans/Plans';
import Programs from './components/programs/Programs';
import Reasons from './components/reasons/Reasons';
function App() {
  return (
    <div className="App">
      <Hero/>
      <Programs/>
      <Reasons/>
      <Plans/>
    </div>
  );
}

export default App;
