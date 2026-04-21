import React from 'react';
import { NavLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Styles/Styles.css';

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg shadow-sm custom-navbar py-3">
      <div className="container">

        {/* Hamburger voor mobiel */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navigatielinks */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav w-100 justify-content-between text-center">
            <li className="nav-item">
              <NavLink className="nav-link custom-link" to="/">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link custom-link" to="/onze-diensten">
                Onze diensten
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link custom-link" to="/resultaten">
                Resultaten
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link custom-link" to="/stoffen">
                Stoffen
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link custom-link" to="/over-ons">
                Over ons
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link custom-link" to="/te-koop">
                Te koop
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
