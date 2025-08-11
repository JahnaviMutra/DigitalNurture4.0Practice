import React from "react";

function BookDetails() {
  // Conditional rendering using ternary operator
  const showBooks = true; // Toggle to false to test alternate output
  const books = [
    { name: "Master React", price: 670 },
    { name: "Deep Dive into Angular 11", price: 800 },
    { name: "Mongo Essentials", price: 450 },
  ];

  return (
    <div>
      <h1 style={{ fontWeight: "bold", marginBottom: 20 }}>Book Details</h1>
      {showBooks ? (
        books.map((book, i) => (
          <div key={i} style={{ marginBottom: 12 }}>
            <span style={{ fontWeight: "bold" }}>{book.name}</span>
            <br />
            <span>{book.price}</span>
          </div>
        ))
      ) : (
        <div>No books to display.</div>
      )}
    </div>
  );
}

export default BookDetails;
