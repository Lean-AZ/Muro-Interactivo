import React from 'react'

export default function Navbar({ user, onLogout }) {
  return (
    <nav className="navbar">
      <div className="brand">Muro Interactivo</div>
      {user ? <button className="btn btn-danger" onClick={onLogout}>Cerrar sesión</button> : null}
    </nav>
  )
}
