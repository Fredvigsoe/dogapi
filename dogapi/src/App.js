import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import Navbar from './Navbar';
import {RandomDogs, ShibaInu, Affenpinscher, AlaskanHusky} from './Doglist';
import SignIn from './SignIn';
import SignUp from './SignUp';
import AuthDetails from './AuthDetails';


function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Navbar />
        </header>
        <div className="content">
          <Routes>
            <Route path="/random-dogs" element={<RandomDogs />} />
            <Route path="/alaskan-husky" element={<AlaskanHusky />} />
            <Route path="/shiba-inu" element={<ShibaInu />} />
            <Route path="/affenpinscher" element={<Affenpinscher />} />
            <Route path="/log-in" element={<SignIn />} />
            <Route path="/sign-up" element={<SignUp />} />


          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;

