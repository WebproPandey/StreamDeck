import React from 'react';
import { useLocation } from 'react-router-dom';
import AppRoute from '../AppRoute/AppRoute';
import Navbar from './Navbar';

const Home = () => {
  const location = useLocation();

  return (
    <div className="w-full relative bg-[#222]">
      {location.pathname !== '/' && <Navbar />}
      <AppRoute />
    </div>
  );
};

export default Home;
