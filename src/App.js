import React from 'react';
import Home from './Components/Home/Home';
import NavigationBar from './Components/NavigationBar/NavigationBar';
import { Outlet } from 'react-router-dom';
import Footer from './Components/Footer/Footer';

const App = () => {
  return (
    <div className='lg:mx-16'>
      <NavigationBar/>
      <Outlet/>
      <Footer/>
    </div>
  );
};

export default App;