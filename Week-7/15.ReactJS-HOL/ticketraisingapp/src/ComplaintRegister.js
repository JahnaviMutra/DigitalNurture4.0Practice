import React, { useState } from "react";

function ComplaintRegister() {
  const [empName, setEmpName] = useState("");
  const [complaint, setComplaint] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!empName.trim() || !complaint.trim()) {
      alert("Please fill both fields.");
      return;
    }

    
    const refNo = Math.floor(Math.random() * 90 + 10);

    alert(
      `Thanks ${empName}
Your Complaint was Submitted.
Transaction ID is: ${refNo}`
    );

    setEmpName("");
    setComplaint("");
  };

  return (
    <div style={{ paddingTop: 30, textAlign: "center" }}>
      <h1 style={{ color: "red", fontWeight: "bold", fontSize: 32, marginBottom: 25 }}>
        Register your complaints here!!!
      </h1>
      <form style={{ display: "inline-block", textAlign: "left" }} onSubmit={handleSubmit}>
        <div style={{ marginBottom: 16 }}>
          <label style={{ marginRight: 12, width: 80, display: "inline-block" }}>
            Name:
          </label>
          <input
            type="text"
            value={empName}
            onChange={(e) => setEmpName(e.target.value)}
            style={{ width: 180, padding: 4 }}
          />
        </div>
        <div style={{ marginBottom: 16 }}>
          <label style={{ marginRight: 12, width: 80, verticalAlign: "top", display: "inline-block" }}>
            Complaint:
          </label>
          <textarea
            value={complaint}
            onChange={(e) => setComplaint(e.target.value)}
            rows={3}
            style={{ width: 180, padding: 4, verticalAlign: "top" }}
          />
        </div>
        <div style={{ textAlign: "center" }}>
          <button type="submit" style={{ minWidth: 92 }}>Submit</button>
        </div>
      </form>
    </div>
  );
}

export default ComplaintRegister;
