import './App.css';





import React from 'react';
import Footer from "./components/Footer/Footer";
import Profile from "./components/Profile/Profile";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";


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
