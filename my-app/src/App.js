import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Business from './Pages/BusinessTools/Business';
import AdminDash from './Dashboards/Admin/AdminDash/AdminDash';
import Create from './Dashboards/Admin/Create/Create';
import Teams from './Dashboards/Admin/Teams/Teams';
import Dashboard from './Dashboards/Admin/DashBoard/Dashboard';
import Assign from './Dashboards/Admin/Asign/Assign';

function App(props) {
  return (
    <BrowserRouter>
      <>
        {props.header ? <Header /> : ''}
        <Routes>
          <Route path="/business" element={<Business />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
     
      </>
      {props.dashboard ? <Dashboard /> : ''}
      <Routes>
          <Route path="/admindash" element={<AdminDash />} />
          <Route path="/teams" element={<Teams />} />
          <Route path="/create" element={<Create />} />
          <Route path="/assign" element={<Assign />} />
        </Routes>
        {props.footer ? <Footer /> : ''}
    
    </BrowserRouter>
  );
}

export default App;
