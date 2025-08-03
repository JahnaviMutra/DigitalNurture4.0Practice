import React from 'react';
import './App.css';
import officeImage from './office.jpg'; // Ensure you have an image file named 'office.jpg' in the src directory

function App() {
  // Create an object of office to display the details like Name, Rent and Address [cite: 54]
  const officeDetails = {
    Name: "DBS",
    Rent: 50000,
    Address: "Chennai"
  };

  // Determine the CSS class based on the rent value 
  const rentColorClass = officeDetails.Rent <= 60000 ? 'textRed' : 'textGreen';

  return (
    <div style={{ textAlign: 'center', fontFamily: 'Arial, sans-serif' }}>
      {/* Create an element to display the heading of the page [cite: 52] */}
      <h1>Office Space , at Affordable Range</h1>
      
      {/* Attribute to display the image of the office space [cite: 53] */}
      <img src={officeImage} alt="Office Space" style={{ width: '400px', height: 'auto', margin: '20px auto' }} />
      
      <div>
        <h2>Name: {officeDetails.Name}</h2>
        
        {/* Apply Css, Display the color of the Rent in Red if it’s below 60000 and in Green if it’s above 60000.  */}
        <h3 className={rentColorClass}>Rent: Rs. {officeDetails.Rent}</h3>
        
        <h3>Address: {officeDetails.Address}</h3>
      </div>
    </div>
  );
}

export default App;