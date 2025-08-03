import React, { useState } from "react";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [nameError, setNameError] = useState(""); 

  const handleNameChange = (e) => setName(e.target.value);
  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();

    
    if (name.length < 5) {
      setNameError("Name must be at least 5 characters.");
      alert("Full Name must be 5 characters long!");
      return;
    } else {
      setNameError("");
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      alert(`Invalid input:\nEmail: ${email}`);
      return;
    }

   
    if (password.length < 8) {
      alert("Password must be at least 8 characters.");
      return;
    }

    alert(
      "Registration Successful!\n" +
      "Name: " + name + "\n" +
      "Email: " + email
    );

    setName("");
    setEmail("");
    setPassword("");
    setNameError("");
  };

  return (
    <div style={{ paddingTop: 30, textAlign: "center" }}>
      <h1 style={{ color: "red", fontWeight: "bold", marginBottom: 25 }}>
        Register Here!!!
      </h1>
      <form
        style={{ display: "inline-block", textAlign: "left" }}
        onSubmit={handleSubmit}
        autoComplete="off"
      >
        <div style={{ marginBottom: 16 }}>
          <label style={{
            marginRight: 12,
            width: 80,
            display: "inline-block",
          }}>
            Name:
          </label>
          <input
            type="text"
            value={name}
            onChange={handleNameChange}
            style={{ width: 180, padding: 4 }}
          />
          
          <div style={{ color: "red", fontSize: 13 }}>
            {nameError}
          </div>
        </div>
        <div style={{ marginBottom: 16 }}>
          <label style={{
            marginRight: 12,
            width: 80,
            display: "inline-block",
          }}>
            Email:
          </label>
          <input
            type="text"
            value={email}
            onChange={handleEmailChange}
            style={{ width: 180, padding: 4 }}
          />
        </div>
        <div style={{ marginBottom: 16 }}>
          <label style={{
            marginRight: 12,
            width: 80,
            display: "inline-block",
          }}>
            Password:
          </label>
          <input
            type="password"
            value={password}
            onChange={handlePasswordChange}
            style={{ width: 180, padding: 4 }}
          />
        </div>
        <div style={{ textAlign: "center" }}>
          <button type="submit" style={{ minWidth: 100 }}>
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default Register;
