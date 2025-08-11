import React, { useState } from "react";
import CourseDetails from "./CourseDetails";
import BookDetails from "./BookDetails";
import BlogDetails from "./BlogDetails";

function App() {
  // Example conditional rendering flags (you can toggle these to show/hide components)
  const [showCourses, setShowCourses] = useState(true);
  const [showBooks, setShowBooks] = useState(true);
  const [showBlogs, setShowBlogs] = useState(true);

  return (
    <div
      style={{
        display: "flex",
        gap: 30,
        marginTop: 40,
        justifyContent: "center",
        alignItems: "flex-start",
      }}
    >
      <div style={{ borderRight: "4px solid green", paddingRight: 50, minWidth: 230 }}>
        {showCourses && <CourseDetails />}
      </div>
      <div style={{ borderRight: "4px solid green", paddingRight: 50, minWidth: 230 }}>
        {showBooks && <BookDetails />}
      </div>
      <div style={{ minWidth: 230 }}>
        {showBlogs && <BlogDetails />}
      </div>
    </div>
  );
}

export default App;
