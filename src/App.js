import './App.css';
import ContactUs from './components/ContactUs';
import FAQ from './components/FAQ';
import Home from './components/Home';
import Mynavbar from './components/Mynavbar';
import { Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Mynavbar />
      <Route exact path='/'>
        <Home />
      </Route>

      <Route path='/contactUs'>
        <ContactUs />
      </Route>

      <Route path='/faqs'>
        <FAQ />
      </Route>

    </div>
  );
}

export default App;
