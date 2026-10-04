import { useState } from 'react'
import './navbar.css'

function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className="navbar">

      {/* Logo */}
      <div className="logo">

        <h2>من اجلك </h2>

        <span>ACCESSOIRES</span>

      </div>


      {/* Desktop Navigation */}
      <div className="nav-links">

        <a href="#home" className="active">
          Accueil
        </a>

        <a href="#collections">
          Collections
        </a>

        <a href="#about">
          À propos
        </a>

      

      </div>


   


      {/* Mobile Menu Button */}
      <button
        className="menu-btn"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? '✕' : '☰'}
      </button>


      {/* Mobile Menu */}
      {menuOpen && (

        <div className="mobile-menu">

          <a
            href="#home"
            onClick={() => setMenuOpen(false)}
          >
            Accueil
          </a>

          <a
            href="#collections"
            onClick={() => setMenuOpen(false)}
          >
            Collections
          </a>

          <a
            href="#about"
            onClick={() => setMenuOpen(false)}
          >
            À propos
          </a>

       

     

        </div>

      )}

    </nav>
  )
}

export default Navbar