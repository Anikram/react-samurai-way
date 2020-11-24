import './App.css';
import './header.css'
import React from 'react';
import Footer from "./components/Footer";
import Profile from "./components/Profile";
import Header from "./components/Header";
import Navbar from "./components/Navbar";


const App = () => {
  return (
    <div>
      <Header/>

      <div className={'app-wrapper'}>
        <Navbar/>
        <Profile/>
      </div>

      <Footer/>
    </div>
  );
};

export default App;
