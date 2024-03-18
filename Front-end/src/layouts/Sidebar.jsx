import React from 'react';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '../assets/styles/sidebar.css';
import { AuthProvider, Usercontext } from '../context/AuthProvider';
import UserApi from '../service/api/UserApi';
import { useNavigate } from 'react-router-dom';

const Sidebar = () => {
  const navigate=useNavigate()
  const {logout}=Usercontext();
  const handlelogout = async (e) => {
    e.preventDefault();
    await logout(); 
      logout()
      navigate('/login',{replace: true})
     
  };
  return (
    <div className='sidebar-div'>
      <nav className="navbar navbar-dark bg-dark fixed-top custom-navbar-color">
        <div className="container-fluid">
          <button className="navbar-toggler " type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon "></span>
          </button>
          <a className="navbar-brand " href="/dashboard">Gestion Vocation</a>
          <div className="offcanvas offcanvas-start text-bg-dark custom-navbar-color" tabIndex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
            <div className="offcanvas-header">
              <h5 className="offcanvas-title" id="offcanvasDarkNavbarLabel">Navigation</h5>
              <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div className="offcanvas-body d-flex flex-column">
              <div className="flex-grow-1">
                <ul className="navbar-nav justify-content-start flex-grow-1 pe-3">
                  <li className="nav-item">
                    <i className="bx bx-grid-alt"></i>
                    <a className="nav-link active" aria-current="page" href="/dashboard">Dashboard</a>
                  </li>
                  <li className="nav-item">
                    <i className="bx bx-user"></i>
                    <a className="nav-link" href="/personnel">Personnel</a>
                  </li>
                  <li className="nav-item">
                    <i className="bx bx-pie-chart-alt-2"></i>
                    <a className="nav-link" href="/budget">Budget</a>
                  </li>
                  <li className="nav-item">
                    <i className="bx bx-folder"></i>
                    <a className="nav-link" href="#">Files</a>
                  </li>
                </ul>
              </div>
              <ul className='navbar-nav'>
                <li className="nav-item">
                  <i className="bx bx-log-out" id="log_out"></i>
                  <button className="nav-link" onClick={handlelogout}>Logout</button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Sidebar;
