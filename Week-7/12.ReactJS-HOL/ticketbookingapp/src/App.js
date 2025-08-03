import React, { useState } from "react";
import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLoginClick = () => setIsLoggedIn(true);
  const handleLogoutClick = () => setIsLoggedIn(false);

  return (
    <div style={{ padding: 20 }}>
      {isLoggedIn ? (
        <>
          <h2>Welcome back</h2>
          <LogoutButton onClick={handleLogoutClick} />
        </>
      ) : (
        <>
          <h2>Please Sign up.</h2>
          <LoginButton onClick={handleLoginClick} />
        </>
      )}
    </div>
  );
}

export default App;
