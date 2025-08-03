import React, { useState } from 'react';

const EURO_CONVERSION_RATE = 0.011;

function CurrencyConvertor() {
  const [amount, setAmount] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isNaN(amount) && amount !== '') {
      const converted = (parseFloat(amount) * EURO_CONVERSION_RATE).toFixed(2);
      alert(`Converted Amount: € ${converted}`);
    } else {
      alert("Please enter a valid number");
    }
  };

  return (
    <div style={{ maxWidth: '400px' }}>
      <h1 style={{ color: "green", fontWeight: "bold", marginBottom: '18px' }}>Currency Convertor!!!</h1>
      <form onSubmit={handleSubmit}>
        <div style={{ margin: '10px 0' }}>
          <label style={{ display: "inline-block", width: 80 }}>Amount:</label>
          <input
            type="text"
            value={amount}
            onChange={e => setAmount(e.target.value)}
            style={{ width: 150 }}
          />
        </div>
        <div style={{ margin: '10px 0' }}>
          <label style={{ display: "inline-block", width: 80 }}>Currency:</label>
          <input
            type="text"
            value={"INR"}
            disabled
            style={{ width: 150 }}
          />
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '15px' }}>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default CurrencyConvertor;
