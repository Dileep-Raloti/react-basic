import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Navbar from './Component/Navbar';
import Footer from './Component/Footer'
import About from './Pages/About';
import Contact from './Pages/Contact';
import Home from './Pages/Home';
import Services from './Pages/Services';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />   
        <Switch>
          <Route exact path="/"> <Home/> </Route>
          <Route exact path="/about"> <About/> </Route>
          <Route exact path="/contact"> <Contact/> </Route>
          <Route exact path="/services"> <Services/> </Route>
        </Switch>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
