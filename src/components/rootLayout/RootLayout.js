import React from 'react';
import './RootLayout.css'
import NavigationBar from '../navigation/Navigation'
import Footer from '../footer/Footer';
import { Outlet } from 'react-router-dom';

function RootLayout() {
  return (
    <div>
        <NavigationBar />
        <div style={{minHeight:'90vh'}}>
        <Outlet />
        </div>
        <Footer />
    </div>
  )
}

export default RootLayout