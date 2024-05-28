import './App.css';
import Content from "./components/Content";
import ParticlesComponent from './components/Particles';

function App() {
  return (
    <div className="App">
      <ParticlesComponent id="particles"/>
      <Content />
    </div>
  );
}

export default App;
