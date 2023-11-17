import React from 'react'
import { BrowserRouter, Routes, Route,Link, } from "react-router-dom";
import  { useRef, useEffect, useState } from 'react';
import Teams from '../Teams/Teams';
import Create from '../Create/Create';

import './DashBoard.css'
import AdminDash from '../AdminDash/AdminDash';
function Dashboard() {
  return (
      
    <div className="Dashboard">
    <ul className="dashboard">
      <li>
        <div className="logo-picture">
          <div className="logo-picture-background"></div>
        </div>
      </li>
     
      <li>
        <Link to="/admindash">Dashboard</Link>
      </li>
      <li>
        <Link to="/teams">Teams</Link>
      </li>
      <li>
        <Link to="/create">Create</Link>
      </li>

    </ul>
  </div>

  )
}

export default Dashboard
