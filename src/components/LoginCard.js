import React, { useState } from "react";
import "../styles/LoginCard.css";  // Import CSS

const LoginCard = ({ title }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="login-card">
      <h2>{title}</h2>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button>Login</button>
    </div>
  );
};

export default LoginCard;
