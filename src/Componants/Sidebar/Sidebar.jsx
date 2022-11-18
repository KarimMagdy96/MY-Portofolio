// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import "./Sidebar.scss"

export default function Sidebar() {
  return (
    <div className="nav-bar">
      <Link className="logo" to="#">
        <img className="logo-img" src="../../../public/logo.png" alt="Karim" />
      </Link>
      <nav>
        <NavLink exact="true" activeclassname="active" to="/">
          <i class="fa-solid fa-house"></i>
        </NavLink>
        <NavLink exact="true" activeclassname="active" to="/">
          <i class="fa-solid fa-house"></i>
        </NavLink>
        <NavLink exact="true" activeclassname="active" to="/">
          <i class="fa-solid fa-house"></i>
        </NavLink>
      </nav>
    </div>
  ); 
}
