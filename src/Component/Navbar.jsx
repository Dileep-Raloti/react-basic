import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Navbar() {
    return (
        <div>
              <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container">
                  <NavLink activeClassName="menu_active" exact className="navbar-brand" to="/">
                    <h3>  <span>ddr_world</span></h3>
                  </NavLink>
                  <button className="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavId" aria-controls="collapsibleNavId"
                      aria-expanded="false" aria-label="Toggle navigation">
                      <span className="navbar-toggler-icon"></span>
                  </button>
                  <div className="collapse navbar-collapse" id="collapsibleNavId">
                      <ul className="navbar-nav ms-auto mt-2 mt-lg-0">
                          <li className="nav-item active">
                              <NavLink activeClassName="menu_active" exact className="nav-link" to="/">Home</NavLink>
                          </li>
                          <li className="nav-item">
                              <NavLink activeClassName="menu_active" exact className="nav-link" to="/services">Services</NavLink>
                          </li>
                          <li className="nav-item active">
                              <NavLink activeClassName="menu_active" exact className="nav-link" to="/about">About</NavLink>
                          </li>
                          <li className="nav-item">
                              <NavLink activeClassName="menu_active" exact className="nav-link" to="/contact">Contact</NavLink>
                          </li>
                      </ul>
                  </div>
            </div>
          </nav>

        </div>
    )
}
