import React from "react";
import { Link } from "react-router-dom";

function NavGuest() {
  return (
    <nav className="main-nav">
      <Link to="/" className="main-nav-logo" aria-label="Retour à l'accueil">
        <img
          className="main-nav-logo-image"
          src="./src/assets/img/argentBankLogo.png"
          alt="Argent Bank Logo"
          width="200"
          height="54"
        />
        <h1 className="sr-only">Argent Bank</h1>
      </Link>
      <div className="main-nav-items">
        <Link 
          to="/login" 
          className="main-nav-item"
          aria-label="Se connecter"
        >
          <i className="fa fa-user-circle" aria-hidden="true"></i>
          <span>Sign In</span>
        </Link>
      </div>
    </nav>
  );
}

NavGuest.propTypes = {
  // Ajoutez ici les props si nécessaire
};

export default NavGuest; 