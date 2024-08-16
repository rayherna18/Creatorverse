import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './Routes'
import Hero from "./components/Hero.jsx";

function App() {

  return (
    <Router>
      <Hero/>
      <Routes/>
    </Router>
  )
}

export default App;
