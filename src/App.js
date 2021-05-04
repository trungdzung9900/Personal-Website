import './App.css';
import Navbar from './components/navbar/Navbar'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import { AnimatePresence } from "framer-motion" // 1.4kb


function App() {
  return (
    <div className="App">
      <Router>
        <AnimatePresence>
        <Navbar />
        <Switch>
          <Route path= '/' exact component ={Home}/> 
        </Switch>
        </AnimatePresence>
      </Router>

    </div>
  );
}

export default App;
