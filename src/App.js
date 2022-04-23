import React from 'react';
import './App.css'
import { BrowserRouter as Router ,Routes ,Route } from 'react-router-dom';
import Details from './components/Details';
import Loginpage from './components/Loginpage';
import Header from './components/Header';
import Home from './components/Home';
import ScrollToTop from './components/ScrolltoTop';


function App() {
  return (
    <div className="App">
      <Router>
      <ScrollToTop>
      <Header/>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path="/details/:id" element={<Details/>}></Route>
          <Route path='/login' element={<Loginpage/>} ></Route>
        </Routes>
        </ScrollToTop>
      </Router>
    </div>
  );
}

export default App;
