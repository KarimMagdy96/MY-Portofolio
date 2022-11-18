import React from 'react'
import { Link } from 'react-router-dom'
import "./Sidebar.scss"

export default function Sidebar() {
  return (
    <div className="nav-bar">
      <Link className="logo" to="#">
        <img className='logo-img' src='../../../public/logo.png' alt="Karim" />
      </Link>
    </div>
  );
}
