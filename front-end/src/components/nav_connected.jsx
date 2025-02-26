import React from "react";
import { useDispatch } from "react-redux";
import { logout } from "../auth/authActions";

function NavConnected({ firstName }) {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <nav className="main-nav">
      <a className="main-nav-logo" href="/">
        <img
          className="main-nav-logo-image"
          src="./src/assets/img/argentBankLogo.png"
          alt="Argent Bank Logo"
        />
        <h1 className="sr-only">Argent Bank</h1>
      </a>
      <div>
        <a className="main-nav-item" href="/profile">
          <i className="fa fa-user-circle"></i>
          {firstName}
        </a>
        <a className="main-nav-item" href="/" onClick={handleLogout}>
          <i className="fa fa-sign-out"></i>
          Sign Out
        </a>
      </div>
    </nav>
  );
}

export default NavConnected;
