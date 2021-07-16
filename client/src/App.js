import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/Header'
import Footer from './components/Footer'
import Saved from './screens/Saved';
import Search from './screens/Search';

function App() {
  return (
    <Router className= 'container'>
      <Header />
      <div className="App">
        <Route path="/" component= {Search} exact /> 
        <Route path="/saved" component= {Saved} exact />
      </div>
      <Footer />
    </Router>
  );
}

export default App;
