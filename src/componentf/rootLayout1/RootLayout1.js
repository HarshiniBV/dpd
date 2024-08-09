import React from 'react';
import './RootLayout1.css'
import NavigationBar1 from '../navigation1/navigation1'
import Footer from '../../components/footer/Footer';
import { Outlet } from 'react-router-dom';

function RootLayout1() {
  return (
    <div>
        <NavigationBar1 />
        <div style={{minHeight:'85vh'}}>
        <Outlet />
        </div>
        <Footer />
    </div>
  )
}

export default RootLayout1