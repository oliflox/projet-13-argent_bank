import React, { useState } from "react";
import Navigation from "../components/Navigation";
import { useUserData } from "../hooks/useUserData";
import { updateUserProfile } from "../services/userService";

function User() {
  const { userData, error: userError, isLoading: userLoading, refreshUserData } = useUserData();
  const [isEditing, setIsEditing] = useState(false);
  const [newFirstName, setNewFirstName] = useState("");
  const [newLastName, setNewLastName] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  const handleEditClick = () => {
    setIsEditing(true);
    setNewFirstName(userData.firstName);
    setNewLastName(userData.lastName);
    setError("");
    setSuccessMessage("");
  };

  const handleSaveClick = async () => {
    setIsLoading(true);
    setError("");
    setSuccessMessage("");

    const result = await updateUserProfile({
      firstName: newFirstName,
      lastName: newLastName
    });

    if (result.success) {
      await refreshUserData();
      setIsEditing(false);
      setSuccessMessage("Profile updated successfully!");
    } else {
      setError(result.error);
    }
    
    setIsLoading(false);
  };

  const handleCancelClick = () => {
    setIsEditing(false);
    setError("");
    setSuccessMessage("");
  };

  return (
    <>
      <Navigation isAuthenticated={true} firstName={userData.firstName} />
      <main className="main bg-dark">
        <div className="header">
          <h1>
            Welcome back
            <br />
            {userData.firstName} {userData.lastName}!
          </h1>
          {isEditing ? (
            <div>
              <div className="edit-container">
                <input
                  type="text"
                  value={newFirstName}
                  className="edit-input"
                  onChange={(e) => setNewFirstName(e.target.value)}
                  disabled={isLoading}
                  placeholder="First Name"
                />
                <input
                  type="text"
                  value={newLastName}
                  className="edit-input"
                  onChange={(e) => setNewLastName(e.target.value)}
                  disabled={isLoading}
                  placeholder="Last Name"
                />
              </div>
              <div className="button-container">
                <button 
                  className="active-edit-button" 
                  onClick={handleSaveClick}
                  disabled={isLoading}
                >
                  {isLoading ? "Saving..." : "Save"}
                </button>
                <button 
                  className="active-edit-button" 
                  onClick={handleCancelClick}
                  disabled={isLoading}
                >
                  Cancel
                </button>
              </div>
              {error && <p className="error-message">{error}</p>}
              {successMessage && <p className="success-message">{successMessage}</p>}
            </div>
          ) : (
            <button 
              className="active-edit-button" 
              onClick={handleEditClick}
              disabled={isLoading}
            >
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
