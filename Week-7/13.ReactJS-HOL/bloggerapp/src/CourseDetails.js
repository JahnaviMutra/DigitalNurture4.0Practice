import React from "react";

function CourseDetails() {
  // Conditional rendering using JSX variable
  const courses = [
    { name: "Angular", date: "4/5/2021" },
    { name: "React", date: "6/3/2021" },
  ];

  let details;
  if (courses.length > 0) {
    details = (
      <div>
        {courses.map((c, i) => (
          <div key={i}>
            <h2 style={{ margin: 0 }}>{c.name}</h2>
            <div style={{ marginBottom: 10 }}>{c.date}</div>
          </div>
        ))}
      </div>
    );
  } else {
    details = <div>No courses available.</div>;
  }

  return (
    <div>
      <h1 style={{ fontWeight: "bold", marginBottom: 20 }}>Course Details</h1>
      {details}
    </div>
  );
}

export default CourseDetails;
