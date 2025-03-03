import React, { useEffect, useState } from "react";
import NavConnected from "../components/nav_connected";
import { apiProfileCall, apiUpdateProfileCall } from "../api/apiProfileCall";

function User() {
  const [user, setUser] = useState({ firstName: "", lastName: "" });
  const [isEditing, setIsEditing] = useState(false);
  const [newFirstName, setNewFirstName] = useState("");
  const [newLastName, setNewLastName] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchUserData = async () => {
      const userData = await apiProfileCall();
      if (userData) {
        setUser({ firstName: userData.firstName, lastName: userData.lastName });
      }
    };
    fetchUserData();
  }, []);

  const handleEditClick = () => {
    setIsEditing(true);
    setNewFirstName(user.firstName);
    setNewLastName(user.lastName);
  };

  const handleSaveClick = async () => {
    if (newFirstName.trim().length < 2 || newLastName.trim().length < 2) {
      setError("First name and last name must be at least 2 characters long.");
      return;
    }
    const updatedUser = { firstName: newFirstName.trim(), lastName: newLastName.trim() };
    const success = await apiUpdateProfileCall(updatedUser);
    if (success) {
      setUser(updatedUser);
      setIsEditing(false);
      setError("");
    } else {
      setError("Failed to update profile. Please try again.");
    }
  };

  const handleCancelClick = () => {
    setIsEditing(false);
    setNewFirstName(user.firstName);
    setNewLastName(user.lastName);
    setError("");
  };

  return (
    <>
      <NavConnected firstName={user.firstName} />
      <main className="main bg-dark">
        <div className="header">
          <h1>
            Welcome back
            <br />
            {user.firstName} {user.lastName}!
          </h1>
          {isEditing ? (
            <div>
              <div className="edit-container">
                <input
                  type="text"
                  value={newFirstName}
                  className="edit-input"
                  onChange={(e) => setNewFirstName(e.target.value)}
                />
                <input
                  type="text"
                  value={newLastName}
                  className="edit-input"
                  onChange={(e) => setNewLastName(e.target.value)}
                />
              </div>
              <div className="button-container">
                <button className="active-edit-button" onClick={handleSaveClick}>Save</button>
                <button className="active-edit-button" onClick={handleCancelClick}>Cancel</button>
              </div>
              {error && <p className="error-message">{error}</p>}
            </div>
          ) : (
            <button className="edit-button" onClick={handleEditClick}>
              Edit Name
            </button>
          )}
        </div>
        <h2 className="sr-only">Accounts</h2>
        <section className="account">
          <div className="account-content-wrapper">
            <h3 className="account-title">Argent Bank Checking (x8349)</h3>
            <p className="account-amount">$2,082.79</p>
            <p className="account-amount-description">Available Balance</p>
          </div>
          <div className="account-content-wrapper cta">
            <button className="transaction-button">View transactions</button>
          </div>
        </section>
        <section className="account">
          <div className="account-content-wrapper">
            <h3 className="account-title">Argent Bank Savings (x6712)</h3>
            <p className="account-amount">$10,928.42</p>
            <p className="account-amount-description">Available Balance</p>
          </div>
          <div className="account-content-wrapper cta">
            <button className="transaction-button">View transactions</button>
          </div>
        </section>
        <section className="account">
          <div className="account-content-wrapper">
            <h3 className="account-title">Argent Bank Credit Card (x8349)</h3>
            <p className="account-amount">$184.30</p>
            <p className="account-amount-description">Current Balance</p>
          </div>
          <div className="account-content-wrapper cta">
            <button className="transaction-button">View transactions</button>
          </div>
        </section>
      </main>
      <footer className="footer">
        <p className="footer-text">Copyright 2020 Argent Bank</p>
      </footer>
    </>
  );
}

export default User;
